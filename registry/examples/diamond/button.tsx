import { Button } from "@/components/ui/button";
import { Diamond } from "@/registry/components/loading-ui/diamond";

export default function DiamondButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <span
          data-icon="inline-start"
          className="grid size-5 place-items-center"
        >
          <Diamond className="size-4" />
        </span>
        Syncing data
      </Button>
      <Button variant="outline" size="sm">
        <span
          data-icon="inline-start"
          className="grid size-5 place-items-center"
        >
          <Diamond className="size-4" />
        </span>
        Rendering preview
      </Button>
      <Button variant="secondary" size="sm">
        <span
          data-icon="inline-start"
          className="grid size-5 place-items-center"
        >
          <Diamond className="size-4" />
        </span>
        Loading assets
      </Button>
    </div>
  );
}
