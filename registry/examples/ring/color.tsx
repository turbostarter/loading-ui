import { Ring } from "@/registry/components/loading-ui/ring";

export function RingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ring className="text-[#ef4444]" />
      <Ring className="text-[#3b82f6]" />
      <Ring className="text-[#22c55e]" />
    </div>
  );
}
