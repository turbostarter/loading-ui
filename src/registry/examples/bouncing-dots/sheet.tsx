import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export default function BouncingDotsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="sm" />}>
        Import queue
      </SheetTrigger>
      <SheetContent side="bottom" className="gap-0" showCloseButton>
        <SheetHeader className="border-b pb-4 text-left">
          <SheetTitle>Unpacking assets</SheetTitle>
          <SheetDescription>
            Bottom sheets keep thumbs-friendly feedback on mobile while the dots
            sell ongoing work.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center gap-3 py-10">
          <BouncingDots className="w-16" dots={4} />
          <p className="text-muted-foreground max-w-sm text-center text-sm">
            Files expand in the background; you can dismiss when the toast
            fires.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
