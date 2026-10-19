import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Behance project covers and module images are served from these CDNs.
    remotePatterns: [
      { protocol: "https", hostname: "mir-s3-cdn-cf.behance.net" },
      { protocol: "https", hostname: "mir-cdn.behance.net" },
    ],
  },
};

export default nextConfig;
