import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export function BobbingDotsColor() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-end gap-10 *:w-16">
        <BobbingDots className="text-primary" />
        <BobbingDots className="text-muted-foreground" />
        <BobbingDots className="text-chart-2" />
      </div>
      <div className="flex items-end gap-10 *:w-16">
        <BobbingDots className="text-[#22c55e]" />
        <BobbingDots className="text-[#e11d48]" />
        <BobbingDots className="text-[#7c3aed]" />
      </div>
    </div>
  );
}
