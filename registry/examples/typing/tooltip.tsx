import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typing } from "@/registry/components/loading-ui/typing";

export default function TypingTooltip() {
  return (
    <TooltipProvider delay={120}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" size="sm" />}>
          Presence
        </TooltipTrigger>
        <TooltipContent className="flex max-w-xs items-center gap-2">
          <Typing className="w-8" />
          <span>
            One or more editors are active in this document—the wave keeps
            moving until they pause.
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
