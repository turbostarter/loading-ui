import { Arc } from "@/registry/components/loading-ui/arc";

export function ArcDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Arc className="[--duration:700ms]" />
      <Arc className="[--duration:1s]" />
      <Arc className="[--duration:1.6s]" />
    </div>
  );
}
