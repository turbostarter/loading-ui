import { cn } from "@/lib/utils";

const CONVEYOR_LOOP_BLOCKS = ["█", "▓", "▒"] as const;

type ConveyorLoopProps = React.ComponentProps<"span"> & {
  blocks?: readonly string[];
  track?: string;
  trackLength?: number;
};

function ConveyorLoop({
  className,
  blocks = CONVEYOR_LOOP_BLOCKS,
  track = "░",
  trackLength = 10,
  style,
  ...props
}: ConveyorLoopProps) {
  const columns = Math.max(2, Math.floor(trackLength));
  const glyphs = CONVEYOR_LOOP_BLOCKS.map(
    (_, index) => blocks[index] ?? CONVEYOR_LOOP_BLOCKS[index],
  );
  const tailOffset = glyphs.length - 1;

  return (
    <>
      <style>{`
        @keyframes loading-ui-conveyor-loop {
          0% {
            transform: translateX(var(--loader-start-x));
          }

          100% {
            transform: translateX(var(--loader-end-x));
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",
          className,
        )}
        style={
          {
            "--loader-width": `${columns}ch`,
            "--loader-start-x": `-${tailOffset}ch`,
            "--loader-end-x": `${columns + tailOffset}ch`,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 whitespace-nowrap"
        >
          {track.repeat(columns)}
        </span>
        {glyphs.map((glyph, index) => (
          <span
            key={`${glyph}-${index}`}
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",
              ["z-30", "z-20", "z-10"][index],
            )}
            style={{
              animation:
                "loading-ui-conveyor-loop var(--duration, 1.8s) linear infinite",
              animationDelay: `calc(var(--delay, 0.05s) * ${index})`,
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

export { ConveyorLoop };
