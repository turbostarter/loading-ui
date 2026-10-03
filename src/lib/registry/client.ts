import { DemoComponents } from "@/lib/registry/demos";
import { Index } from "@/registry/__index__";
import { ExamplesIndex } from "@/registry/examples/__index__";

export function getDemoComponent(name: string) {
  return DemoComponents[name] ?? ExamplesIndex[name]?.component;
}

function getRegistryEntry(name: string) {
  return Index[name];
}

export function getRegistryComponent(name: string) {
  const demo = DemoComponents[name];
  if (demo) {
    return demo;
  }

  const demoComponent = ExamplesIndex[name]?.component;
  if (demoComponent) {
    return demoComponent;
  }

  return getRegistryEntry(name)?.component;
}
