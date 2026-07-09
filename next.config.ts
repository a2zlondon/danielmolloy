import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "danielmolloy.com",
      },
      {
        protocol: "https",
        hostname: "**.wordpress.com",
      },
    ],
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
