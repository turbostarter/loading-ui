import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export default function FadeArcAlert() {
  return (
    <Alert className="bg-muted/30 w-full max-w-md">
      <AlertMedia>
        <FadeArc className="size-5" />
      </AlertMedia>
      <AlertTitle>Workspace sync in progress</AlertTitle>
      <AlertDescription>
        The gradient tail keeps motion readable without a harsh leading edge,
        which works well for background sync and import jobs.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          View activity
        </Button>
      </AlertAction>
    </Alert>
  );
}
