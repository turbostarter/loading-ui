import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export default function ClockRingInputGroup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="14:30 - team standup" disabled />
        <InputGroupAddon align="inline-end" className="gap-2">
          <ClockRing className="size-4" />
          <span className="text-muted-foreground">Resolving slot…</span>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="America / Chicago" disabled />
        <InputGroupAddon align="inline-end" className="gap-2">
          <ClockRing className="size-4" />
          <span className="text-muted-foreground">IANA lookup</span>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
