import { ConveyorLoop } from "@/registry/components/loading-ui/conveyor-loop";

export function ConveyorLoopGlyphs() {
  return (
    <div className="flex flex-col items-center gap-5">
      <ConveyorLoop blocks={["█", "▓", "▒"]} track="░" />
      <ConveyorLoop blocks={["●", "◐", "○"]} track="·" />
      <div className="bg-muted rounded p-4 [--mask-color:var(--muted)]">
        <ConveyorLoop blocks={["■", "▪", "▫"]} track="·" />
      </div>
    </div>
  );
}
