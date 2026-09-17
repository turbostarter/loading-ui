import { createFileRoute } from "@tanstack/react-router";

import { proxyPostHogRequest } from "@/lib/posthog-proxy";

export const Route = createFileRoute("/ingest/$")({
  server: {
    handlers: {
      GET: async ({ request }) => proxyPostHogRequest(request),
      POST: async ({ request }) => proxyPostHogRequest(request),
      OPTIONS: async ({ request }) => proxyPostHogRequest(request),
    },
  },
});
