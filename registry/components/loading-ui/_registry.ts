import { type Registry } from "shadcn/schema";

export const components = [
  {
    name: "ring",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/ring.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "spokes",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/spokes.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "classic",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/classic.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "analyzing-image",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/analyzing-image.tsx",
        type: "registry:component",
      },
    ],
    dependencies: ["motion"],
  },
] satisfies Registry["items"];
