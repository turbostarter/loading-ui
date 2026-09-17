import { Wave } from "@/registry/components/loading-ui/wave";

export function WaveColor() {
  return (
    <div className="flex items-center gap-6">
      <Wave className="h-10 w-20 text-[#2563eb]" />
      <Wave className="h-10 w-20 text-[#16a34a]" />
      <Wave className="h-10 w-20 text-[#e11d48]" />
    </div>
  );
}
