import { Ripple } from "@/registry/components/loading-ui/ripple";

export function RippleRingWeight() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ripple className="[&_g]:stroke-[1.25]" />
      <Ripple className="[&_g]:stroke-[2]" />
      <Ripple className="[&_g]:stroke-[2.75]" />
    </div>
  );
}
