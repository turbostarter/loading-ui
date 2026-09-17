import { Wave } from "@/registry/components/loading-ui/wave";

export function WaveSize() {
  return (
    <div className="flex items-end gap-6">
      <Wave className="h-6 w-12" />
      <Wave className="h-10 w-20" />
      <Wave className="h-14 w-28" />
    </div>
  );
}
