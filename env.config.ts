import { defineEnv } from "envin";
import * as z from "zod";

export default defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  },
  server: {
    SITE_URL: z.url().optional(),
  },
  clientPrefix: "VITE_",
  client: {
    VITE_POSTHOG_PROJECT_TOKEN: z.string().optional(),
    VITE_POSTHOG_HOST: z.url().default("https://eu.i.posthog.com"),
  },
  env: {
    VITE_POSTHOG_PROJECT_TOKEN: import.meta.env.VITE_POSTHOG_PROJECT_TOKEN,
    VITE_POSTHOG_HOST: import.meta.env.VITE_POSTHOG_HOST,
  },
});
