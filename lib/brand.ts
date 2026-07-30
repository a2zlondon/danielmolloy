/**
 * Single source of truth for the Daniel Molloy brand mark.
 *
 * Consumed by both the Next app (app/opengraph-image.tsx, components/brand/logo.tsx)
 * and the asset generator (scripts/generate-brand-assets.mjs, which imports this file
 * directly via Node's TypeScript type stripping).
 *
 * The colours are the exact sRGB equivalents of the oklch tokens in app/globals.css,
 * so brand assets and the rendered site are the same colour. Do not hand-edit the
 * hex values — change the oklch tokens in globals.css and re-derive with oklchToHex()
 * in the generator script.
 */

/** `--foreground: oklch(0.15 0.005 0)` — near-black warm charcoal. The mark's field. */
export const BRAND_INK = "#0d0a0b";

/** `--background: oklch(0.98 0.005 85)` — warm crème. The mark's letterforms. */
export const BRAND_SURFACE = "#faf8f5";

/** `--muted-foreground: oklch(0.45 0.005 0)` — supporting copy on the OG card. */
export const BRAND_MUTED = "#585455";

/** Geometry of the mark, expressed against a 32-unit square (the original viewBox). */
export const MARK = {
  /** Coordinate system the mark is authored in. */
  size: 32,
  /** Corner radius as a fraction of the square. 7/32 — matches the original rx="7". */
  radiusRatio: 7 / 32,
  /** The monogram itself. */
  monogram: "DM",
  /** Type size as a fraction of the square. 13/32 — matches the original font-size="13". */
  fontSizeRatio: 13 / 32,
  /** Tracking in em, carried over from the original letter-spacing="-0.02em". */
  tracking: -0.02,
} as const;

/**
 * Android maskable icons are cropped to an arbitrary shape (circle, squircle, teardrop).
 * Only the centre 80% is guaranteed visible, so the mark is scaled into that safe zone
 * on a full-bleed field. See https://w3c.github.io/manifest/#icon-masks
 */
export const MASKABLE_SAFE_ZONE = 0.8;

/** Wordmark used in the nav, footer and brand pack. */
export const BRAND_NAME = "Daniel Molloy";
