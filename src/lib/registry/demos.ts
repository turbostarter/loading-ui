import {
  buildDemoMap,
  type DemoModule,
} from "@/lib/registry/build-demo-map";

const modules = import.meta.glob<DemoModule>(
  "../../registry/examples/**/*.tsx",
  { eager: true },
);

export const DemoComponents = buildDemoMap(modules);
