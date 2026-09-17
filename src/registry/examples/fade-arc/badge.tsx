import { Badge } from "@/components/ui/badge";
import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export default function FadeArcBadge() {
  return (
    <div className="flex items-center gap-4">
      <Badge>
        <FadeArc className="size-3.5" />
        Indexing
      </Badge>
      <Badge variant="secondary">
        <FadeArc className="size-3.5" />
        In progress
      </Badge>
      <Badge variant="outline">
        <FadeArc className="size-3.5" />
        Fetching
      </Badge>
    </div>
  );
}
