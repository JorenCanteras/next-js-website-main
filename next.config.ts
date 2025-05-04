import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['mailsentry.io'], // ✅ allow remote image from mailsentry.io
  },
};

export default nextConfig;
