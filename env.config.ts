import { defineEnv } from "envin";
import * as z from "zod";

const optionalUrl = z.preprocess(
  (value) =>
    typeof value === "string" && value.trim() === "" ? undefined : value,
  z.url().optional(),
);

const optionalString = z.preprocess(
  (value) =>
    typeof value === "string" && value.trim() === "" ? undefined : value,
  z.string().optional(),
);

export default defineEnv({
  shared: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    SITE_URL: optionalUrl,
  },
  server: {
    GITHUB_TOKEN: optionalString,
  },
});
