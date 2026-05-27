import { MorphingInfinity } from "@/registry/components/loading-ui/morphing-infinity";

export default function MorphingInfinityCompact() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="text-muted-foreground flex items-center gap-2">
        <MorphingInfinity className="size-6 shrink-0" />
        <span>Thinking</span>
      </div>
      <div className="bg-card text-muted-foreground flex items-center gap-2 rounded-md border px-3 py-2">
        <MorphingInfinity className="size-6 shrink-0" />
        <span>Planning next steps</span>
      </div>
    </div>
  );
}
