import { defineEnv } from "envin";
import * as z from "zod";

export default defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("production"),
    NEXT_PUBLIC_SITE_URL: z.url().optional(),
  },
  server: {
    GITHUB_TOKEN: z.string().optional(),
  },
});
