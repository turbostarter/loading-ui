import { registry } from "@/registry/registry";

export function getCLICommand(name: string) {
  return `npx shadcn add ${registry.name}/${name}`;
}

export function getRegistryItemUrl(name: string) {
  return new URL(`/r/${name}.json`, registry.homepage).toString();
}

export function getOpenInV0Url(name: string) {
  const url = new URL("https://v0.app/chat/api/open");

  url.searchParams.set("url", getRegistryItemUrl(name));

  return url.toString();
}
