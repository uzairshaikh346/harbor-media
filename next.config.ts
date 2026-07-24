import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder image host. Swap these out for your own /public images
    // (see lib/data.ts) and you can remove this remotePatterns block.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
