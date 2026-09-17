import { Badge } from "@/components/ui/badge";
import { Arc } from "@/registry/components/loading-ui/arc";

export default function ArcBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Arc className="size-3.5 border-[2px]" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Arc className="size-3.5 border-[2px]" />
        Refreshing
      </Badge>
      <Badge variant="outline">
        <Arc className="size-3.5 border-[2px]" />
        Uploading
      </Badge>
    </div>
  );
}
