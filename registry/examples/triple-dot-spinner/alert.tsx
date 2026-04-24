import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { TripleDotSpinner } from "@/registry/components/loading-ui/triple-dot-spinner";

export default function TripleDotSpinnerAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-6">
        <TripleDotSpinner className="size-1.5" />
      </AlertMedia>
      <AlertTitle>Status refresh in progress</AlertTitle>
      <AlertDescription>
        Recent activity is being checked before the list updates.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Hide
        </Button>
      </AlertAction>
    </Alert>
  );
}
