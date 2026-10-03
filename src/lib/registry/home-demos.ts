import {
  buildDemoMap,
  type DemoModule,
} from "@/lib/registry/build-demo-map";

const modules = import.meta.glob<DemoModule>(
  "../../registry/examples/**/demo.tsx",
  { eager: true },
);

export const HomeDemoComponents = buildDemoMap(modules);

export function getHomeDemoComponent(registryName: string) {
  return HomeDemoComponents[`${registryName}-demo`];
}
