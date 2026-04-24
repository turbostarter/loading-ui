import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export default function CometSpinnerAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia>
        <CometSpinner className="size-2.5 [--duration:1.4s]" />
      </AlertMedia>
      <AlertTitle>Large upload entering the fast lane</AlertTitle>
      <AlertDescription>
        The comet metaphor fits when throughput suddenly jumps—users see motion
        that feels directional, not stuck in place.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          View queue
        </Button>
      </AlertAction>
    </Alert>
  );
}
