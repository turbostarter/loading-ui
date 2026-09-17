import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Bars } from "@/registry/components/loading-ui/bars";

export default function BarsInputGroup() {
  return (
    <InputGroup className="w-full max-w-md">
      <InputGroupInput placeholder="Search logs" disabled />
      <InputGroupAddon align="inline-end">
        <Bars className="h-4 w-5" />
        Indexing
      </InputGroupAddon>
    </InputGroup>
  );
}
