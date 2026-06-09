import { InfinityTrack } from "@/registry/components/loading-ui/infinity-track";

export function InfinityTrackColor() {
  return (
    <div className="flex flex-col items-center gap-5">
      <InfinityTrack className="text-[#2563eb]" />
      <InfinityTrack className="text-[#16a34a]" />
      <InfinityTrack className="text-[#e11d48]" />
    </div>
  );
}
