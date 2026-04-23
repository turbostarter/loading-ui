import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spokes } from "@/registry/components/loading-ui/spokes";

export default function SpokesInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Project slug" disabled />
        <InputGroupAddon align="inline-end">
          <Spokes className="size-4" />
          Checking...
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea
          placeholder="Describe what should happen next..."
          disabled
        />
        <InputGroupAddon align="block-end">
          <Spokes className="size-4" />
          Drafting response...
          <InputGroupButton className="ml-auto" variant="default">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
