import { cn } from "@/lib/utils";

const SQUARE_SNAKE_BLOCKS = ["█", "▓", "▒", "░"] as const;

type SquareSnakeProps = React.ComponentProps<"span"> & {
  blocks?: readonly string[];
  size?: number;
};

function SquareSnake({
  className,
  blocks = SQUARE_SNAKE_BLOCKS,
  size = 5,
  style,
  ...props
}: SquareSnakeProps) {
  const cells = Math.max(2, Math.floor(size));
  const glyphs = SQUARE_SNAKE_BLOCKS.map(
    (_, index) => blocks[index] ?? SQUARE_SNAKE_BLOCKS[index],
  );

  return (
    <>
      <style>{`
        @keyframes loading-ui-square-snake {
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
        {glyphs.map((glyph, index) => (
          <span
            key={`${glyph}-${index}`}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center"
            style={{
              animation:
                "loading-ui-square-snake var(--duration, 2s) linear infinite",
              animationDelay: `calc(var(--delay, 0.125s) * -${glyphs.length - 1 - index})`,
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

export { SquareSnake };
