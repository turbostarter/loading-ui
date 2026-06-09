import { cn } from "@/lib/utils";

const INFINITY_SQUARE_SNAKE_BLOCKS = ["█", "▓", "▒", "░"] as const;

type InfinitySquareSnakeProps = React.ComponentProps<"span"> & {
  blocks?: readonly string[];
};

function InfinitySquareSnake({
  className,
  blocks = INFINITY_SQUARE_SNAKE_BLOCKS,
  ...props
}: InfinitySquareSnakeProps) {
  const glyphs = INFINITY_SQUARE_SNAKE_BLOCKS.map(
    (_, index) => blocks[index] ?? INFINITY_SQUARE_SNAKE_BLOCKS[index],
  );

  return (
    <>
      <style>{`
        @keyframes loading-ui-infinity-square-snake {
          0%,
          100% {
            transform: translate(4ch, 0);
          }

          12.5% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(0, 4ch);
          }

          37.5% {
            transform: translate(4ch, 4ch);
          }

          50% {
            transform: translate(4ch, 0);
          }

          62.5% {
            transform: translate(8ch, 0);
          }

          75% {
            transform: translate(8ch, 4ch);
          }

          87.5% {
            transform: translate(4ch, 4ch);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",
          className,
        )}
        {...props}
      >
        {glyphs.map((glyph, index) => (
          <span
            key={`${glyph}-${index}`}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center"
            style={{
              animation:
                "loading-ui-infinity-square-snake var(--duration, 3.2s) linear infinite",
              animationDelay: `calc(var(--delay, 0.1s) * -${glyphs.length - 1 - index})`,
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

export { InfinitySquareSnake };
