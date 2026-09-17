import { FadeArc } from "@/registry/components/loading-ui/fade-arc";

export function FadeArcColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <FadeArc className="text-foreground" />
      <FadeArc className="text-[#2563eb]" />
      <FadeArc className="text-[#14b8a6]" />
      <FadeArc className="text-muted-foreground" />
    </div>
  );
}
