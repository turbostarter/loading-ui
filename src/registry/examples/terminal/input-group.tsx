import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Terminal } from "@/registry/components/loading-ui/terminal";

export default function TerminalInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="pnpm test --filter api" disabled />
        <InputGroupAddon align="inline-start">
          <Terminal prompt="$" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">Running</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea
          placeholder="Streaming command output..."
          disabled
        />
        <InputGroupAddon align="block-end">
          <Terminal prompt=">" />
          Waiting for logs
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
