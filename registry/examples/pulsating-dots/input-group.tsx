import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export default function PulsatingDotsInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search projects" disabled />
        <InputGroupAddon align="inline-end">
          <PulsatingDots className="w-6" />
          Loading
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Describe the import..." disabled />
        <InputGroupAddon align="block-end">
          <PulsatingDots className="w-6" dots={4} />
          Reading files
          <InputGroupButton className="ml-auto" variant="default">
            Import
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
