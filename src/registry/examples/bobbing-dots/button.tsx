import { Button } from "@/components/ui/button";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm" className="gap-2">
        <BobbingDots className="-mt-4 w-6" />
        <span>Mixing audio</span>
      </Button>
      <Button variant="outline" size="sm" className="gap-2">
        <BobbingDots className="-mt-4 w-6" />
        <span>Bouncy deploy</span>
      </Button>
      <Button variant="secondary" size="sm" className="gap-2">
        <BobbingDots className="-mt-4 w-6" />
        <span>Playful save</span>
      </Button>
    </div>
  );
}
