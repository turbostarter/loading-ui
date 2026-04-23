import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Dots } from "@/registry/components/loading-ui/dots";

export default function DotsInputGroup() {
  return (
    <div className="w-full max-w-md">
      <InputGroup className="min-h-36">
        <InputGroupTextarea
          placeholder="Your thread summary will land here…"
          disabled
          rows={5}
          className="text-muted-foreground"
        />
        <InputGroupAddon align="block-end" className="justify-between px-3">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Dots className="w-8" />
            <span>Assistant is still typing</span>
          </div>
          <span className="text-muted-foreground text-[10px] uppercase tracking-wide">
            Esc to cancel
          </span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
