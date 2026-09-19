import { posthog } from "posthog-js";

type AnalyticsProperties = Record<
  string,
  string | number | boolean | undefined
>;

export function identify(
  distinctId: string,
  properties?: AnalyticsProperties,
) {
  if (typeof window === "undefined") {
    return;
  }

  posthog.identify(distinctId, properties);
}

export function track(eventName: string, properties?: AnalyticsProperties) {
  if (typeof window === "undefined") {
    return;
  }

  posthog.capture(eventName, properties);
}
