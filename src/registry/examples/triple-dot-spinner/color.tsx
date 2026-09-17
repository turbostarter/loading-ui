import { TripleDotSpinner } from "@/registry/components/loading-ui/triple-dot-spinner";

export function TripleDotSpinnerColor() {
  return (
    <div className="flex items-center gap-8">
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5 text-[#2563eb]" />
      </span>
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5 text-[#16a34a]" />
      </span>
      <span className="grid size-10 place-items-center">
        <TripleDotSpinner className="size-2.5 text-[#e11d48]" />
      </span>
    </div>
  );
}
