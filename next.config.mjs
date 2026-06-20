import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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
