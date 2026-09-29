import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true, // match legacy WordPress URLs (/slug/) for SEO
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
