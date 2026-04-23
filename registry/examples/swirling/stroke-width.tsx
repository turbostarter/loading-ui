import { Swirling } from "@/registry/components/loading-ui/swirling";

export function SwirlingStrokeWidth() {
  return (
    <div className="flex items-center gap-6 *:size-16">
      <Swirling className="[&_circle]:[stroke-width:28]" />
      <Swirling className="[&_circle]:[stroke-width:50]" />
      <Swirling className="[&_circle]:[stroke-width:76]" />
    </div>
  );
}
