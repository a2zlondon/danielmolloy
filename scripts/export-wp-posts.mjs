// One-time migration: WordPress.com -> local markdown in content/posts/
//
// Pulls the 16 published posts from the same public API endpoint the site used
// to call at request time, converts the HTML bodies to markdown, downloads the
// featured images, and writes one .md file per post.
//
// Run once:  node scripts/export-wp-posts.mjs
//
// The `date` frontmatter field is load-bearing: the permalink /YYYY/MM/DD/slug
// is derived from it by string slicing, so it is written back verbatim as the
// naive string WordPress returns, and always quoted so YAML keeps it a string
// rather than reviving it as a Date in some other timezone.

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import TurndownService from "turndown";
import sharp from "sharp";

const WP_SITE = "danielmolloycom.wordpress.com";
const API = `https://public-api.wordpress.com/wp/v2/sites/${WP_SITE}/posts`;
const POSTS_DIR = "content/posts";
const IMAGES_DIR = "public/images/posts";

// Mirrors decodeHtmlEntities() in lib/content-utils.ts. Duplicated here so this
// throwaway script has no dependency on the app's TypeScript build.
function decodeHtmlEntities(input) {
  if (!input) return input;
  return input
    .replace(/&#(\d+);/g, (m, n) => {
      const code = Number(n);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (m, h) => {
      const code = Number.parseInt(h, 16);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    })
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "\u2026")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(input) {
  if (!input) return input;
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "_",
  strongDelimiter: "**",
  hr: "---",
});

async function main() {
  await mkdir(POSTS_DIR, { recursive: true });
  await mkdir(IMAGES_DIR, { recursive: true });

  const res = await fetch(`${API}?per_page=100&status=publish&_embed=1`);
  if (!res.ok) throw new Error(`WordPress API returned ${res.status}`);
  const posts = await res.json();
  console.log(`Fetched ${posts.length} published posts\n`);
  let savedBytes = 0;

  for (const post of posts) {
    const slug = post.slug;
    const title = decodeHtmlEntities(post.title.rendered);
    // WordPress auto-excerpts end in a "[…]" truncation marker; strip it so it
    // never leaks into a meta description.
    const excerpt = decodeHtmlEntities(stripHtml(post.excerpt.rendered))
      .replace(/\s*\[\s*\u2026\s*\]\s*$/, "")
      .trim();

    // Download the featured image alongside the post.
    let imagePath = "";
    const remote = post.jetpack_featured_media_url;
    if (remote) {
      const filename = `${slug}.jpg`;
      const imgRes = await fetch(remote);
      if (imgRes.ok) {
        const original = Buffer.from(await imgRes.arrayBuffer());
        // 1600px wide covers the largest render plus retina; q82 is visually
        // lossless for photos. Takes the set from ~24MB to well under 2MB.
        const optimised = await sharp(original)
          .resize({ width: 1600, withoutEnlargement: true })
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer();
        await writeFile(join(IMAGES_DIR, filename), optimised);
        imagePath = `/images/posts/${filename}`;
        savedBytes += original.length - optimised.length;
      } else {
        console.warn(`  ! image ${imgRes.status} for ${slug}`);
      }
    }

    const body = turndown.turndown(post.content.rendered).trim();

    // Hand-built YAML: every scalar double-quoted via JSON.stringify so dates
    // stay strings and apostrophes/colons in titles cannot break the parse.
    const frontmatter = [
      "---",
      `title: ${JSON.stringify(title)}`,
      `slug: ${JSON.stringify(slug)}`,
      `date: ${JSON.stringify(post.date)}`,
      `modified: ${JSON.stringify(post.modified)}`,
      `excerpt: ${JSON.stringify(excerpt)}`,
      `image: ${JSON.stringify(imagePath)}`,
      `wordpressId: ${post.id}`,
      "---",
      "",
    ].join("\n");

    await writeFile(join(POSTS_DIR, `${slug}.md`), `${frontmatter}${body}\n`, "utf8");
    const [y, m, d] = [post.date.slice(0, 4), post.date.slice(5, 7), post.date.slice(8, 10)];
    console.log(`  /${y}/${m}/${d}/${slug}`);
  }

  console.log(`\nWrote ${posts.length} posts to ${POSTS_DIR}/`);
  console.log(`Image optimisation saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
