import { SquareGrid } from "@/registry/components/loading-ui/square-grid";

export function SquareGridGlyphs() {
  return (
    <div className="flex items-center gap-8">
      <SquareGrid />
      <SquareGrid blocks={["●", "◐", "○"]} track="·" />
      <div className="bg-muted rounded p-4 [--mask-color:var(--muted)]">
        <SquareGrid blocks={["■", "▪", "▫"]} track="·" />
      </div>
    </div>
  );
}
