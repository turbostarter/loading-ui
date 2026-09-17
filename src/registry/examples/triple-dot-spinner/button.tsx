import { Button } from "@/components/ui/button";
import { TripleDotSpinner } from "@/registry/components/loading-ui/triple-dot-spinner";

export default function TripleDotSpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <span
          data-icon="inline-start"
          className="grid size-5 place-items-center"
        >
          <TripleDotSpinner className="size-1" />
        </span>
        Saving changes
      </Button>
      <Button variant="outline" size="sm">
        <span
          data-icon="inline-start"
          className="grid size-5 place-items-center"
        >
          <TripleDotSpinner className="size-1" />
        </span>
        Checking status
      </Button>
      <Button variant="secondary" size="sm">
        <span
          data-icon="inline-start"
          className="grid size-5 place-items-center"
        >
          <TripleDotSpinner className="size-1" />
        </span>
        Updating list
      </Button>
    </div>
  );
}
