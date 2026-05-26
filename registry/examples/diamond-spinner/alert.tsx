import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { DiamondSpinner } from "@/registry/components/loading-ui/diamond-spinner";

export default function DiamondSpinnerAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-6">
        <DiamondSpinner className="size-4" />
      </AlertMedia>
      <AlertTitle>Processing game state</AlertTitle>
      <AlertDescription>
        Pixel layers are still loading before the board can be shown.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Dismiss
        </Button>
      </AlertAction>
    </Alert>
  );
}
