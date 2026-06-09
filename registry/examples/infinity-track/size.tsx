import { InfinityTrack } from "@/registry/components/loading-ui/infinity-track";

export function InfinityTrackSize() {
  return (
    <div className="flex flex-col items-center gap-6">
      <InfinityTrack className="text-base" />
      <InfinityTrack className="text-xl" />
      <InfinityTrack className="text-3xl" />
    </div>
  );
}
