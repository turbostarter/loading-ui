import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export function CometSpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <CometSpinner className="size-6" />
      <CometSpinner className="size-8" />
      <CometSpinner className="size-10" />
      <CometSpinner className="size-12" />
    </div>
  );
}
