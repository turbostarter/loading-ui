import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Typing } from "@/registry/components/loading-ui/typing";

export default function TypingInputGroup() {
  return (
    <div className="w-full max-w-md">
      <InputGroup>
        <InputGroupAddon align="inline-start" className="pl-3">
          <Typing className="w-8" />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Command palette is resolving your query…"
          disabled
          className="text-muted-foreground"
        />
      </InputGroup>
    </div>
  );
}
