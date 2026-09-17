import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export default function TextShimmerAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-2 translate-y-2 rounded-full bg-current" />
      <AlertTitle>
        <TextShimmer as="span">Generating workspace summary</TextShimmer>
      </AlertTitle>
      <AlertDescription>
        The title shimmers while the content is being assembled.
      </AlertDescription>
    </Alert>
  );
}
