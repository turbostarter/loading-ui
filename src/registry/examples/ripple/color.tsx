import { Ripple } from "@/registry/components/loading-ui/ripple";

export function RippleColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ripple className="text-[#0ea5e9]" />
      <Ripple className="text-[#a855f7]" />
      <Ripple className="text-[#f97316]" />
    </div>
  );
}
