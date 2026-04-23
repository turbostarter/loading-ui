import { Badge } from "@/components/ui/badge";
import { DualArc } from "@/registry/components/loading-ui/dual-arc";

export default function DualArcBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <DualArc className="size-3.5 border-[2px]" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <DualArc className="size-3.5 border-[2px]" />
        Indexing
      </Badge>
      <Badge variant="outline">
        <DualArc className="size-3.5 border-[2px]" />
        Publishing
      </Badge>
    </div>
  );
}
