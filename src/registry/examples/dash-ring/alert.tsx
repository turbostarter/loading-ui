import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export default function DashRingAlert() {
  return (
    <Alert className="bg-muted/30 w-full max-w-md">
      <AlertMedia>
        <DashRing className="size-5" />
      </AlertMedia>
      <AlertTitle>Model output is still stabilizing</AlertTitle>
      <AlertDescription>
        The dashed stroke reads well when responses are streaming: it signals
        motion without implying a precise percent complete.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Copy request id
        </Button>
      </AlertAction>
    </Alert>
  );
}
