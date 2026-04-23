import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export default function DashRingInputGroup() {
  return (
    <div className="w-full max-w-md">
      <InputGroup className="min-h-32">
        <InputGroupTextarea
          placeholder="Ask for a refactored version of this module…"
          disabled
          rows={5}
        />
        <InputGroupAddon align="block-end">
          <DashRing className="size-4 text-muted-foreground" />
          <span className="text-muted-foreground">Synthesizing answer…</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
