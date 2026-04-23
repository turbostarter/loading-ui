import { Badge } from "@/components/ui/badge";
import { DotsRing } from "@/registry/components/loading-ui/dots-ring";

export default function DotsRingBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <DotsRing className="size-3.5" dots={6} dotScale={0.3} />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <DotsRing className="size-3.5" dots={8} dotScale={0.28} />
        Checking
      </Badge>
      <Badge variant="outline">
        <DotsRing className="size-3.5" dots={10} dotScale={0.24} />
        Publishing
      </Badge>
    </div>
  );
}
