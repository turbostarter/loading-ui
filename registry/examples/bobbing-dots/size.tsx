import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export function BobbingDotsSize() {
  return (
    <div className="flex items-end gap-8 text-muted-foreground">
      <BobbingDots className="w-10" />
      <BobbingDots className="w-14" />
      <BobbingDots className="w-20" />
      <BobbingDots className="w-28" />
    </div>
  );
}
