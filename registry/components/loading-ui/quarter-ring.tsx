import { cn } from "@/lib/utils";

function QuarterRing({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-quarter-ring-rotation {
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
          "inline-block rounded-full border-t-[3px] border-r-[3px] border-t-current border-r-transparent",
          className,
        )}
        style={{
          animation: "loading-ui-quarter-ring-rotation 1s linear infinite",
        }}
        {...props}
      >
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { QuarterRing };
