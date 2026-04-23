import { Button } from "@/components/ui/button";
import { DashRing } from "@/registry/components/loading-ui/dash-ring";

export default function DashRingButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <DashRing className="size-4" data-icon="inline-start" />
        Morphing layout
      </Button>
      <Button variant="outline" size="sm">
        <DashRing className="size-4" data-icon="inline-start" />
        Blending streams
      </Button>
      <Button variant="secondary" size="sm">
        <DashRing className="size-4" data-icon="inline-start" />
        Churning tokens
      </Button>
    </div>
  );
}
