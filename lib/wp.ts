// WordPress REST API client
//
// Your current WordPress.com Simple site does NOT expose `/wp-json/wp/v2`.
// For WP.com sites the correct REST base is:
//   https://public-api.wordpress.com/wp/v2/sites/<site-domain>
//
// When you later move to self-hosted/Atomic at `cms.danielmolloy.com`,
// set `NEXT_PUBLIC_WP_API_URL` to:
//   https://cms.danielmolloy.com/wp-json/wp/v2

import { SITE_URL } from "@/lib/constants";

// WordPress.com site domain (e.g. yoursite.wordpress.com), required for public-api.wordpress.com
const DEFAULT_WPCOM_SITE = process.env.NEXT_PUBLIC_WPCOM_SITE || "danielmolloycom.wordpress.com";

function normalizeBase(url: string) {
  return url.replace(/\/+$/, "");
}

function getWpBase(): string {
  const env = process.env.NEXT_PUBLIC_WP_API_URL;
  if (env && env.trim().length > 0) {
    return normalizeBase(env.trim());
  }
  return `https://public-api.wordpress.com/wp/v2/sites/${DEFAULT_WPCOM_SITE}`;
}

function isWpJsonBase(base: string) {
  return base.includes("/wp-json/wp/v2");
}

function endpoint(path: string) {
  const base = getWpBase();
  // Both WP.com site base and wp-json base accept `/posts`, `/pages`, etc.
  // This helper just ensures slashes are correct.
  if (isWpJsonBase(base)) return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  featured_media?: number;
  jetpack_featured_media_url?: string;
  _embedded?: Record<string, unknown>;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  categories: number[];
  tags: number[];
  link: string;
}

export interface WPPage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  featured_media?: number;
  jetpack_featured_media_url?: string;
  _embedded?: Record<string, unknown>;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  link: string;
}

interface WPMediaItem {
  id: number;
  source_url?: string;
  media_details?: {
    sizes?: Record<
      string,
      {
        source_url?: string;
      }
    >;
  };
}

// Fetch all posts
export async function getPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${endpoint("/posts")}?per_page=100&status=publish&_embed=1`,
      { next: { revalidate: 300 } } // Revalidate every 5 min so new posts appear sooner
    );
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${endpoint("/posts")}?slug=${encodeURIComponent(slug)}&status=publish&_embed=1`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error('Failed to fetch post');
    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Fetch post by date and slug (for permalink matching)
export async function getPostByDateAndSlug(
  year: string,
  month: string,
  day: string,
  slug: string
): Promise<WPPost | null> {
  try {
    const post = await getPostBySlug(slug);
    if (!post) return null;

    // Return post by slug; date in URL is for permalink only (lenient so timezone differences don't 404)
    return post;
  } catch (error) {
    console.error('Error fetching post by date:', error);
    return null;
  }
}

// Fetch a page by slug
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const res = await fetch(`${endpoint("/pages")}?slug=${encodeURIComponent(slug)}&_embed=1`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch page');
    const pages = await res.json();
    return pages[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getMediaBySearch(search: string): Promise<string | null> {
  if (!search || !search.trim()) return null;

  try {
    const res = await fetch(
      `${endpoint("/media")}?search=${encodeURIComponent(search.trim())}&per_page=5`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const items = (await res.json()) as WPMediaItem[];
    const first = items?.[0];
    const url =
      first?.media_details?.sizes?.thumbnail?.source_url ||
      first?.media_details?.sizes?.medium?.source_url ||
      first?.media_details?.sizes?.large?.source_url ||
      first?.source_url;
    return typeof url === "string" ? url : null;
  } catch {
    return null;
  }
}

// Extract date components from WordPress date string
export function extractDateParts(dateString: string): {
  year: string;
  month: string;
  day: string;
} {
  const date = new Date(dateString);
  return {
    year: date.getFullYear().toString(),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    day: String(date.getDate()).padStart(2, '0'),
  };
}

// Decode common WordPress HTML entities for plain-text contexts (e.g., <title>, cards).
export function decodeHtmlEntities(input: string): string {
  if (!input) return input;

  // Numeric entities: &#123; and &#x1F4A9;
  const numericDecoded = input
    .replace(/&#(\d+);/g, (_, num) => {
      const code = Number(num);
      return Number.isFinite(code) ? String.fromCodePoint(code) : _;
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
      const code = Number.parseInt(hex, 16);
      return Number.isFinite(code) ? String.fromCodePoint(code) : _;
    });

  // Named entities we actually see in WP titles/content.
  return numericDecoded
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripHtml(input: string): string {
  if (!input) return input;
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * Rewrite blog links in post HTML so they point to this site's URLs.
 * - WordPress.com and same-site absolute URLs for blog posts -> relative /year/month/day/slug
 * - /blog-posts -> /blog
 * Preserves external links and non-blog same-site links.
 */
export function rewriteContentLinks(html: string): string {
  if (!html || typeof html !== "string") return html;

  const siteHosts = [
    "danielmolloy.com",
    "www.danielmolloy.com",
    "danielmolloy.wordpress.com",
  ];

  return html.replace(
    /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*)>/gi,
    (match, before, href, after) => {
      const trimmed = href.trim();
      if (!trimmed) return match;

      try {
        // Relative path starting with / (e.g. /2024/01/15/my-post or /blog)
        if (trimmed.startsWith("/")) {
          const normalized = trimmed.replace(/\/+$/, ""); // strip trailing slash
          const toBlog = normalized === "/blog-posts" ? "/blog" : normalized;
          return `<a ${before}href="${toBlog}"${after}>`;
        }

        const url = new URL(trimmed, SITE_URL);
        const host = url.hostname.toLowerCase();
        const pathname = url.pathname.replace(/\/+$/, "") || "/";

        if (!siteHosts.some((h) => host === h)) return match;

        // Same-site or WP.com: rewrite blog post URLs to relative
        const postMatch = pathname.match(/^(\/\d{4}\/\d{2}\/\d{2}\/[^/]+)/);
        if (postMatch) {
          const relative = postMatch[1];
          const search = url.search;
          const hash = url.hash;
          return `<a ${before}href="${relative}${search}${hash}"${after}>`;
        }
        if (pathname === "/blog-posts" || pathname === "/blog-posts/") {
          return `<a ${before}href="/blog"${after}>`;
        }
        // Other same-site links: make relative
        return `<a ${before}href="${pathname}${url.search}${url.hash}"${after}>`;
      } catch {
        return match;
      }
    }
  );
}

// WP.com provides `jetpack_featured_media_url` which is the easiest reliable image URL.
// Self-hosted/wp-json typically has `_embedded['wp:featuredmedia'][0].source_url`.
export function getFeaturedImageUrl(
  post: Pick<WPPost, "jetpack_featured_media_url" | "_embedded">
): string | null {
  if (post.jetpack_featured_media_url) return post.jetpack_featured_media_url;

  const embedded = post._embedded as any;
  const fm = embedded?.["wp:featuredmedia"]?.[0];
  const url = fm?.source_url || fm?.media_details?.sizes?.large?.source_url;
  return typeof url === "string" ? url : null;
}
