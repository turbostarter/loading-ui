export const POSTHOG_PROXY_PATH = "/ingest";
export const POSTHOG_API_HOST = "https://eu.i.posthog.com";
export const POSTHOG_ASSET_HOST = "https://eu-assets.i.posthog.com";
export const POSTHOG_UI_HOST = "https://eu.posthog.com";
export const POSTHOG_DEFAULTS = "2026-05-30";

export const POSTHOG_PROJECT_TOKEN = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;

export const POSTHOG_CLIENT_HOST =
  import.meta.env.VITE_POSTHOG_HOST || POSTHOG_PROXY_PATH;
