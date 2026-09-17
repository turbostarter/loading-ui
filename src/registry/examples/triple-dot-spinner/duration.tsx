import { TripleDotSpinner } from "@/registry/components/loading-ui/triple-dot-spinner";

export function TripleDotSpinnerDuration() {
  return (
    <div className="flex items-center gap-8">
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5 [--duration:1.2s]" />
      </span>
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5 [--duration:2s]" />
      </span>
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5 [--duration:2.8s]" />
      </span>
    </div>
  );
}
