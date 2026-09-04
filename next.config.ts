import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "danielmolloy.com",
      },
    ],
  },
  async redirects() {
    return [
      // Pages retired in the 2026 advisory repositioning.
      {
        source: "/work-with-me",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/fix-your-tech-fast",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog-posts",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/for-enterprises",
        destination: "/#who-we-work-with",
        permanent: true,
      },
      {
        source: "/for-partners",
        destination: "/#who-we-work-with",
        permanent: true,
      },
      {
        source: "/for-investors",
        destination: "/#who-we-work-with",
        permanent: true,
      },
      {
        source: "/for-corporate-finance",
        destination: "/#who-we-work-with",
        permanent: true,
      },
      {
        source: "/for-law-firms",
        destination: "/#who-we-work-with",
        permanent: true,
      },
      {
        source: "/for-founders",
        destination: "/#who-we-work-with",
        permanent: true,
      },
      // Pages that existed on the old WordPress site and 404'd after the move.
      {
        source: "/about-me",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/design",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/misura-ai",
        destination: "/who-we-are",
        permanent: true,
      },
      // WordPress served an RSS feed at /feed; keep that address working.
      {
        source: "/feed",
        destination: "/feed.xml",
        permanent: true,
      },
      // WordPress archive, category and author pages. These never existed on
      // the Next.js site. The patterns are all shorter than the four segments
      // a post permalink needs, so they cannot shadow /YYYY/MM/DD/slug.
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
