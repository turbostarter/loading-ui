import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export default function DotsRingInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Package name" disabled />
        <InputGroupAddon align="inline-end">
          <DotsRing className="size-4" dots={6} dotScale={0.28} />
          Resolving...
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask a question..." disabled />
        <InputGroupAddon align="block-end">
          <DotsRing className="size-4" dots={8} dotScale={0.26} />
          Drafting answer...
          <InputGroupButton className="ml-auto" variant="default">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
