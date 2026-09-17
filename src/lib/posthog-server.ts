import { PostHog } from "posthog-node";

import { POSTHOG_API_HOST, POSTHOG_PROJECT_TOKEN } from "@/lib/posthog";

let posthogClient: PostHog | null = null;

function getPostHogToken() {
  return (
    process.env.POSTHOG_PROJECT_TOKEN ||
    process.env.VITE_POSTHOG_PROJECT_TOKEN ||
    POSTHOG_PROJECT_TOKEN
  );
}

function getPostHogHost() {
  return process.env.POSTHOG_HOST || POSTHOG_API_HOST;
}

export function getPostHogClient() {
  const token = getPostHogToken();
  if (!token) {
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(token, {
      host: getPostHogHost(),
      flushAt: 1,
      flushInterval: 0,
    });
  }

  return posthogClient;
}
