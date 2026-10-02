import { registryConfig } from "@/registry/config";

export function getCLICommand(name: string) {
  return `npx shadcn add ${registryConfig.name}/${name}`;
}

export function getRegistryItemUrl(name: string) {
  return new URL(`/r/${name}.json`, registryConfig.homepage).toString();
}

export function getOpenInV0Url(name: string) {
  const url = new URL("https://v0.app/chat/api/open");

  url.searchParams.set("url", getRegistryItemUrl(name));

  return url.toString();
}
