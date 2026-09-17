import { Button } from "@/components/ui/button";
import { Ring } from "@/registry/components/loading-ui/ring";

export default function RingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Ring className="size-4" data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" size="sm">
        <Ring className="size-4" data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="secondary" size="sm">
        <Ring className="size-4" data-icon="inline-start" />
        Processing
      </Button>
    </div>
  );
}
