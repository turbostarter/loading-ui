import { Spokes } from "@/registry/components/loading-ui/spokes";

export function SpokesStrokeWidth() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Spokes className="*:stroke-[1.5]" />
      <Spokes className="*:stroke-2" />
      <Spokes className="*:stroke-3" />
    </div>
  );
}
