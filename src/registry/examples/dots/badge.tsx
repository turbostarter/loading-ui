import { Badge } from "@/components/ui/badge";
import { Dots } from "@/registry/components/loading-ui/dots";

export default function DotsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge variant="secondary" className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <Dots className="w-7" />
        Typing
      </Badge>
      <Badge variant="outline" className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <Dots className="w-7" />
        AI drafting
      </Badge>
      <Badge className="gap-2 py-1 pr-2.5 pl-2 font-normal">
        <Dots className="w-7" />
        Live edit
      </Badge>
    </div>
  );
}
