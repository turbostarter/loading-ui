import { Swirling } from "@/registry/components/loading-ui/swirling";

export function SwirlingLineCap() {
  return (
    <div className="flex items-center gap-6 *:size-16">
      <Swirling className="[&_circle]:[stroke-linecap:butt]" />
      <Swirling className="[&_circle]:[stroke-linecap:round]" />
      <Swirling className="[&_circle]:[stroke-linecap:square]" />
    </div>
  );
}
