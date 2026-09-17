import { defineEnv } from "envin";
import * as z from "zod";

export default defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    SITE_URL: z.url().optional(),
    VITE_POSTHOG_PROJECT_TOKEN: z.string().optional(),
    VITE_POSTHOG_HOST: z.string().default("/ingest"),
    POSTHOG_HOST: z.url().default("https://eu.i.posthog.com"),
  },
});
