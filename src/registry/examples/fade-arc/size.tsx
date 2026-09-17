import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export function FadeArcSize() {
  return (
    <div className="flex items-center gap-6">
      <FadeArc className="size-6" />
      <FadeArc className="size-8" />
      <FadeArc className="size-10" />
      <FadeArc className="size-12" />
    </div>
  );
}
