import { Badge } from "@/components/ui/badge";
import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export default function PulseDotBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge variant="secondary" className="gap-1.5 font-normal">
        <PulseDot className="size-2" />
        In chat
      </Badge>
      <Badge variant="outline" className="gap-1.5 font-normal">
        <PulseDot className="size-2" />
        Model active
      </Badge>
      <Badge className="gap-1.5 font-normal">
        <PulseDot className="size-2" />
        Live thread
      </Badge>
    </div>
  );
}
