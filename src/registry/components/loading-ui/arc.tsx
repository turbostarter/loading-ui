import { cn } from "@/lib/utils";

function Arc({ className, style, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div
        className={cn(
          "rounded-full border-[5px] border-current/10 border-t-current",
          className,
        )}
        style={{
          animationName: "loading-ui-arc-spin",
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

export { Arc };
