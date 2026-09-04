import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/constants";

// WordPress served an RSS feed at /feed. The Next.js site served nothing there,
// silently breaking every existing subscriber, so the feed is restored here.
// next.config.ts redirects /feed to this route.

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getPosts();
  const updated = posts[0] ? new Date(`${posts[0].modified}Z`) : new Date();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}${post.url}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(`${post.date}Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Daniel Molloy — Writing</title>
    <link>${SITE_URL}/blog</link>
    <description>Articles on technology due diligence, technical strategy and engineering leadership.</description>
    <language>en-GB</language>
    <lastBuildDate>${updated.toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
