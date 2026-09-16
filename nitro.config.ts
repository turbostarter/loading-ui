import { defineConfig } from "nitro";

export default defineConfig({
  rollupConfig: {
    output: {
      banner:
        "if (typeof globalThis.__filename === 'undefined') { globalThis.__filename = '/index.js'; globalThis.__dirname = '/'; }",
    },
  },
});
