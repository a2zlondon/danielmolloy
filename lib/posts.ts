// Local markdown content layer.
//
// Replaces the old WordPress.com REST client (lib/wp.ts). Posts are plain
// markdown files in content/posts/, read at build time, so the site has no
// runtime dependency on any external CMS.
//
// See .claude/skills/write-article/SKILL.md for the authoring contract.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface Post {
  slug: string;
  title: string;
  /**
   * Naive local datetime exactly as WordPress recorded it, e.g.
   * "2026-07-03T08:57:52". Deliberately a string, never a Date: the permalink
   * is sliced straight out of it, so re-parsing it into some other timezone
   * could shift a published URL by a day and lose its ranking.
   */
  date: string;
  modified: string;
  excerpt: string;
  image: string | null;
  /** Rendered HTML body. */
  html: string;
  /** Canonical path, e.g. "/2026/07/03/my-post". */
  url: string;
}

/**
 * Split a post date into URL components by string slicing rather than Date
 * parsing, so the result cannot drift with the server's timezone.
 */
export function extractDateParts(date: string): {
  year: string;
  month: string;
  day: string;
} {
  return { year: date.slice(0, 4), month: date.slice(5, 7), day: date.slice(8, 10) };
}

export function postUrl(post: Pick<Post, "date" | "slug">): string {
  const { year, month, day } = extractDateParts(post.date);
  return `/${year}/${month}/${day}/${post.slug}`;
}

/**
 * Trim to a meta-description length on a word boundary. The old WordPress
 * pipeline cut at exactly 160 characters, which routinely sliced a word in
 * half ("…agreed with you").
 */
export function metaDescription(text: string, maxLength = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const cut = clean.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, "")}…`;
}

function readPost(filename: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  const slug = String(data.slug || filename.replace(/\.md$/, ""));
  const date = String(data.date || "");
  if (!/^\d{4}-\d{2}-\d{2}T/.test(date)) {
    throw new Error(
      `content/posts/${filename}: "date" must be a quoted string like "2026-07-03T08:57:52" (got ${JSON.stringify(data.date)})`
    );
  }

  return {
    slug,
    title: String(data.title || ""),
    date,
    modified: String(data.modified || date),
    excerpt: String(data.excerpt || ""),
    image: data.image ? String(data.image) : null,
    html: marked.parse(content, { async: false }) as string,
    url: postUrl({ date, slug }),
  };
}

let cache: Post[] | null = null;

/** All published posts, newest first. */
export function getPosts(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(POSTS_DIR)) return [];
  cache = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
  return cache;
}

export function getPostBySlug(slug: string): Post | null {
  return getPosts().find((p) => p.slug === slug) ?? null;
}

/**
 * Resolve a dated permalink. Unlike the old WordPress version, the date must
 * match the post's own date: previously any date prefix resolved any post, so
 * every article was reachable at unlimited URLs — a duplicate-content hole.
 */
export function getPostByDateAndSlug(
  year: string,
  month: string,
  day: string,
  slug: string
): Post | null {
  const post = getPostBySlug(slug);
  if (!post) return null;
  const parts = extractDateParts(post.date);
  if (parts.year !== year || parts.month !== month || parts.day !== day) return null;
  return post;
}
