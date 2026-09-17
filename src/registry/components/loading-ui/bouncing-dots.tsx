import { cn } from "@/lib/utils";

function BouncingDots({
  className,
  dots = 3,
  ...props
}: React.ComponentProps<"span"> & { dots?: number }) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-bouncing-dots {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex items-center gap-[12%]", className)}
        {...props}
      >
        {Array.from({ length: dots }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block aspect-square grow rounded-full bg-current"
            style={{
              animation:
                "loading-ui-bouncing-dots var(--duration, 1.4s) ease-in-out infinite",
              animationDelay: `calc(var(--delay, 0.2s) * ${index})`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { BouncingDots };
