import { cn } from "@/lib/utils";

function WanderingEyes({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-wandering-eyes-move {
          0%,
          10% {
            background-position: 0 0;
          }

          13%,
          40% {
            background-position: -0.9375em 0;
          }

          43%,
          70% {
            background-position: 0.9375em 0;
          }

          73%,
          90% {
            background-position: 0 0.9375em;
          }

          93%,
          100% {
            background-position: 0 0;
          }
        }

        @keyframes loading-ui-wandering-eyes-blink {
          0%,
          10%,
          12%,
          20%,
          22%,
          40%,
          42%,
          60%,
          62%,
          70%,
          72%,
          90%,
          92%,
          98%,
          100% {
            height: 3em;
          }

          11%,
          21%,
          41%,
          61%,
          71%,
          91%,
          99% {
            height: 1.125em;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "inline-flex w-[6.75em] items-center justify-between [--eye-color:currentColor] [--pupil-color:color-mix(in_srgb,currentColor_20%,black)]",
          className,
        )}
        {...props}
      >
        {Array.from({ length: 2 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block w-[3em] rounded-full"
            style={{
              height: "3em",
              backgroundColor: "var(--eye-color)",
              backgroundImage:
                "radial-gradient(circle 0.875em, var(--pupil-color) 100%, transparent 0)",
              backgroundRepeat: "no-repeat",
              animation:
                "loading-ui-wandering-eyes-move 10s infinite, loading-ui-wandering-eyes-blink 10s infinite",
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { WanderingEyes };
