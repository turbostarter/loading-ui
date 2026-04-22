import { cn } from "@/lib/utils";

function ClockRing({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-clock-ring-rotation {
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
          "relative inline-block rounded-full border-2 border-current",
          className,
        )}
        style={{
          animation: "loading-ui-clock-ring-rotation 1.5s linear infinite",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-1/2 bg-current"
          style={{
            width: "6.25%",
            height: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { ClockRing };
