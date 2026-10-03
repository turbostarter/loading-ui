import type { ComponentType } from "react";

export type DemoModule = { default?: ComponentType } & Record<string, unknown>;

const EXAMPLES_PREFIX = /^\.\.\/\.\.\/registry\/examples\//;

export function examplePathToName(filePath: string) {
  return filePath
    .replace(EXAMPLES_PREFIX, "")
    .replace(/\.tsx$/, "")
    .split("/")
    .join("-");
}

export function resolveDemoComponent(mod: DemoModule) {
  if (typeof mod.default === "function") {
    return mod.default;
  }

  const exportName = Object.keys(mod).find(
    (key) => typeof mod[key] === "function" || typeof mod[key] === "object",
  );

  const resolved = exportName ? mod[exportName] : mod.default;
  return resolved as ComponentType;
}

export function buildDemoMap(modules: Record<string, DemoModule>) {
  const map: Record<string, ComponentType> = {};

  for (const [filePath, mod] of Object.entries(modules)) {
    if (filePath.endsWith("__index__.tsx")) {
      continue;
    }

    map[examplePathToName(filePath)] = resolveDemoComponent(mod);
  }

  return map;
}
