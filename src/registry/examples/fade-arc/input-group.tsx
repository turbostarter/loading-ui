import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export default function FadeArcInputGroup() {
  return (
    <div className="w-full max-w-md">
      <InputGroup className="min-h-32">
        <InputGroupTextarea
          placeholder="Describe the layout you want to generate…"
          disabled
          rows={5}
        />
        <InputGroupAddon align="block-end">
          <FadeArc className="size-4" />
          <span className="text-muted-foreground">Generating preview…</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
