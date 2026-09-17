import { cn } from "@/lib/utils";

function Skeleton({ className, style, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-skeleton-pulse {
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      <div
        data-slot="skeleton"
        className={cn("bg-muted rounded-md", className)}
        style={{
          animationName: "loading-ui-skeleton-pulse",
          animationDuration: "var(--duration, 2s)",
          animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
          animationIterationCount: "infinite",
          ...style,
        }}
        {...props}
      />
    </>
  );
}

export { Skeleton };
