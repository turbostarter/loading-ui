import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { Ripple } from "@/registry/components/loading-ui/ripple";

export default function RippleAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia>
        <Ripple className="size-6" />
      </AlertMedia>
      <AlertTitle>Still listening across regions</AlertTitle>
      <AlertDescription>
        Concentric ripples read well for “we are out there looking” without
        implying a hard failure. Pair with honest copy about what is scanning.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Details
        </Button>
      </AlertAction>
    </Alert>
  );
}
