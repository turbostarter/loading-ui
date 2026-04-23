import { ChevronsUpDownIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export default function ConcentricRingCollapsible() {
  return (
    <Collapsible
      defaultOpen
      className="w-full max-w-md rounded-xl border shadow-xs"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-4 text-left">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 leading-none">
            <ConcentricRing className="size-5" />
          </div>
          <div className="space-y-1">
            <div className="font-medium">Compilation pipeline is active</div>
            <p className="text-muted-foreground text-sm">
              Bundles, types, and static assets are still being finalized.
            </p>
          </div>
        </div>
        <ChevronsUpDownIcon className="text-muted-foreground size-4 shrink-0" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3">
        <div className="flex flex-col gap-2 text-sm">
          <div className="rounded-md border px-3 py-2">Type generation</div>
          <div className="rounded-md border px-3 py-2">Asset hashing</div>
          <div className="rounded-md border px-3 py-2">Manifest publish</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
