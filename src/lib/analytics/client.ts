import { posthog } from "posthog-js";

type TrackProperties = Record<string, string | number | boolean | undefined>;

export function track(eventName: string, properties?: TrackProperties) {
  if (typeof window === "undefined") {
    return;
  }

  posthog.capture(eventName, properties);
}
