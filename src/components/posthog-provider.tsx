"use client";

import { PostHogProvider as PHProvider } from "@posthog/react";
import type { ReactNode } from "react";

const options = {
  api_host: import.meta.env.VITE_POSTHOG_HOST ?? "https://eu.i.posthog.com",
  defaults: "2026-05-30",
  capture_exceptions: true,
} as const;

export function PostHogProvider({ children }: { children: ReactNode }) {
  const apiKey = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;
  if (!apiKey) {
    return children;
  }

  return (
    <PHProvider apiKey={apiKey} options={options}>
      {children}
    </PHProvider>
  );
}
