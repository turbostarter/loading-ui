import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export default function DualArcInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Repository URL" disabled />
        <InputGroupAddon align="inline-end">
          <DualArc className="size-4 border-[2px]" />
          Resolving...
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Share your update..." disabled />
        <InputGroupAddon align="block-end">
          <DualArc className="size-4 border-[2px]" />
          Drafting reply...
          <InputGroupButton className="ml-auto" variant="default">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
