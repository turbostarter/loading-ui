import { ChevronsUpDownIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Spiral } from "@/registry/components/loading-ui/spiral";

export default function SpiralCollapsible() {
  return (
    <Collapsible defaultOpen className="w-full max-w-md rounded-xl border shadow-xs">
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-4 text-left">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Spiral className="size-5" dots={8} />
          </div>
          <div className="space-y-1">
            <div className="font-medium">Review bundle is processing</div>
            <p className="text-muted-foreground text-sm">
              Comments, summaries, and suggested edits are still being grouped.
            </p>
          </div>
        </div>
        <ChevronsUpDownIcon className="text-muted-foreground size-4 shrink-0" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3">
        <div className="flex flex-col gap-2 text-sm">
          <div className="rounded-md border px-3 py-2">Critical findings</div>
          <div className="rounded-md border px-3 py-2">Suggested fixes</div>
          <div className="rounded-md border px-3 py-2">Regression scan</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
