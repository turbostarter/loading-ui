import { Badge } from "@/components/ui/badge";
import { DiamondSpinner } from "@/registry/components/loading-ui/diamond-spinner";

export default function DiamondSpinnerBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <DiamondSpinner className="size-3.5" />
        Encoding
      </Badge>
      <Badge variant="secondary">
        <DiamondSpinner className="size-3.5" />
        Queued
      </Badge>
      <Badge variant="outline">
        <DiamondSpinner className="size-3.5" />
        Processing
      </Badge>
    </div>
  );
}
