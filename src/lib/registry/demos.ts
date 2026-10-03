import type { ComponentType } from "react";

type DemoModule = { default?: ComponentType } & Record<string, unknown>;

const modules = import.meta.glob<DemoModule>(
  "../../registry/examples/**/*.tsx",
  { eager: true },
);

function examplePathToName(filePath: string) {
  return filePath
    .replace(/^\.\.\/\.\.\/registry\/examples\//, "")
    .replace(/\.tsx$/, "")
    .split("/")
    .join("-");
}

function resolveComponent(mod: DemoModule) {
  if (typeof mod.default === "function") {
    return mod.default;
  }

  const exportName = Object.keys(mod).find(
    (key) => typeof mod[key] === "function" || typeof mod[key] === "object",
  );

  const resolved = exportName ? mod[exportName] : mod.default;
  return resolved as ComponentType;
}

export const DemoComponents: Record<string, ComponentType> = {};

for (const [filePath, mod] of Object.entries(modules)) {
  if (filePath.endsWith("__index__.tsx")) {
    continue;
  }

  const name = examplePathToName(filePath);
  DemoComponents[name] = resolveComponent(mod);
}
