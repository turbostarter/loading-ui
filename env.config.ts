import { defineEnv } from "envin";
import * as z from "zod";

export default defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    SITE_URL: z.url().optional(),
  },
});
