import { Badge } from "@/components/ui/badge";
import { InfinityLoop } from "@/registry/components/loading-ui/infinity";

export default function InfinityBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <InfinityLoop className="h-3.5 w-5" />
        Continuous
      </Badge>
      <Badge variant="secondary">
        <InfinityLoop className="h-3.5 w-5" />
        Live sync
      </Badge>
      <Badge variant="outline">
        <InfinityLoop className="h-3.5 w-5" />
        Monitoring
      </Badge>
    </div>
  );
}
