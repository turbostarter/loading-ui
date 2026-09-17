import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Wave } from "@/registry/components/loading-ui/wave";

export default function WaveInputGroup() {
  return (
    <InputGroup className="w-full max-w-md">
      <InputGroupInput placeholder="Ask by voice" disabled />
      <InputGroupAddon align="inline-end">
        <Wave className="h-4 w-8" />
        Listening
      </InputGroupAddon>
    </InputGroup>
  );
}
