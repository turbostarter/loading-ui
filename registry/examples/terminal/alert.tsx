import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { Terminal } from "@/registry/components/loading-ui/terminal";

export default function TerminalAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-5">
        <Terminal prompt="$" />
      </AlertMedia>
      <AlertTitle>Command is still running</AlertTitle>
      <AlertDescription>
        The cursor keeps blinking while the process streams output in the
        background.
      </AlertDescription>
    </Alert>
  );
}
