import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export function BobbingDotsDuration() {
  return (
    <div className="flex items-end gap-8 text-primary *:w-16">
      <BobbingDots duration={0.65} />
      <BobbingDots duration={1} />
      <BobbingDots duration={1.45} />
    </div>
  );
}
