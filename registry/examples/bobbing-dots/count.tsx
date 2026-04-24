import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export function BobbingDotsCount() {
  return (
    <div className="flex flex-col items-center gap-10 *:w-20">
      <BobbingDots dots={3} />
      <BobbingDots dots={4} />
      <BobbingDots dots={5} />
    </div>
  );
}
