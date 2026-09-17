import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export default function SatelliteRingSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="sm" />}>
        Open mesh status
      </SheetTrigger>
      <SheetContent className="gap-0" showCloseButton>
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Mesh propagation</SheetTitle>
          <SheetDescription>
            Live view of how the release is fanning out across clusters.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="bg-muted/40 flex items-start gap-3 rounded-lg border p-4">
            <SatelliteRing className="mt-0.5 size-5 shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Relay queue draining</p>
              <p className="text-muted-foreground text-sm">
                Secondary regions are still pulling artifacts; estimated
                completion updates as each satellite acknowledges.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-xs">
            Tip: pair this pattern with a concise title so the motion reads as
            progress, not decoration.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
