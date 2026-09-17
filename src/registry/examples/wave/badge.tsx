import { Badge } from "@/components/ui/badge";
import { Wave } from "@/registry/components/loading-ui/wave";

export default function WaveBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <Wave className="h-3.5 w-7 shrink-0" />
        Live
      </Badge>
      <Badge variant="secondary">
        <Wave className="h-3.5 w-7 shrink-0" />
        Listening
      </Badge>
      <Badge variant="outline">
        <Wave className="h-3.5 w-7 shrink-0" />
        Mixing
      </Badge>
    </div>
  );
}
