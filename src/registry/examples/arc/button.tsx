import { Button } from "@/components/ui/button";
import { Arc } from "@/registry/components/loading-ui/arc";

export default function ArcButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Arc className="size-4 border-[2px]" data-icon="inline-start" />
        Processing payment
      </Button>
      <Button variant="outline" size="sm">
        <Arc className="size-4 border-[2px]" data-icon="inline-start" />
        Refreshing feed
      </Button>
      <Button variant="secondary" size="sm">
        <Arc className="size-4 border-[2px]" data-icon="inline-start" />
        Creating report
      </Button>
    </div>
  );
}
