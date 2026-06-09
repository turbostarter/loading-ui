import { InfinityTrack } from "@/registry/components/loading-ui/infinity-track";

export function InfinityTrackDuration() {
  return (
    <div className="flex flex-col items-center gap-5">
      <InfinityTrack className="[--duration:2.2s]" />
      <InfinityTrack className="[--duration:3.2s]" />
      <InfinityTrack className="[--duration:4.8s]" />
    </div>
  );
}
