import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export function FadeArcDirection() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <FadeArc className="direction-[normal]" />
      <FadeArc className="direction-[reverse]" />
    </div>
  );
}
