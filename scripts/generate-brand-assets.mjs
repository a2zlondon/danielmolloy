/**
 * Generates the whole brand pack from a single parametric source.
 *
 * Run with `npm run brand`. Deterministic: re-running produces identical bytes.
 *
 * The monogram's letterforms are converted from Inter's glyph outlines into raw SVG
 * <path> data. This matters — the previous mark shipped a live <text> element with
 * font-family="system-ui", which renders as SF Pro on macOS, Segoe UI on Windows and
 * Roboto on Android. A logo has to be identical everywhere, so the glyphs are outlined
 * here and no shipped asset references a font by name.
 *
 * Colours and geometry come from lib/brand.ts (imported directly — Node strips the
 * TypeScript types), so there is exactly one place to change them.
 */

import { Buffer } from "node:buffer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import opentype from "opentype.js";
import sharp from "sharp";
import woff2 from "wawoff2";

import {
  BRAND_INK,
  BRAND_NAME,
  BRAND_SURFACE,
  MARK,
  MASKABLE_SAFE_ZONE,
} from "../lib/brand.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "app");
const PACK_DIR = path.join(ROOT, "public", "brand");
/**
 * TrueType for the OG card, kept beside app/opengraph-image.tsx so it can be resolved
 * with `new URL('./fonts/...', import.meta.url)` and traced into the deployment.
 */
const FONT_DIR = path.join(APP_DIR, "fonts");

/** Rasterise SVGs at high density so curves stay clean when scaled down. */
const RENDER_DENSITY = 600;

/** Decimal places in emitted path data. Three is sub-pixel at any realistic size. */
const PRECISION = 3;

// ---------------------------------------------------------------------------
// Colour
// ---------------------------------------------------------------------------

/**
 * Converts an oklch colour to an sRGB hex string, clamped to gamut.
 *
 * Used to keep lib/brand.ts honest against the oklch tokens in app/globals.css.
 * Implements the oklab -> linear sRGB matrices from the CSS Color 4 spec.
 */
