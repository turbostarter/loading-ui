import { LRUCache } from "lru-cache";

import { getStars } from "./octokit";

const cache = new LRUCache<string, number>({
  max: 1,
  ttl: 1000 * 60 * 60,
});

export async function getGitHubStars() {
  const cached = cache.get("stars");
  if (cached !== undefined) {
    return cached;
  }

  const stars = await getStars();
  cache.set("stars", stars);
  return stars;
}
