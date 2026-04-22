import { cn } from "@/lib/utils";

const ANIMATION = "loading-ui-shadow-spinner";
const DURATION = "1.1s";

/** Radius in `em`; shadows are placed on a regular octagon (45° steps). */
const R = 2.5;

const SHADOW = {
  full: "currentColor",
  hi: "color-mix(in srgb, currentColor 70%, transparent)",
  mid: "color-mix(in srgb, currentColor 50%, transparent)",
  lo: "color-mix(in srgb, currentColor 20%, transparent)",
} as const;

const DOT_OFFSETS = Array.from({ length: 8 }, (_, i) => {
  const angle = (i * Math.PI) / 4;
  const x = (R * Math.sin(angle)).toFixed(2);
  const y = (-R * Math.cos(angle)).toFixed(2);
  return `${x}em ${y}em`;
});

function shadeForDot(step: number, dotIndex: number): string {
  const d = (dotIndex - step + 32) % 8;
  if (d === 0) {
    return SHADOW.full;
  }
  if (d === 7) {
    return SHADOW.hi;
  }
  if (d === 6) {
    return SHADOW.mid;
  }
  return SHADOW.lo;
}

function boxShadowAtStep(step: number): string {
  return DOT_OFFSETS.map(
    (offset, i) => `0em ${offset} 0em 0em ${shadeForDot(step, i)}`,
  ).join(",\n              ");
}

function keyframesBlock(): string {
  const middle = Array.from({ length: 7 }, (_, i) => {
    const step = i + 1;
    const pct = step * 12.5;
    return `
          ${pct}% {
            box-shadow:
              ${boxShadowAtStep(step)};
          }`;
  }).join("");

  return `
        @keyframes ${ANIMATION} {
          0%,
          100% {
            box-shadow:
              ${boxShadowAtStep(0)};
          }${middle}
        }`;
}

function ShadowSpinner({
  className,
  style,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <>
      <style>{keyframesBlock()}</style>
      <span
        role="status"
        className={cn(
          "inline-flex aspect-square items-center justify-center @container-[size]",
          className,
        )}
        style={style}
        {...props}
      >
        <span
          aria-hidden
          className="rounded-full"
          style={{
            fontSize: "min(calc(100cqmin / 6), 4rem)",
            width: "1em",
            height: "1em",
            animation: `${ANIMATION} ${DURATION} infinite ease`,
            transform: "translateZ(0)",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { ShadowSpinner };
