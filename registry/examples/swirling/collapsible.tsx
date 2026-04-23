import { ChevronsUpDownIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Swirling } from "@/registry/components/loading-ui/swirling";

export default function SwirlingCollapsible() {
  return (
    <Collapsible
      defaultOpen
      className="w-full max-w-md rounded-xl border shadow-xs"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-4 text-left">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 leading-none">
            <Swirling className="size-5" />
          </div>
          <div className="space-y-1">
            <div className="font-medium">Rendering publish assets</div>
            <p className="text-muted-foreground text-sm">
              Artwork, thumbnails, and social previews are still processing.
            </p>
          </div>
        </div>
        <ChevronsUpDownIcon className="text-muted-foreground size-4 shrink-0" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t px-4 py-3">
        <div className="flex flex-col gap-2 text-sm">
          <div className="rounded-md border px-3 py-2">Homepage hero image</div>
          <div className="rounded-md border px-3 py-2">Open Graph preview</div>
          <div className="rounded-md border px-3 py-2">
            App store screenshots
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
