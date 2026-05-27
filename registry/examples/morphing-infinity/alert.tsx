import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { MorphingInfinity } from "@/registry/components/loading-ui/morphing-infinity";

export default function MorphingInfinityAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia>
        <span className="size-2 rounded-full bg-current" />
      </AlertMedia>
      <AlertTitle>
        <MorphingInfinity className="-mx-3 -my-2" />
      </AlertTitle>
      <AlertDescription>
        Generating a structured answer from the current workspace context.
      </AlertDescription>
    </Alert>
  );
}
