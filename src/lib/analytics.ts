type TrackProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    zaraz?: {
      track: (
        eventName: string,
        properties?: TrackProperties,
      ) => void | Promise<void>;
    };
  }
}

export function track(eventName: string, properties?: TrackProperties) {
  if (typeof window === "undefined") {
    return;
  }

  void window.zaraz?.track(eventName, properties);
}
