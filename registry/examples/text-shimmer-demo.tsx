import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export function TextShimmerDemo() {
  return (
    <TextShimmer className="text-xl" duration={1}>
      Thinking...
    </TextShimmer>
  );
}
