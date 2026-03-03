import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Crucial for GitHub Pages
  images: {
    unoptimized: true, // Required when using 'output: export'
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;