import { createMDX } from "fumadocs-mdx/next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    // Skip `/_next/image` so the Worker can run without a Cloudflare Images binding.
    unoptimized: true,
  },
  // Keep MDX sources, registry files, and OG fonts in the Worker bundle for
  // cache misses. Workers only expose a virtual FS of bundled files.
  outputFileTracingIncludes: {
    "/*": [
      "./content/docs/**/*",
      "./registry/**/*",
      "./app/api/og/[...slug]/*.ttf",
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "fumadocs-ui",
      "fumadocs-core",
      "@tanstack/react-query",
      "motion",
    ],
  },
};

export default withMDX(config);

void initOpenNextCloudflareForDev();
