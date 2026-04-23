import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export default function ConcentricRingAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia>
        <ConcentricRing className="size-5 text-primary" />
      </AlertMedia>
      <AlertTitle>Repository scan is still running</AlertTitle>
      <AlertDescription>
        File metadata and dependency information are still being collected in
        the background.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Hide
        </Button>
      </AlertAction>
    </Alert>
  );
}
