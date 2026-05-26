import { DiamondSpinner } from "@/registry/components/loading-ui/diamond-spinner";

export function DiamondSpinnerSize() {
  return (
    <div className="flex items-center gap-8">
      <DiamondSpinner className="size-6" />
      <DiamondSpinner className="size-8" />
      <DiamondSpinner className="size-10" />
    </div>
  );
}
