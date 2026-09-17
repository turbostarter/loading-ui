"use client";

import { PostHogProvider } from "@posthog/react";
import type { ReactNode } from "react";
import envConfig from "../../../env.config";

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider
      apiKey={envConfig.VITE_POSTHOG_PROJECT_TOKEN ?? ""}
      options={{
        api_host: envConfig.VITE_POSTHOG_HOST,
        defaults: "2026-05-30",
        capture_exceptions: true,
      }}
    >
      {children}
    </PostHogProvider>
  );
}
