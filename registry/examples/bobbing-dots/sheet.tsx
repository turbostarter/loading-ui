import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsSheet() {
  return (
    <div className="flex justify-center">
      <Sheet>
        <SheetTrigger render={<Button variant="default" size="sm" />}>
          Sound check
        </SheetTrigger>
        <SheetContent className="gap-0" side="right">
          <SheetHeader className="border-b pb-4">
            <SheetTitle>Staging whimsy</SheetTitle>
            <SheetDescription>
              Sheets give you room to explain why the UI is bouncing—great for
              onboarding or creative tools.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <BobbingDots className="text-primary w-16" duration={0.85} />
            <p className="text-muted-foreground max-w-xs text-center text-sm">
              The dots float in place while we load your preview clip—no harsh
              cuts, just a gentle rhythm.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
