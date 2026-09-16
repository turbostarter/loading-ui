import { Index } from "@/registry/__index__";
import { ExamplesIndex } from "@/registry/examples/__index__";

export function getDemoComponent(name: string) {
  return ExamplesIndex[name]?.component;
}

function getRegistryEntry(name: string) {
  return Index[name];
}

export function getRegistryComponent(name: string) {
  const demoComponent = getDemoComponent(name);
  if (demoComponent) {
    return demoComponent;
  }

  return getRegistryEntry(name)?.component;
}
