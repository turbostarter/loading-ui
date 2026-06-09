import { InfinityTrack } from "@/registry/components/loading-ui/infinity-track";

export function InfinityTrackGlyphs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <InfinityTrack />
      <InfinityTrack blocks={["●", "◐", "○"]} track="·" />
      <div className="bg-muted rounded p-4 [--mask-color:var(--muted)]">
        <InfinityTrack blocks={["■", "▪", "▫"]} track="·" />
      </div>
    </div>
  );
}
