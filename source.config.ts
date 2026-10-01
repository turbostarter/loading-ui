import { defineConfig } from "fumadocs-mdx/config";
import { rehypePrettyCode } from "rehype-pretty-code";

import { transformers } from "./src/lib/highlight-code";
import { rehypeComponentSource } from "./src/lib/rehype-component-source";

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push(rehypeComponentSource);
      plugins.push([
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ]);

      return plugins;
    },
  },
});
