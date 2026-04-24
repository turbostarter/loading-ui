import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export default function BouncingDotsPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" size="sm" />}>
        Micro task
      </PopoverTrigger>
      <PopoverContent className="w-72" align="center">
        <PopoverHeader className="gap-1">
          <PopoverTitle className="text-base">Hold tight</PopoverTitle>
          <PopoverDescription>
            Popovers excel at tiny async hints—pair with one action or none.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex justify-center py-2">
          <BouncingDots className="w-12" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
