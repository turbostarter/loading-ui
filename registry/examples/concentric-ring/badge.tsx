import { Badge } from "@/components/ui/badge";
import { ConcentricRing } from "@/registry/components/loading-ui/concentric-ring";

export default function ConcentricRingBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <ConcentricRing className="size-3.5" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <ConcentricRing className="size-3.5" />
        Indexing
      </Badge>
      <Badge variant="outline">
        <ConcentricRing className="size-3.5" />
        Validating
      </Badge>
    </div>
  );
}
