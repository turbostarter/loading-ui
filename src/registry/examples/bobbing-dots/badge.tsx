import { Badge } from "@/components/ui/badge";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge variant="secondary" className="h-7 gap-2 px-2.5 font-normal">
        <BobbingDots className="-mt-4 w-6" />
        Play mode
      </Badge>
      <Badge variant="outline" className="h-7 gap-2 px-2.5 font-normal">
        <BobbingDots className="-mt-4 w-6" />
        Bouncy beta
      </Badge>
    </div>
  );
}
