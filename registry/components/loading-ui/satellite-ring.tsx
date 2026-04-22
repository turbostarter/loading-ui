import { cn } from "@/lib/utils";

function SatelliteRing({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-satellite-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-block rounded-full border-2 border-current/25",
          className,
        )}
        style={{
          animation: "loading-ui-satellite-ring-rotation 1.5s linear infinite",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 rounded-full bg-current"
          style={{
            width: "33.333%",
            height: "33.333%",
            transform: "translate(-50%, 50%)",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { SatelliteRing };
