import { Badge } from "@/components/ui/badge";
import { Spokes } from "@/registry/components/loading-ui/spokes";

export default function SpokesBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spokes className="size-3.5" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spokes className="size-3.5" />
        Indexing
      </Badge>
      <Badge variant="outline">
        <Spokes className="size-3.5" />
        Verifying
      </Badge>
    </div>
  );
}
