import { Badge } from "@/components/ui/badge";
import { Ring } from "@/registry/components/loading-ui/ring";

export default function RingBadge() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Ring className="size-3.5" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Ring className="size-3.5" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Ring className="size-3.5" />
        Processing
      </Badge>
    </div>
  );
}
