import { Spokes } from "@/registry/components/loading-ui/spokes";

export function SpokesDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Spokes className="animation-duration-[600ms]" />
      <Spokes className="animation-duration-[1s]" />
      <Spokes className="animation-duration-[1.6s]" />
    </div>
  );
}
