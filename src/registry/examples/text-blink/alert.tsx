import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { TextBlink } from "@/registry/components/loading-ui/text-blink";

export default function TextBlinkAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-2 translate-y-2 rounded-full bg-current" />
      <AlertTitle>
        <TextBlink as="span">Connection is unstable</TextBlink>
      </AlertTitle>
      <AlertDescription>
        Changes are still queued locally and will retry automatically.
      </AlertDescription>
    </Alert>
  );
}
