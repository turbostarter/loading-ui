import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

function nodeFilenamePolyfill(): Plugin {
  return {
    name: "node-filename-polyfill",
    apply: "build",
    renderChunk(code) {
      return {
        code: `if (typeof globalThis.__filename === "undefined") { globalThis.__filename = "/index.js"; globalThis.__dirname = "/"; }\n${code}`,
        map: null,
      };
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    fumadocsMdx(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        concurrency: 8,
      },
    }),
    react(),
    nodeFilenamePolyfill(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  environments: {
    ssr: {
      optimizeDeps: {
        include: [
          "react",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
          "react-dom",
          "react-dom/server",
        ],
      },
    },
  },
});
