import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Explicit allow for ChatGPT search indexing.
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Optional: allow user-initiated fetches from ChatGPT.
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Allow GPTBot to crawl public content while keeping administrative paths out.
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Anthropic's crawler, for Claude's search and citations.
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Bing powers Copilot's answers as well as its own index.
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://danielmolloy.com/sitemap.xml",
  };
}
