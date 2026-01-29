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
    ];
  },
};

export default nextConfig;
