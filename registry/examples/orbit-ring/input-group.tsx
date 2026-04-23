import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export default function OrbitRingInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search repositories" disabled />
        <InputGroupAddon align="inline-end">
          <OrbitRing className="size-4" />
          Resolving...
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Write an update..." disabled />
        <InputGroupAddon align="block-end">
          <OrbitRing className="size-4" />
          Drafting reply...
          <InputGroupButton className="ml-auto" variant="default">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
