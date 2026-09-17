import { Badge } from "@/components/ui/badge";
import { PulsatingDots } from "@/registry/components/loading-ui/pulsating-dots";

export default function PulsatingDotsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <PulsatingDots className="w-5" />
        Active
      </Badge>
      <Badge variant="secondary">
        <PulsatingDots className="w-5" />
        Queued
      </Badge>
      <Badge variant="outline">
        <PulsatingDots className="w-5" />
        Retrying
      </Badge>
    </div>
  );
}
