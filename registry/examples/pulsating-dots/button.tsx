import { Button } from "@/components/ui/button";
import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export default function PulsatingDotsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <PulsatingDots className="w-7" data-icon="inline-start" />
        Preparing batch
      </Button>
      <Button variant="outline" size="sm">
        <PulsatingDots className="w-7" data-icon="inline-start" />
        Warming cache
      </Button>
      <Button variant="secondary" size="sm">
        <PulsatingDots className="w-7" data-icon="inline-start" />
        Loading assets
      </Button>
    </div>
  );
}
