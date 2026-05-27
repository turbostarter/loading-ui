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
      <AlertMedia className="size-6">
        <MorphingInfinity className="-mt-2 size-6" />
      </AlertMedia>
      <AlertTitle>Generating workspace summary</AlertTitle>
      <AlertDescription>
        The assistant is reviewing context before assembling a structured reply.
      </AlertDescription>
    </Alert>
  );
}
