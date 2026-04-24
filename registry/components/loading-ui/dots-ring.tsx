import { cn } from "@/lib/utils";

type DotsRingProps = React.ComponentProps<"span"> & {
  dots?: number;
  dotScale?: number;
  radiusScale?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function DotsRing({
  className,
  style,
  dots = 8,
  dotScale = 0.16,
  radiusScale = 0.34,
  ...props
}: DotsRingProps) {
  const dotCount = Math.max(4, Math.floor(dots));
  const safeDotScale = clamp(dotScale, 0.2, 0.4);
  const safeRadiusScale = clamp(radiusScale, 0, 0.5 - safeDotScale / 2);

  return (
    <>
      <style>{`
        @keyframes loading-ui-dots-ring-pulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.65);
          }

          12.5% {
            opacity: 1;
            transform: scale(1);
          }

          25% {
            opacity: 0.75;
            transform: scale(0.85);
          }

          50% {
            opacity: 0.35;
            transform: scale(0.7);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "@container-[size] relative inline-flex aspect-square items-center justify-center",
          className,
        )}
        style={style}
        {...props}
      >
        <span aria-hidden="true" className="relative block size-full">
          {Array.from({ length: dotCount }, (_, index) => {
            const angle = (index / dotCount) * Math.PI * 2;
            const x = `${(Math.sin(angle) * safeRadiusScale * 100).toFixed(2)}cqmin`;
            const y = `${(-Math.cos(angle) * safeRadiusScale * 100).toFixed(2)}cqmin`;

            return (
              <span
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: `calc(${safeDotScale} * 100cqmin)`,
                  height: `calc(${safeDotScale} * 100cqmin)`,
                  transform: `translate(-50%, -50%) translate(${x}, ${y})`,
                }}
              >
                <span
                  className="block size-full rounded-full bg-current"
                  style={{
                    animation:
                      "loading-ui-dots-ring-pulse var(--duration, 1s) linear infinite",
                    animationDelay: `calc(var(--duration, 1s) / ${dotCount} * ${index - dotCount})`,
                  }}
                />
              </span>
            );
          })}
        </span>
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { DotsRing };