export function oklchToHex(L, C, hueDegrees) {
  const h = (hueDegrees * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);

  const lRoot = L + 0.3963377774 * a + 0.2158037573 * b;
  const mRoot = L - 0.1055613458 * a - 0.0638541728 * b;
  const sRoot = L - 0.0894841775 * a - 1.291485548 * b;

  const l = lRoot ** 3;
  const m = mRoot ** 3;
  const s = sRoot ** 3;

  const linear = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];

  const channel = (value) => {
    const encoded =
      value <= 0.0031308
        ? 12.92 * value
        : 1.055 * Math.pow(Math.max(value, 0), 1 / 2.4) - 0.055;
    return Math.round(Math.min(1, Math.max(0, encoded)) * 255)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${linear.map(channel).join("")}`;
}

/** The oklch tokens in app/globals.css that the brand colours are derived from. */
const TOKEN_SOURCES = [
  { name: "BRAND_INK", token: "--foreground", oklch: [0.15, 0.005, 0], expected: BRAND_INK },
  { name: "BRAND_SURFACE", token: "--background", oklch: [0.98, 0.005, 85], expected: BRAND_SURFACE },
];

/** Fails loudly if lib/brand.ts has drifted from the theme it claims to mirror. */
function assertColoursMatchTheme() {
  for (const { name, token, oklch, expected } of TOKEN_SOURCES) {
    const derived = oklchToHex(...oklch);
    if (derived !== expected) {
      throw new Error(
        `${name} is ${expected} but ${token}: oklch(${oklch.join(" ")}) derives ${derived}. ` +
          `Update lib/brand.ts, or update TOKEN_SOURCES if the theme token changed.`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Type outlining
// ---------------------------------------------------------------------------

/**
 * Loads an Inter weight as an opentype.js font.
 *
 * inter-ui ships woff2 only, which opentype.js cannot parse, so it is decompressed to
 * raw TrueType first. The Latin subset is used throughout — the monogram and the name
 * are plain Latin, and it decompresses to 88KB against 333KB for the full family.
 *
 * With `persist`, the TrueType bytes are also written to assets/fonts/ for
 * app/opengraph-image.tsx to load at runtime. Satori has no system fonts, so the OG
 * card's current fontFamily: "system-ui" silently falls back to Noto Sans.
 */
async function loadInter(weightName, { persist = false } = {}) {
  const source = path.join(
    ROOT,
    "node_modules",
    "inter-ui",
    "web-latin",
    `Inter-${weightName}-subset.woff2`
  );
  const ttf = Buffer.from(await woff2.decompress(await fs.readFile(source)));

  if (persist) {
    await fs.mkdir(FONT_DIR, { recursive: true });
    await fs.writeFile(path.join(FONT_DIR, `Inter-${weightName}.ttf`), ttf);
  }

  return opentype.parse(ttf.buffer.slice(ttf.byteOffset, ttf.byteOffset + ttf.length));
}

/**
 * Builds an outlined path for a string, with the first glyph's origin at
 * (originX, baselineY).
 *
 * Glyphs are looked up one at a time via charToGlyph rather than font.getPath, which
 * routes through opentype.js's shaping layer and throws on Inter's ccmp lookups
 * ("substFormat: 2 is not yet supported"). The monogram and wordmark are plain Latin
 * with no ligatures or contextual forms, so per-glyph positioning is equivalent.
 *
 * Returns the path plus the ink bounding box, so callers can centre on the visible
 * letterforms rather than on advance widths — those include side bearings, and
 * centring on them leaves the monogram visibly off-centre in its field.
 */
function outline(font, text, fontSize, trackingEm = 0, originX = 0, baselineY = 0) {
  const scale = fontSize / font.unitsPerEm;
  const tracking = trackingEm * fontSize;

  const result = new opentype.Path();
  let x = originX;

  for (const character of text) {
    const glyph = font.charToGlyph(character);
    result.extend(glyph.getPath(x, baselineY, fontSize));
    x += glyph.advanceWidth * scale + tracking;
  }

  return { path: result, bbox: result.getBoundingBox() };
}

/**
 * Serialises a path to SVG path data.
 *
 * opentype.js's own Path.toPathData() is not used: its optimiser emits literal "NaN"
 * for these paths. It rounds via the `+(Math.round(n + "e+3") + "e-3")` trick, which
 * yields NaN whenever a value stringifies to exponential notation — which happens for
 * the sub-nanometre float noise thrown off by translating glyph coordinates. Rounding
 * with toFixed first makes that unrepresentable, and keeps output byte-stable.
 */
function toPathData(glyphPath) {
  const n = (value) => String(Number(value.toFixed(PRECISION)));

  return glyphPath.commands
    .map((command) => {
      switch (command.type) {
        case "M":
        case "L":
          return `${command.type}${n(command.x)} ${n(command.y)}`;
        case "Q":
          return `Q${n(command.x1)} ${n(command.y1)} ${n(command.x)} ${n(command.y)}`;
        case "C":
          return `C${n(command.x1)} ${n(command.y1)} ${n(command.x2)} ${n(command.y2)} ${n(command.x)} ${n(command.y)}`;
        case "Z":
          return "Z";
        default:
          throw new Error(`Unhandled path command type: ${command.type}`);
      }
    })
    .join("");
}

/**
 * Outlines a string centred on (cx, cy) by its ink bounding box.
 *
 * Measures at the origin, then re-outlines at the offset position so every coordinate
 * comes straight out of opentype rather than being mutated afterwards.
 */
function centredOutline(font, text, fontSize, trackingEm, cx, cy) {
  const probe = outline(font, text, fontSize, trackingEm);
  const dx = cx - (probe.bbox.x1 + probe.bbox.x2) / 2;
  const dy = cy - (probe.bbox.y1 + probe.bbox.y2) / 2;

  const placed = outline(font, text, fontSize, trackingEm, dx, dy);
  return { data: toPathData(placed.path), bbox: placed.bbox, inkWidth: probe.bbox.x2 - probe.bbox.x1 };
}

// ---------------------------------------------------------------------------
// SVG composition
// ---------------------------------------------------------------------------

const svgDocument = (width, height, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="none">\n${body}\n</svg>\n`;

/**
 * The mark: monogram centred on a field.
 *
 * `radius` of 0 gives the full-bleed variant used for apple-icon (iOS applies its own
 * mask, and a pre-rounded icon double-rounds) and for maskable/avatar output.
 * `inset` shrinks the monogram to sit inside a crop-safe zone.
 */
function renderMark({ font, size, radius, inset = 1, ink, surface }) {
  const { data } = centredOutline(
    font,
    MARK.monogram,
    size * MARK.fontSizeRatio * inset,
    MARK.tracking,
    size / 2,
    size / 2
  );

  const field =
    radius > 0
      ? `  <rect width="${size}" height="${size}" rx="${round(radius)}" fill="${ink}"/>`
      : `  <rect width="${size}" height="${size}" fill="${ink}"/>`;

  return svgDocument(size, size, `${field}\n  <path d="${data}" fill="${surface}"/>`);
}

/**
 * The horizontal lockup: mark plus the name, both outlined.
 *
 * Only for the downloadable pack — recipients will not have Inter installed. In the
 * app itself the nav renders the mark as inline SVG beside live text, because the
 * Inter webfont is already loaded there and live text stays selectable and accessible.
 */
function renderWordmark({ markFont, textFont, ink, surface }) {
  const size = MARK.size;
  const gap = size * 0.375;

  // Inter's cap height is 1490/2048 em. Sizing the type by cap height rather than em
  // box keeps the optical relationship with the mark predictable.
  const fontSize = size * 0.44 / (1490 / 2048);

  // Measure the name first so the lockup's width can be set before placing it.
  const measured = outline(textFont, BRAND_NAME, fontSize);
  const textWidth = measured.bbox.x2 - measured.bbox.x1;
  const width = size + gap + textWidth;

  const mark = centredOutline(markFont, MARK.monogram, size * MARK.fontSizeRatio, MARK.tracking, size / 2, size / 2);
  const name = centredOutline(textFont, BRAND_NAME, fontSize, 0, size + gap + textWidth / 2, size / 2);

  const body = [
    `  <rect width="${size}" height="${size}" rx="${round(size * MARK.radiusRatio)}" fill="${ink}"/>`,
    `  <path d="${mark.data}" fill="${surface}"/>`,
    `  <path d="${name.data}" fill="${ink}"/>`,
  ].join("\n");

  return svgDocument(round(width), size, body);
}

/**
 * Right-aligns a line of outlined type, with its baseline on `baselineY` and its ink
 * ending at `rightX`. Right alignment keeps banner copy clear of the avatar, which
 * LinkedIn overlaps into the lower-left corner of the cover image.
 */
function rightAlignedOutline(font, text, fontSize, rightX, baselineY) {
  const probe = outline(font, text, fontSize);
  const placed = outline(font, text, fontSize, 0, rightX - probe.bbox.x2, baselineY);
  return { data: toPathData(placed.path), width: probe.bbox.x2 - probe.bbox.x1 };
}

/**
 * A cover banner: charcoal ground, copy set right.
 *
 * The mark is deliberately absent — on both LinkedIn surfaces the avatar or company
 * logo already sits on top of the banner, and repeating the monogram beside itself
 * reads as a mistake.
 */
function renderBanner({ width, height, lines, ink, margin }) {
  const rightX = width - margin;
  const totalHeight = lines.reduce((sum, line) => sum + line.leading, 0) - lines[0].leading;
  let baseline = (height - totalHeight) / 2 + lines[0].size * 0.36;

  const body = lines
    .map((line, index) => {
      if (index > 0) baseline += line.leading;
      const { data } = rightAlignedOutline(line.font, line.text, line.size, rightX, baseline);
      return `  <path d="${data}" fill="${line.fill}"/>`;
    })
    .join("\n");

  return svgDocument(width, height, `  <rect width="${width}" height="${height}" fill="${ink}"/>\n${body}`);
}

const round = (value) => Number(value.toFixed(PRECISION));

/**
 * Guards the two ways a generated SVG can be silently wrong.
 *
 * A stray "NaN" renders as an invisible or mangled glyph, and any font reference means
 * the asset renders differently per platform — the exact defect this pipeline exists
 * to remove. Both have happened here, so they fail the build rather than ship.
 */
function assertShippableSvg(file, svg) {
  if (!file.endsWith(".svg")) return;

  if (svg.includes("NaN")) {
    throw new Error(`${path.basename(file)} contains NaN coordinates.`);
  }
  if (/<text|font-family/.test(svg)) {
    throw new Error(
      `${path.basename(file)} references a font. Letterforms must be outlined as paths.`
    );
  }
}

// ---------------------------------------------------------------------------
// Rasterisation
// ---------------------------------------------------------------------------

const rasterise = (svg, size) =>
  sharp(Buffer.from(svg), { density: RENDER_DENSITY })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

/** Opaque variant — apple-touch-icon must not be transparent or iOS composites it on black. */
const rasteriseOpaque = (svg, size) =>
  sharp(Buffer.from(svg), { density: RENDER_DENSITY })
    .resize(size, size)
    .flatten({ background: BRAND_INK })
    .png({ compressionLevel: 9 })
    .toBuffer();

/**
 * Packs PNGs into a multi-resolution .ico.
 *
 * sharp cannot write ICO, but the container is trivial: a 6-byte header, one 16-byte
 * directory entry per image, then the PNG payloads. PNG-compressed ICO entries are
 * understood by every browser and by Windows Vista onwards.
 */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const directorySize = 16 * images.length;
  let offset = header.length + directorySize;

  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 0 means 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map((image) => image.data)]);
}

