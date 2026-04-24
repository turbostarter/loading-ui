import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export default function ClockRingPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" size="sm" />}>
        Next maintenance window
      </PopoverTrigger>
      <PopoverContent className="w-80" align="center">
        <PopoverHeader className="gap-1">
          <PopoverTitle className="text-base">Change freeze</PopoverTitle>
          <PopoverDescription>
            Operations uses a clock-forward metaphor here so the wait feels tied
            to scheduling, not generic network noise.
          </PopoverDescription>
        </PopoverHeader>
        <div className="bg-muted/50 flex items-center gap-3 rounded-md border px-3 py-2.5">
          <ClockRing className="size-5 shrink-0" />
          <p className="text-muted-foreground text-sm leading-snug">
            Policy engine is recalculating blackout ranges from your on-call
            rotations.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
