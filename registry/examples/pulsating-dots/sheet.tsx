import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export default function PulsatingDotsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="sm" />}>
        Open queue
      </SheetTrigger>
      <SheetContent side="bottom" className="gap-0" showCloseButton>
        <SheetHeader className="border-b pb-4 text-left">
          <SheetTitle>Batch ingest</SheetTitle>
          <SheetDescription>
            Records are being staged before validation begins.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center gap-3 py-10">
          <PulsatingDots className="w-20" dots={4} />
          <p className="text-muted-foreground max-w-sm text-center text-sm">
            Pulsing keeps the state visible without suggesting a precise amount
            of progress.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
