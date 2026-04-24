import { Badge } from "@/components/ui/badge";
import { TripleDotSpinner } from "@/registry/components/loading-ui/triple-dot-spinner";

export default function TripleDotSpinnerBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <span className="grid size-4 place-items-center">
          <TripleDotSpinner className="size-1" />
        </span>
        Saving
      </Badge>
      <Badge variant="secondary">
        <span className="grid size-4 place-items-center">
          <TripleDotSpinner className="size-1" />
        </span>
        Checking
      </Badge>
      <Badge variant="outline">
        <span className="grid size-4 place-items-center">
          <TripleDotSpinner className="size-1" />
        </span>
        Updating
      </Badge>
    </div>
  );
}
