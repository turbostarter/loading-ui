import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export function OrbitRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <OrbitRing className="text-[#2563eb]" />
      <OrbitRing className="text-[#8b5cf6]" />
      <OrbitRing className="text-[#f97316]" />
    </div>
  );
}
