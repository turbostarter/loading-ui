import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export default function PulseDotInputGroup() {
  return (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupInput
          placeholder="Message will appear as the model responds…"
          disabled
          className="text-muted-foreground"
        />
        <InputGroupAddon align="inline-end" className="gap-2 pr-3">
          <PulseDot className="size-2" />
          <span className="text-muted-foreground text-xs">Generating…</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
