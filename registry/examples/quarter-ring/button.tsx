import { Button } from "@/components/ui/button";
import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export default function QuarterRingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <QuarterRing className="size-4" data-icon="inline-start" />
        Tight prefetch
      </Button>
      <Button variant="outline" size="sm">
        <QuarterRing className="size-4" data-icon="inline-start" />
        Micro-batching
      </Button>
      <Button variant="secondary" size="sm">
        <QuarterRing className="size-4" data-icon="inline-start" />
        Compressing
      </Button>
    </div>
  );
}
