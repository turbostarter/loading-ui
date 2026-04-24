import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pulse } from "@/registry/components/loading-ui/pulse";

export default function PulseTooltip() {
  return (
    <TooltipProvider delay={80}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Health check
        </TooltipTrigger>
        <TooltipContent className="flex max-w-xs items-start gap-2">
          <Pulse className="mt-0.5 size-3.5 shrink-0" />
          <span>
            Endpoint is up but latency is elevated—this pulse mirrors the soft
            backoff before we declare green.
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
