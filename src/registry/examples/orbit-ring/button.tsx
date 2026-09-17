import { Button } from "@/components/ui/button";
import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export default function OrbitRingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <OrbitRing className="size-4" data-icon="inline-start" />
        Generating summary
      </Button>
      <Button variant="outline" size="sm">
        <OrbitRing className="size-4" data-icon="inline-start" />
        Fetching context
      </Button>
      <Button variant="secondary" size="sm">
        <OrbitRing className="size-4" data-icon="inline-start" />
        Preparing preview
      </Button>
    </div>
  );
}
