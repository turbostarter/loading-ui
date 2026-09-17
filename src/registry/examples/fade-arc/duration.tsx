import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export function FadeArcDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <FadeArc className="[--duration:500ms]" />
      <FadeArc className="[--duration:1s]" />
      <FadeArc className="[--duration:2s]" />
    </div>
  );
}
