import { BouncingDots } from "@/registry/components/loading-ui/bouncing-dots";

export function BouncingDotsDuration() {
  return (
    <div className="flex items-end gap-8 *:w-16">
      <BouncingDots className="[--duration:1s]" />
      <BouncingDots className="[--duration:1.4s]" />
      <BouncingDots className="[--duration:2s]" />
    </div>
  );
}
