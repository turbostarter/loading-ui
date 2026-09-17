import { Dots } from "@/registry/components/loading-ui/dots";

export function DotsDuration() {
  return (
    <div className="flex flex-col items-center gap-7">
      <Dots className="w-16 [--duration:900ms]" />
      <Dots className="w-16 [--duration:1.4s]" />
      <Dots className="w-16 [--duration:2s]" />
    </div>
  );
}
