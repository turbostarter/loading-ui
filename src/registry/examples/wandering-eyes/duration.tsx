import { WanderingEyes } from "@/registry/components/loading-ui/wandering-eyes";

export function WanderingEyesDuration() {
  return (
    <div className="flex flex-col items-center">
      <WanderingEyes className="h-20 w-[180px] [--duration:4s]" />
      <WanderingEyes className="h-20 w-[180px] [--duration:8s]" />
      <WanderingEyes className="h-20 w-[180px] [--duration:12s]" />
    </div>
  );
}
