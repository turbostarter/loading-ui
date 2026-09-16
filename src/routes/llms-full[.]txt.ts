import { createFileRoute } from "@tanstack/react-router";

import { getLLMText, source } from "@/lib/source";

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: async () => {
        const scanned = await Promise.all(source.getPages().map(getLLMText));
        return new Response(scanned.join("\n\n"));
      },
    },
  },
});
