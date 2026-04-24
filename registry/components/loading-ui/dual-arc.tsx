import { cn } from "@/lib/utils";

function DualArc({ className, style, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-dual-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div
        className={cn(
          "rounded-full border-[5px] border-transparent border-y-current",
          className,
        )}
        style={{
          animationName: "loading-ui-dual-arc-spin",
          animationDuration: "var(--duration, 1s)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          ...style,
        }}
        {...props}
      />
    </>
  );
}

export { DualArc };
