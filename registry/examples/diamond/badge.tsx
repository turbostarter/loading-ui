import { Badge } from "@/components/ui/badge";
import { Diamond } from "@/registry/components/loading-ui/diamond";

export default function DiamondBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <Diamond className="size-3.5" />
        Encoding
      </Badge>
      <Badge variant="secondary">
        <Diamond className="size-3.5" />
        Queued
      </Badge>
      <Badge variant="outline">
        <Diamond className="size-3.5" />
        Processing
      </Badge>
    </div>
  );
}
