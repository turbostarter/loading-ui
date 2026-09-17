import { Spokes } from "@/registry/components/loading-ui/spokes";

export function SpokesColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Spokes className="text-[#2563eb]" />
      <Spokes className="text-[#14b8a6]" />
      <Spokes className="text-[#f97316]" />
    </div>
  );
}
