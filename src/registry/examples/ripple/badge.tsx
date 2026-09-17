import { Badge } from "@/components/ui/badge";
import { Ripple } from "@/registry/components/loading-ui/ripple";

export default function RippleBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Ripple className="size-3.5" />
        Sonar
      </Badge>
      <Badge variant="secondary">
        <Ripple className="size-3.5" />
        Radar ping
      </Badge>
      <Badge variant="outline">
        <Ripple className="size-3.5" />
        Wake scan
      </Badge>
    </div>
  );
}
