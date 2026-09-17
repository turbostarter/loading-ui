import { PostHog } from "posthog-node";
import envConfig from "../../../env.config";

let posthogClient: PostHog | null = null;

export function getPostHogClient() {
  const apiKey = envConfig.VITE_POSTHOG_PROJECT_TOKEN;

  if (!apiKey) {
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(apiKey, {
      host: envConfig.VITE_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    });
  }

  return posthogClient;
}
