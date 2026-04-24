import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { TextShimmerWave } from "@/registry/components/loading-ui/text-shimmer-wave";

export default function TextShimmerWaveAlert() {
  return (
    <Alert className="w-full max-w-md">
      <AlertMedia className="size-2 translate-y-2 rounded-full bg-current" />
      <AlertTitle>
        <TextShimmerWave as="span">Assistant is drafting</TextShimmerWave>
      </AlertTitle>
      <AlertDescription>
        Character-level motion is best for short labels and assistant-style
        status text.
      </AlertDescription>
    </Alert>
  );
}
