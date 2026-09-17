import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export default function ClockRingAlert() {
  return (
    <Alert className="w-full max-w-md border-dashed">
      <AlertMedia>
        <ClockRing className="size-5" />
      </AlertMedia>
      <AlertTitle>Calendar sync is catching up</AlertTitle>
      <AlertDescription>
        Free-busy data is still merging for the next few minutes. Invites you
        send now may show a short delay before responses appear everywhere.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          View sync log
        </Button>
      </AlertAction>
    </Alert>
  );
}
