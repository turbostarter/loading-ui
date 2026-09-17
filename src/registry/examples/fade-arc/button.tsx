import { Button } from "@/components/ui/button";
import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export default function FadeArcButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <FadeArc className="size-4" data-icon="inline-start" />
        Saving changes
      </Button>
      <Button variant="outline" size="sm">
        <FadeArc className="size-4" data-icon="inline-start" />
        Uploading
      </Button>
      <Button variant="secondary" size="sm">
        <FadeArc className="size-4" data-icon="inline-start" />
        Preparing export
      </Button>
    </div>
  );
}
