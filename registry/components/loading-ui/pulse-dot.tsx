import { cn } from "@/lib/utils";

function PulseDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-pulse-dot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-block rounded-full bg-current", className)}
        style={{
          animation: "loading-ui-pulse-dot 1.2s ease-in-out infinite",
        }}
        {...props}
      >
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { PulseDot };
