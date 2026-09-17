import { Ring } from "@/registry/components/loading-ui/ring";

export function RingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ring className="text-[#2563eb]" />
      <Ring className="text-[#14b8a6]" />
      <Ring className="text-[#f97316]" />
    </div>
  );
}
