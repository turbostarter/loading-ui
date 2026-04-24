import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export default function PulsatingDotsPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" size="sm" />}>
        Background task
      </PopoverTrigger>
      <PopoverContent className="w-72" align="center">
        <PopoverHeader>
          <PopoverTitle>Still processing</PopoverTitle>
          <PopoverDescription>
            Small popovers work best with soft, low-detail motion.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex justify-center py-2">
          <PulsatingDots className="w-16 text-[#2563eb]" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
