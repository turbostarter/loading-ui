import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export default function DualArcAlert() {
  return (
    <Alert className="w-full max-w-md">
      <DualArc className="size-5 border-[3px] text-primary" />
      <AlertTitle>Workspace refresh is in progress</AlertTitle>
      <AlertDescription>
        Fresh dependency and repository data is still being collected in the
        background.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Dismiss
        </Button>
      </AlertAction>
    </Alert>
  );
}
