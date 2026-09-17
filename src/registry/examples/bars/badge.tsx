import { Badge } from "@/components/ui/badge";
import { Bars } from "@/registry/components/loading-ui/bars";

export default function BarsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <Bars className="h-3.5 w-4 shrink-0" />
        Active
      </Badge>
      <Badge variant="secondary">
        <Bars className="h-3.5 w-4 shrink-0" />
        Indexing
      </Badge>
      <Badge variant="outline">
        <Bars className="h-3.5 w-6 shrink-0" bars={5} />
        Queued
      </Badge>
    </div>
  );
}
