import { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/constants";

// Static pages carry no `lastModified`. They previously reported the build
// timestamp, which told Google every page changed on every deploy — an
// inaccurate lastmod gets the signal ignored site-wide, so no value is better
// than a false one. Posts below do carry a real date from their frontmatter.

const staticPaths: Array<{ path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/technical-due-diligence", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/technology-advisory", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/fractional-cto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ai-governance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/cloud-software-delivery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/who-we-are", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

const insightSlugs = [
  "how-to-evaluate-ai-startup-before-investing",
  "legal-due-diligence-vs-technical-due-diligence",
  "red-flags-saas-acquisitions",
  "technical-due-diligence-checklist-saas-acquisitions",
  "what-happens-during-technical-due-diligence",
  "why-telemetry-matters-more-than-features",
  "verify-ai-claims-software-ma",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...insightSlugs.map((slug) => ({
      url: `${SITE_URL}/insights/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getPosts().map((post) => ({
      url: `${SITE_URL}${post.url}`,
      lastModified: new Date(`${post.modified}Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
