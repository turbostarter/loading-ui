import { Badge } from "@/components/ui/badge";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 [--radius:1.2rem]">
      <Badge className="h-7 gap-2 border-transparent bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 px-2.5 font-normal dark:from-violet-500/25 dark:to-fuchsia-500/25">
        <BobbingDots className="w-7 text-violet-600 dark:text-violet-400" />
        Play mode
      </Badge>
      <Badge variant="outline" className="h-7 gap-2 px-2.5 font-normal">
        <BobbingDots className="w-7" />
        Bouncy beta
      </Badge>
    </div>
  );
}
