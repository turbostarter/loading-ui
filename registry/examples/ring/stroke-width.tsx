import { Ring } from "@/registry/components/loading-ui/ring";

export function RingStrokeWidth() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ring className="[&_path]:[stroke-width:1.25]" />
      <Ring className="[&_path]:[stroke-width:2]" />
      <Ring className="[&_path]:[stroke-width:3]" />
    </div>
  );
}
