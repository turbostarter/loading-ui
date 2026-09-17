"use client";

import { PostHogProvider as PHProvider } from "@posthog/react";
import type { ReactNode } from "react";

import {
  POSTHOG_CLIENT_HOST,
  POSTHOG_DEFAULTS,
  POSTHOG_PROJECT_TOKEN,
  POSTHOG_UI_HOST,
} from "@/lib/posthog";

const options = {
  api_host: POSTHOG_CLIENT_HOST,
  ui_host: POSTHOG_UI_HOST,
  defaults: POSTHOG_DEFAULTS,
  capture_exceptions: true,
} as const;

export function PostHogProvider({ children }: { children: ReactNode }) {
  if (!POSTHOG_PROJECT_TOKEN) {
    return children;
  }

  return (
    <PHProvider apiKey={POSTHOG_PROJECT_TOKEN} options={options}>
      {children}
    </PHProvider>
  );
}
