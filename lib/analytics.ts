type TrackProperties = Record<string, string | number | boolean | undefined>;

type Zaraz = {
  track: (event: string, properties?: TrackProperties) => void | Promise<void>;
};

declare global {
  interface Window {
    zaraz?: Zaraz;
  }
}

export function track(event: string, properties?: TrackProperties) {
  if (typeof window === "undefined") {
    return;
  }

  void window.zaraz?.track(event, properties);
}
