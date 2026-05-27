import { MorphingInfinity } from "@/registry/components/loading-ui/morphing-infinity";

export default function MorphingInfinityCompact() {
  return (
    <div className="flex flex-col items-center gap-3">
      <MorphingInfinity className="px-2 py-1" />
      <MorphingInfinity className="bg-card rounded-md border px-2 py-1" />
    </div>
  );
}
