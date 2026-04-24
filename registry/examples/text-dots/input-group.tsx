import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { TextDots } from "@/registry/components/loading-ui/text-dots";

export default function TextDotsInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search documents" disabled />
        <InputGroupAddon align="inline-end">
          <TextDots>Searching</TextDots>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Draft release note..." disabled />
        <InputGroupAddon align="block-end">
          <TextDots>Generating copy</TextDots>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
