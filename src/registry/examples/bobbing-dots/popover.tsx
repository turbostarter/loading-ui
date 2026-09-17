import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        Easter egg progress
      </PopoverTrigger>
      <PopoverContent className="w-80" align="center">
        <PopoverHeader className="gap-1">
          <PopoverTitle className="text-base">Almost there</PopoverTitle>
          <PopoverDescription>
            Popovers are perfect for micro-delights: short copy, one action, and
            motion that does not dominate the page.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex items-center justify-center py-3">
          <BobbingDots className="w-12" dots={3} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
