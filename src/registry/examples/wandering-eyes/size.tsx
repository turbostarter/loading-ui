import { WanderingEyes } from "@/registry/components/loading-ui/wandering-eyes";

export function WanderingEyesSize() {
  return (
    <div className="flex flex-col items-center">
      <WanderingEyes className="h-12 w-[108px]" />
      <WanderingEyes className="h-16 w-[144px]" />
      <WanderingEyes className="h-24 w-[216px]" />
    </div>
  );
}
