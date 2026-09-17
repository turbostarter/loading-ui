import { expect, mock, test } from "bun:test";

const capture = mock(() => undefined);

mock.module("posthog-js", () => ({
  posthog: { capture },
}));

const { track } = await import("./analytics");

test("track captures through PostHog instead of Zaraz", () => {
  (globalThis as { window?: unknown }).window = {} as Window;

  track("sponsor_clicked", { sponsor: "TurboStarter", source: "sponsors" });

  expect(capture).toHaveBeenCalledWith("sponsor_clicked", {
    sponsor: "TurboStarter",
    source: "sponsors",
  });
});
