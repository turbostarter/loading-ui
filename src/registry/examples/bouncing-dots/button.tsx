import { Button } from "@/components/ui/button";
import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export default function BouncingDotsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm" variant="outline" className="gap-2">
        <BouncingDots className="w-9" />
        <span>Elastic fetch</span>
      </Button>
      <Button size="sm" className="gap-2">
        <BouncingDots className="w-9" />
        <span>Warm-up job</span>
      </Button>
      <Button size="sm" variant="secondary" className="gap-2">
        <BouncingDots className="w-8" />
        <span>Bouncy save</span>
      </Button>
    </div>
  );
}
