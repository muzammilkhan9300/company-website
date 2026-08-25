import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Restore scroll position on browser back/forward navigation
  experimental: {
    scrollRestoration: true,
  },

  images: {
    // Serve next-gen formats: AVIF (smallest) → WebP → original
    formats: ["image/avif", "image/webp"],

    // Aggressive browser cache for optimized images (30 days)
    minimumCacheTTL: 2592000,

    // Breakpoints aligned to our layout (mobile → tablet → desktop → wide)
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256, 384],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
