import {
  POSTHOG_API_HOST,
  POSTHOG_ASSET_HOST,
  POSTHOG_PROXY_PATH,
} from "@/lib/posthog";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

function withCors(response: Response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export async function proxyPostHogRequest(request: Request) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS,
    });
  }

  const url = new URL(request.url);
  const pathname = url.pathname.startsWith(POSTHOG_PROXY_PATH)
    ? url.pathname.slice(POSTHOG_PROXY_PATH.length) || "/"
    : url.pathname;
  const pathWithSearch = `${pathname}${url.search}`;
  const isAsset =
    pathname.startsWith("/static/") || pathname.startsWith("/array/");
  const origin = isAsset ? POSTHOG_ASSET_HOST : POSTHOG_API_HOST;
  const headers = new Headers(request.headers);

  headers.delete("cookie");
  headers.delete("authorization");
  headers.set("host", new URL(origin).host);

  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) {
    headers.set("X-Forwarded-For", ip);
  }

  const response = await fetch(`${origin}${pathWithSearch}`, {
    method: request.method,
    headers,
    body:
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.arrayBuffer(),
    redirect: "follow",
  });

  return withCors(response);
}
