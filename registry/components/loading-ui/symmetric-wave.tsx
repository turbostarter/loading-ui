import { cn } from "@/lib/utils";

const SYMMETRIC_WAVE_PHASES = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1] as const;

type SymmetricWaveProps = React.ComponentProps<"span"> & {
  block?: string;
  track?: string;
};

function SymmetricWave({
  className,
  block = "█",
  track = "░",
  ...props
}: SymmetricWaveProps) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-symmetric-wave-1 {
          0%,
          100% {
            opacity: 1;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5%,
          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-2 {
          0%,
          100% {
            opacity: 0.6;
          }

          12.5%,
          87.5% {
            opacity: 1;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 0.3;
          }

          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-3 {
          0%,
          100% {
            opacity: 0.3;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 1;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 0.3;
          }
        }

        @keyframes loading-ui-symmetric-wave-4 {
          0%,
          100% {
            opacity: 0;
          }

          12.5%,
          87.5% {
            opacity: 0.3;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 1;
          }

          50% {
            opacity: 0.6;
          }
        }

        @keyframes loading-ui-symmetric-wave-5 {
          0%,
          100%,
          12.5%,
          87.5% {
            opacity: 0;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-flex h-[1em] w-[10ch] overflow-hidden font-mono text-xl leading-none text-current select-none",
          className,
        )}
        {...props}
      >
        {SYMMETRIC_WAVE_PHASES.map((phase, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="relative flex h-full w-[1ch] items-center justify-center"
          >
            <span className="opacity-30">{track}</span>
            <span
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: `loading-ui-symmetric-wave-${phase} var(--duration, 2s) linear infinite`,
              }}
            >
              {block}
            </span>
          </span>
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { SymmetricWave };