// ---------------------------------------------------------------------------
// Output manifest
// ---------------------------------------------------------------------------

/** Favicon and general-purpose sizes, rounded field with transparent corners. */
const ICON_SIZES = [16, 32, 48, 64, 128, 180, 192, 256, 512, 1024];

/** Square profile images for LinkedIn, X and GitHub, which crop to a circle. */
const AVATAR_SIZES = [400, 800, 1024];

/** Sizes packed into favicon.ico. */
const ICO_SIZES = [16, 32, 48];

/**
 * Cover banners. LinkedIn uses different dimensions for the two surfaces, and crops
 * both on mobile, so copy is kept well inside the margins.
 */
const BANNERS = [
  { name: "banner-linkedin-profile", width: 1584, height: 396, margin: 120, scale: 1 },
  { name: "banner-linkedin-company", width: 1128, height: 191, margin: 64, scale: 0.52 },
];

/** Crème is too bright for supporting copy on charcoal; this sits between the two. */
const BANNER_MUTED = oklchToHex(0.68, 0.005, 85);

async function main() {
  assertColoursMatchTheme();

  // Medium and Light are persisted as TTF for the OG card to load at runtime.
  const semiBold = await loadInter("SemiBold");
  const medium = await loadInter("Medium", { persist: true });
  const light = await loadInter("Light", { persist: true });

  await fs.mkdir(PACK_DIR, { recursive: true });

  const written = [];
  const write = async (file, data) => {
    if (typeof data === "string") assertShippableSvg(file, data);
    await fs.writeFile(file, data);
    written.push(`${path.relative(ROOT, file)} (${data.length.toLocaleString()} bytes)`);
  };

  // --- Vector -------------------------------------------------------------
  const markSvg = renderMark({
    font: semiBold,
    size: MARK.size,
    radius: MARK.size * MARK.radiusRatio,
    ink: BRAND_INK,
    surface: BRAND_SURFACE,
  });

  // Full bleed, monogram pulled into the crop-safe zone.
  const maskableSvg = renderMark({
    font: semiBold,
    size: MARK.size,
    radius: 0,
    inset: MASKABLE_SAFE_ZONE,
    ink: BRAND_INK,
    surface: BRAND_SURFACE,
  });

  await write(path.join(APP_DIR, "icon.svg"), markSvg);
  await write(path.join(PACK_DIR, "mark.svg"), markSvg);

  // The nav renders the mark as inline SVG so it can use currentColor and dodge the
  // global `img { filter: grayscale(100%) }` rule. Emitting the path data keeps that
  // component in step with the generated assets instead of holding a hand-copied copy.
  const monogram = centredOutline(
    semiBold,
    MARK.monogram,
    MARK.size * MARK.fontSizeRatio,
    MARK.tracking,
    MARK.size / 2,
    MARK.size / 2
  );
  await write(
    path.join(ROOT, "lib", "brand-mark.generated.ts"),
    `// Generated by scripts/generate-brand-assets.mjs — do not edit. Run \`npm run brand\`.\n` +
      `export const MARK_PATH =\n  "${monogram.data}";\n`
  );
  await write(
    path.join(PACK_DIR, "wordmark.svg"),
    renderWordmark({ markFont: semiBold, textFont: medium, ink: BRAND_INK, surface: BRAND_SURFACE })
  );
  await write(
    path.join(PACK_DIR, "wordmark-reverse.svg"),
    renderWordmark({ markFont: semiBold, textFont: medium, ink: BRAND_SURFACE, surface: BRAND_INK })
  );

  // --- Raster icons -------------------------------------------------------
  for (const size of ICON_SIZES) {
    await write(path.join(PACK_DIR, `icon-${size}.png`), await rasterise(markSvg, size));
  }

  await write(path.join(PACK_DIR, "icon-maskable-512.png"), await rasterise(maskableSvg, 512));
  await write(path.join(APP_DIR, "icon.png"), await rasterise(markSvg, 32));
  await write(path.join(APP_DIR, "apple-icon.png"), await rasteriseOpaque(maskableSvg, 180));

  // --- Favicon ------------------------------------------------------------
  const icoImages = await Promise.all(
    ICO_SIZES.map(async (size) => ({ size, data: await rasterise(markSvg, size) }))
  );
  await write(path.join(APP_DIR, "favicon.ico"), buildIco(icoImages));

  // --- Social avatars -----------------------------------------------------
  for (const size of AVATAR_SIZES) {
    await write(path.join(PACK_DIR, `avatar-${size}.png`), await rasteriseOpaque(maskableSvg, size));
  }

  // --- Cover banners ------------------------------------------------------
  for (const { name, width, height, margin, scale } of BANNERS) {
    const svg = renderBanner({
      width,
      height,
      margin,
      ink: BRAND_INK,
      lines: [
        {
          text: "Technical expertise for investment firms",
          font: light,
          size: 54 * scale,
          leading: 0,
          fill: BRAND_SURFACE,
        },
        {
          text: "Due diligence · Embedded leadership · Portfolio support",
          font: medium,
          size: 24 * scale,
          leading: 52 * scale,
          fill: BANNER_MUTED,
        },
      ],
    });

    await write(path.join(PACK_DIR, `${name}.svg`), svg);
    await write(
      path.join(PACK_DIR, `${name}.png`),
      await sharp(Buffer.from(svg), { density: RENDER_DENSITY })
        .resize(width, height)
        .flatten({ background: BRAND_INK })
        .png({ compressionLevel: 9 })
        .toBuffer()
    );
  }

  console.log(`Generated ${written.length} brand assets:`);
  for (const line of written) console.log(`  ${line}`);
}

await main();
