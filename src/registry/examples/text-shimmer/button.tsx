import { Button } from "@/components/ui/button";
import { TextShimmer } from "@/registry/components/loading-ui/text-shimmer";

export default function TextShimmerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <TextShimmer as="span">Generating report</TextShimmer>
      </Button>
      <Button variant="outline" size="sm">
        <TextShimmer as="span">Scanning workspace</TextShimmer>
      </Button>
      <Button variant="secondary" size="sm">
        <TextShimmer as="span" duration={1.5}>
          Preparing export
        </TextShimmer>
      </Button>
    </div>
  );
}
