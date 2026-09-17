import { Arc } from "@/registry/components/loading-ui/arc";

export function ArcColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Arc className="text-[#2563eb]" />
      <Arc className="text-[#8b5cf6]" />
      <Arc className="text-[#f97316]" />
    </div>
  );
}
