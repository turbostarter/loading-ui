import { cn } from "@/lib/utils";

function TripleDotSpinner({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-triple-dot-rotation {
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
        className={cn("relative inline-block shrink-0", className)}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            animation:
              "loading-ui-triple-dot-rotation var(--duration, 2s) ease-in-out infinite",
          }}
        >
          <span className="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
          <span className="absolute top-1/2 left-1/2 size-full -translate-x-[200%] -translate-y-1/2 rounded-full bg-current" />
          <span className="absolute top-1/2 left-1/2 size-full translate-x-full -translate-y-1/2 rounded-full bg-current" />
        </span>
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { TripleDotSpinner };
