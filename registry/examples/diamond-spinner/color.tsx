import { DiamondSpinner } from "@/registry/components/loading-ui/diamond-spinner";

export function DiamondSpinnerColor() {
  return (
    <div className="flex items-center gap-8">
      <DiamondSpinner className="size-8 text-[#2563eb]" />
      <DiamondSpinner className="size-8 text-[#16a34a]" />
      <DiamondSpinner className="size-8 text-[#e11d48]" />
    </div>
  );
}
