import { Badge } from "@/components/ui/badge";
import { Pulse } from "@/registry/components/loading-ui/pulse";

export default function PulseBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Pulse className="size-3.5" />
        Breathing room
      </Badge>
      <Badge variant="secondary">
        <Pulse className="size-3.5" />
        Idle polish
      </Badge>
      <Badge variant="outline">
        <Pulse className="size-3.5" />
        Gentle hold
      </Badge>
    </div>
  );
}
