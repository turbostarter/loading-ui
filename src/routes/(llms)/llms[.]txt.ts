import { createFileRoute } from "@tanstack/react-router";

import { docsLlms } from "@/lib/source";

export const Route = createFileRoute("/(llms)/llms.txt")({
  server: {
    handlers: {
      GET: async () => new Response(docsLlms.index()),
    },
  },
});
