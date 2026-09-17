import { Button } from "@/components/ui/button";
import { Classic } from "@/registry/components/loading-ui/classic";

export default function ClassicButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Classic className="size-4" data-icon="inline-start" />
        Saving profile
      </Button>
      <Button variant="outline" size="sm">
        <Classic className="size-4" data-icon="inline-start" />
        Checking status
      </Button>
      <Button variant="secondary" size="sm">
        <Classic className="size-4" data-icon="inline-start" />
        Publishing draft
      </Button>
    </div>
  );
}
