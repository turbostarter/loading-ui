import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export default function QuarterRingTooltip() {
  return (
    <TooltipProvider delay={100}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="ghost" size="sm" />}>
          Live estimate
        </TooltipTrigger>
        <TooltipContent className="max-w-xs gap-2">
          <QuarterRing className="size-3.5 shrink-0" />
          <span>
            Recomputing savings from the last hour of usage—numbers update as
            soon as the partial window closes.
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
