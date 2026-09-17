import { cn } from "@/lib/utils";

const SQUARE_GRID_BLOCKS = ["█", "▓", "▒"] as const;

type SquareGridProps = React.ComponentProps<"span"> & {
  blocks?: readonly string[];
  size?: number;
  track?: string;
};

function SquareGrid({
  className,
  blocks = SQUARE_GRID_BLOCKS,
  size = 5,
  track = "░",
  style,
  ...props
}: SquareGridProps) {
  const cells = Math.max(2, Math.floor(size));
  const glyphs = SQUARE_GRID_BLOCKS.map(
    (_, index) => blocks[index] ?? SQUARE_GRID_BLOCKS[index],
  );
  const gridCells = Array.from({ length: cells * cells }, (_, index) => {
    const row = Math.floor(index / cells);
    const col = index % cells;

    return row === 0 || row === cells - 1 || col === 0 || col === cells - 1
      ? track
      : " ";
  });

  return (
    <>
      <style>{`
        @keyframes loading-ui-square-grid {
          0%,
          100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(var(--loader-x), 0);
          }

          50% {
            transform: translate(var(--loader-x), var(--loader-y));
          }

          75% {
            transform: translate(0, var(--loader-y));
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",
          className,
        )}
        style={
          {
            "--loader-size": `${cells}ch`,
            "--loader-x": `${cells - 1}ch`,
            "--loader-y": `${cells - 1}ch`,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${cells}, 1ch)`,
            gridTemplateRows: `repeat(${cells}, 1ch)`,
          }}
        >
          {gridCells.map((glyph, index) => (
            <span
              key={index}
              className="flex h-[1ch] w-[1ch] items-center justify-center"
            >
              {glyph}
            </span>
          ))}
        </span>
        {glyphs.map((glyph, index) => (
          <span
            key={`${glyph}-${index}`}
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",
              ["z-30", "z-20", "z-10"][index],
            )}
            style={{
              animation:
                "loading-ui-square-grid var(--duration, 2.8s) linear infinite",
              animationDelay: `calc(var(--delay, 0.06s) * ${index})`,
              backgroundColor: "var(--mask-color, var(--background))",
            }}
          >
            {glyph}
          </span>
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { SquareGrid };
