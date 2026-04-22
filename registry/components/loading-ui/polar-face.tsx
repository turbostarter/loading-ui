import { cn } from "@/lib/utils";

function PolarFace({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-polar-face-shift {
          0% {
            transform: translateX(-60%);
          }

          100% {
            transform: translateX(-30%);
          }
        }

        @keyframes loading-ui-polar-face-ears {
          0% {
            transform: translateX(0.625em);
          }

          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-block [--loader-accent:color-mix(in_srgb,currentColor_30%,white)] [--loader-feature:color-mix(in_srgb,currentColor_90%,black)] [--loader-shell:currentColor]",
          className,
        )}
        style={{
          width: "8em",
          height: "9.25em",
          background: "var(--loader-shell)",
          borderRadius: "6.25em 6.25em 0 0",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-[-20%] h-[6.25em] w-[140%]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--loader-shell) 48%, transparent 50%), radial-gradient(circle, var(--loader-shell) 48%, transparent 50%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "4.0625em 4.0625em",
            backgroundPosition: "0 0.75em, 9.0625em 0.75em",
            animation:
              "loading-ui-polar-face-ears 3s linear infinite alternate",
          }}
        />
        <span
          aria-hidden="true"
          className="absolute top-[1.5625em] left-1/2 h-[7.8125em] w-[6.25em]"
          style={{
            transform: "translateX(-50%)",
            backgroundImage:
              "radial-gradient(circle, var(--loader-feature) 48%, transparent 55%), radial-gradient(circle, var(--loader-feature) 48%, transparent 55%), radial-gradient(circle, var(--loader-shell) 30%, transparent 45%), radial-gradient(circle, var(--loader-feature) 48%, transparent 51%), linear-gradient(var(--loader-feature) 1.25em, transparent 0), linear-gradient(var(--loader-accent) 3.75em, transparent 0), radial-gradient(circle, var(--loader-accent) 50%, transparent 51%), radial-gradient(circle, var(--loader-accent) 50%, transparent 51%)",
            backgroundRepeat: "no-repeat",
            backgroundSize:
              "1em 1em, 1em 1em, 0.625em 0.625em, 2.625em 2.625em, 0.75em 0.1875em, 3.125em 1.5625em, 4.375em 4.375em, 4.375em 4.375em",
            backgroundPosition:
              "1.5625em 0.625em, 3.4375em 0.625em, 2.25em 2.75em, 50% 1.875em, 50% 5.3125em, 50% 3.125em, 50% 1.375em, 50% 2.8125em",
            animation:
              "loading-ui-polar-face-shift 3s linear infinite alternate",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { PolarFace };
