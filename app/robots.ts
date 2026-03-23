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
        // Keep search inclusion while opting out of model training crawl.
        userAgent: "GPTBot",
        disallow: "/",
      },
    ],
    sitemap: "https://danielmolloy.com/sitemap.xml",
  };
}
