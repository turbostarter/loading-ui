import { Button } from "@/components/ui/button";
import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export default function CometSpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button size="sm">
        <CometSpinner className="m-1 size-2.5" data-icon="inline-start" />
        Hyperdrive ingest
      </Button>
      <Button variant="outline" size="sm">
        <CometSpinner className="m-1 size-2.5" data-icon="inline-start" />
        Compressing orbit
      </Button>
      <Button variant="secondary" size="sm">
        <CometSpinner className="m-1 size-2.5" data-icon="inline-start" />
        Flaring export
      </Button>
    </div>
  );
}
