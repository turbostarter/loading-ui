import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export function CometSpinnerColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <CometSpinner className="text-[#4f46e5]" />
      <CometSpinner className="text-[#db2777]" />
      <CometSpinner className="text-[#d97706]" />
    </div>
  );
}
