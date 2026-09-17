import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  ssr: {
    external: ["ts-morph", "@ts-morph/common", "shadcn"],
  },
  plugins: [
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
    nitro({
      rollupConfig: {
        output: {
          banner:
            "if (typeof globalThis.__filename === 'undefined') { globalThis.__filename = '/index.js'; globalThis.__dirname = '/'; }",
        },
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
