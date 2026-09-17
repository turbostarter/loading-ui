import { Badge } from "@/components/ui/badge";
import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export default function BouncingDotsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge variant="secondary" className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <BouncingDots className="w-7" />
        Spring load
      </Badge>
      <Badge variant="outline" className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <BouncingDots className="w-7" />
        Retry wave
      </Badge>
      <Badge className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <BouncingDots className="w-7" />
        Live queue
      </Badge>
    </div>
  );
}
