import { Ripple } from "@/registry/components/loading-ui/ripple";

export function RippleSize() {
  return (
    <div className="flex items-center gap-6">
      <Ripple className="size-8" />
      <Ripple className="size-10" />
      <Ripple className="size-12" />
      <Ripple className="size-14" />
    </div>
  );
}
