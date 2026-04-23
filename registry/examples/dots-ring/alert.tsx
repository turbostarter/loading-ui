import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export default function DotsRingAlert() {
  return (
    <Alert className="w-full max-w-md">
      <DotsRing className="size-5 text-primary" dots={8} dotScale={0.24} />
      <AlertTitle>Search index is updating</AlertTitle>
      <AlertDescription>
        New files are being processed in the background. Results may shift for a
        moment.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Hide
        </Button>
      </AlertAction>
    </Alert>
  );
}
