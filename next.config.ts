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
        destination: "/for-investors",
        permanent: true,
      },
      {
        source: "/for-partners",
        destination: "/for-corporate-finance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
