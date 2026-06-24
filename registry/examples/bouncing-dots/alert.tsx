import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export default function BouncingDotsAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia>
        <BouncingDots className="w-4" />
      </AlertMedia>
      <AlertTitle>Queue is decompressing</AlertTitle>
      <AlertDescription>
        Scale-and-opacity beats pair naturally with “almost ready” messaging:
        softer than a hard spinner, more kinetic than blinking alone.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          View jobs
        </Button>
      </AlertAction>
    </Alert>
  );
}
