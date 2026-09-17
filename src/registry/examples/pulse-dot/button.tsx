import { Button } from "@/components/ui/button";
import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export default function PulseDotButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm" variant="outline">
        <PulseDot className="mx-1 size-2" data-icon="inline-start" />
        Assistant thinking
      </Button>
      <Button size="sm" variant="ghost">
        <PulseDot className="mx-1 size-2" data-icon="inline-start" />
        Streaming tokens
      </Button>
      <Button size="sm" variant="secondary">
        <PulseDot className="mx-1 size-2" data-icon="inline-start" />
        Composing reply
      </Button>
    </div>
  );
}
