import { Ring } from "@/registry/components/loading-ui/ring";

export function RingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ring className="[--duration:500ms]" />
      <Ring className="[--duration:1s]" />
      <Ring className="[--duration:2s]" />
    </div>
  );
}
