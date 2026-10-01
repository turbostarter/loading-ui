import { getCookie, setCookie } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";

import { SPONSORS } from "@/lib/sponsors";
import { getGitHubStars } from "@/lib/github-stars";
import { source } from "@/lib/source";
import envConfig from "../../env.config";

export const getSerializedPageTree = createServerFn({ method: "GET" }).handler(
  async () => source.serializePageTree(source.getPageTree()),
);

export const getGitHubStarsFn = createServerFn({ method: "GET" }).handler(() =>
  getGitHubStars(),
);

export const getWaitlistSignupCountFn = createServerFn({
  method: "GET",
}).handler(async () => {
  const response = await fetch(
    `https://eu.posthog.com/api/projects/${envConfig.POSTHOG_PROJECT_ID}/query/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${envConfig.POSTHOG_PERSONAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          kind: "HogQLQuery",
          query: `
            SELECT count(DISTINCT properties.email)
            FROM events
            WHERE event = 'waitlist_submitted'
              AND properties.email != ''
          `.trim(),
        },
      }),
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { results?: unknown[][] };
  const raw = data.results?.[0]?.[0];
  const count = typeof raw === "number" ? raw : Number(raw);

  return Number.isFinite(count) && count >= 0 ? count : null;
});

const COOKIE_KEY = "diamond-sponsor-id";

export const getDiamondSponsorFn = createServerFn({ method: "GET" }).handler(
  () => {
    const sponsors = SPONSORS.diamond;
    const stored = getCookie(COOKIE_KEY);
    const existing = sponsors.find((sponsor) => sponsor.id === stored);

    if (existing) {
      return existing.id;
    }

    const picked = sponsors[Math.floor(Math.random() * sponsors.length)];
    setCookie(COOKIE_KEY, picked.id, { path: "/", sameSite: "lax" });
    return picked.id;
  },
);
