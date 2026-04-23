import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { Spokes } from "@/registry/components/loading-ui/spokes";

export default function SpokesAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia>
        <Spokes className="size-4 text-muted-foreground" />
      </AlertMedia>
      <AlertTitle>Generating preview assets</AlertTitle>
      <AlertDescription>
        Fresh renditions are still processing in the background. You can keep
        editing while this finishes.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Hide
        </Button>
      </AlertAction>
    </Alert>
  );
}
