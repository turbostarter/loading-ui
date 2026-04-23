import { OrbitRing } from "@/registry/components/loading-ui/orbit-ring";

export function OrbitRingSize() {
  return (
    <div className="flex items-center gap-6">
      <OrbitRing className="size-6" />
      <OrbitRing className="size-8" />
      <OrbitRing className="size-10" />
      <OrbitRing className="size-12" />
    </div>
  );
}
