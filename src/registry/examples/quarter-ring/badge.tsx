import { Badge } from "@/components/ui/badge";
import { QuarterRing } from "@/registry/components/loading-ui/quarter-ring";

export default function QuarterRingBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <QuarterRing className="size-3.5" />
        Quick scan
      </Badge>
      <Badge variant="secondary">
        <QuarterRing className="size-3.5" />
        Thumbnail
      </Badge>
      <Badge variant="outline">
        <QuarterRing className="size-3.5" />
        LRU warm
      </Badge>
    </div>
  );
}
