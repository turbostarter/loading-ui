import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export function BobbingDotsCount() {
  return (
    <div className="flex items-end gap-10 text-muted-foreground *:w-20">
      <BobbingDots dots={3} />
      <BobbingDots dots={4} />
      <BobbingDots dots={5} />
    </div>
  );
}
