import { registrySchema } from "shadcn/schema";

import { ui } from "./ui/_registry";
import { lib } from "./lib/_registry";
import { z } from "zod";
import { registryItemSchema } from "./schema";

const BASE_STYLE = {
  type: "registry:style",
  dependencies: [],
  devDependencies: [],
  registryDependencies: ["utils"],
  css: {},
  cssVars: {},
  files: [],
};

export const registry = registrySchema.parse({
  name: "@loading-ui",
  homepage: "https://loading-ui.com",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      ...BASE_STYLE,
    },
    {
      name: "style",
      ...BASE_STYLE,
    },
    ...ui,
    ...lib,
  ]),
});
