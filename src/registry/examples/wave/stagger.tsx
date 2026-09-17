import { Wave } from "@/registry/components/loading-ui/wave";

export function WaveStagger() {
  return (
    <div className="flex items-center gap-6">
      <Wave className="h-10 w-20 [--delay:60ms]" />
      <Wave className="h-10 w-20 [--delay:100ms]" />
      <Wave className="h-10 w-20 [--delay:160ms]" />
    </div>
  );
}
