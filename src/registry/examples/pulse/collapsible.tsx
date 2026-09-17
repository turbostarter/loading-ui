import { ChevronsUpDownIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Pulse } from "@/registry/components/loading-ui/pulse";

export default function PulseCollapsible() {
  return (
    <Collapsible
      defaultOpen
      className="bg-muted/15 w-full max-w-md rounded-xl border border-dashed"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-4 text-left">
        <div className="flex items-center gap-3">
          <Pulse className="size-5" />
          <div className="space-y-1">
            <div className="font-medium">Background polish in progress</div>
            <p className="text-muted-foreground text-sm">
              The pulse stays soft so it does not read as an error, more like a
              live cushion until the panel is ready.
            </p>
          </div>
        </div>
        <ChevronsUpDownIcon className="text-muted-foreground size-4 shrink-0" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3">
        <p className="text-muted-foreground text-sm">
          When you open this section, the loader can disappear or hand off to
          skeleton lines depending on your data shape.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
