import { Ring } from "@/registry/components/loading-ui/ring";

export function RingDirection() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ring className="direction-[normal]" />
      <Ring className="direction-[reverse]" />
    </div>
  );
}
