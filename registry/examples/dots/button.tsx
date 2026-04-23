import { Button } from "@/components/ui/button";
import { Dots } from "@/registry/components/loading-ui/dots";

export default function DotsButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <Dots className="w-10 mx-1" data-icon="inline-start" />
        Posting comment
      </Button>
      <Button variant="outline" size="sm">
        <Dots className="w-10 mx-1" data-icon="inline-start" />
        Saving draft
      </Button>
      <Button variant="secondary" size="sm">
        <Dots className="w-9 mx-1" data-icon="inline-start" />
        Syncing mentions
      </Button>
    </div>
  );
}
