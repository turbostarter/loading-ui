export const POSTHOG_PROXY_PATH = "/ingest";
export const POSTHOG_API_HOST = "https://us.i.posthog.com";
export const POSTHOG_ASSET_HOST = "https://us-assets.i.posthog.com";
export const POSTHOG_UI_HOST = "https://us.posthog.com";
export const POSTHOG_DEFAULTS = "2026-05-30";

export const POSTHOG_PROJECT_TOKEN = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;

export const POSTHOG_CLIENT_HOST =
  import.meta.env.VITE_POSTHOG_HOST || POSTHOG_PROXY_PATH;
