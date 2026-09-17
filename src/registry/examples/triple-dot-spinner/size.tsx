import { TripleDotSpinner } from "@/registry/components/loading-ui/triple-dot-spinner";

export function TripleDotSpinnerSize() {
  return (
    <div className="flex items-center gap-8">
      <span className="grid size-8 place-items-center">
        <TripleDotSpinner className="size-1.5" />
      </span>
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5" />
      </span>
      <span className="grid size-12 place-items-center">
        <TripleDotSpinner className="size-3.5" />
      </span>
    </div>
  );
}
