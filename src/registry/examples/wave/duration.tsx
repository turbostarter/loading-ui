import { Wave } from "@/registry/components/loading-ui/wave";

export function WaveDuration() {
  return (
    <div className="flex items-center gap-6">
      <Wave className="h-10 w-20 [--duration:700ms]" />
      <Wave className="h-10 w-20 [--duration:1s]" />
      <Wave className="h-10 w-20 [--duration:1.6s]" />
    </div>
  );
}
