import { cn } from "@/lib/utils";

function Pulse({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-thin-pulse {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("relative inline-block shrink-0", className)}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-current"
          style={{
            animation:
              "loading-ui-thin-pulse var(--duration, 1.5s) ease-in-out infinite",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Pulse };
