import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export default function TextShimmerInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search knowledge base" disabled />
        <InputGroupAddon align="inline-end">
          <TextShimmer as="span">Reading index</TextShimmer>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask for a summary..." disabled />
        <InputGroupAddon align="block-end">
          <TextShimmer as="span" duration={1.5}>
            Drafting answer
          </TextShimmer>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
