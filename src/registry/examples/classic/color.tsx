import { Classic } from "@/registry/components/loading-ui/classic";

export function ClassicColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Classic className="text-[#2563eb]" />
      <Classic className="text-[#14b8a6]" />
      <Classic className="text-[#f97316]" />
    </div>
  );
}
