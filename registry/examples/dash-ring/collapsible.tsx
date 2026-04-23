import { ChevronsUpDownIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export default function DashRingCollapsible() {
  return (
    <Collapsible
      defaultOpen
      className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow-xs"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-4 text-left">
        <div className="flex items-center gap-3">
          <DashRing className="size-6 shrink-0 text-muted-foreground" />
          <div className="space-y-1">
            <div className="font-medium">Buffering the next chunk</div>
            <p className="text-muted-foreground text-sm">
              Dash length eases in and out as tokens arrive—expand for raw
              diagnostics.
            </p>
          </div>
        </div>
        <ChevronsUpDownIcon className="text-muted-foreground size-4 shrink-0" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3">
        <pre className="bg-muted/50 rounded-md p-3 text-xs leading-relaxed">
          stream: open
          {"\n"}
          codec: utf-8
          {"\n"}
          backpressure: nominal
        </pre>
      </CollapsibleContent>
    </Collapsible>
  );
}
