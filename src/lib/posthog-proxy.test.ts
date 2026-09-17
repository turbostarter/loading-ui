import { afterEach, expect, mock, test } from "bun:test";

import { proxyPostHogRequest } from "./posthog-proxy";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("OPTIONS requests return CORS headers without forwarding", async () => {
  globalThis.fetch = mock(() => {
    throw new Error("fetch should not be called for OPTIONS");
  });

  const response = await proxyPostHogRequest(
    new Request("http://localhost/ingest/e", { method: "OPTIONS" }),
  );

  expect(response.status).toBe(204);
  expect(response.headers.get("Access-Control-Allow-Origin")).toBe("*");
  expect(response.headers.get("Access-Control-Allow-Methods")).toContain(
    "POST",
  );
});

test("strips /ingest and forwards API traffic to PostHog", async () => {
  let forwardedUrl = "";
  globalThis.fetch = mock(async (input: RequestInfo | URL) => {
    forwardedUrl = String(input);
    return new Response("ok", { status: 200 });
  });

  const response = await proxyPostHogRequest(
    new Request("http://localhost/ingest/e/?ip=0", {
      method: "POST",
      body: "{}",
    }),
  );

  expect(response.status).toBe(200);
  expect(forwardedUrl).toBe("https://eu.i.posthog.com/e/?ip=0");
  expect(response.headers.get("Access-Control-Allow-Origin")).toBe("*");
});

test("routes static assets to the PostHog asset host", async () => {
  let forwardedUrl = "";
  globalThis.fetch = mock(async (input: RequestInfo | URL) => {
    forwardedUrl = String(input);
    return new Response("asset", { status: 200 });
  });

  const response = await proxyPostHogRequest(
    new Request("http://localhost/ingest/static/array.js"),
  );

  expect(response.status).toBe(200);
  expect(forwardedUrl).toBe("https://eu-assets.i.posthog.com/static/array.js");
});
