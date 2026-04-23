import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Swirling } from "@/registry/components/loading-ui/swirling";

export default function SwirlingAlert() {
  return (
    <Alert className="w-full max-w-md">
      <Swirling className="size-5 text-primary" />
      <AlertTitle>Media processing is still underway</AlertTitle>
      <AlertDescription>
        Large video assets are being transcoded in the background. This step can
        take a minute or two.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Hide
        </Button>
      </AlertAction>
    </Alert>
  );
}
