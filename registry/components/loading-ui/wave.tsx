import { cn } from "@/lib/utils";

const WAVE_BAR_HEIGHTS = ["50%", "75%", "100%", "75%", "50%"] as const;

function Wave({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-wave {
          0%,
          100% {
            transform: scaleY(1);
          }

          50% {
            transform: scaleY(0.6);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex items-center gap-[2.5%]", className)}
        {...props}
      >
        {WAVE_BAR_HEIGHTS.map((height, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block rounded-full bg-current"
            style={{
              width: "12.5%",
              height,
              animation: "loading-ui-wave 1s ease-in-out infinite",
              animationDelay: `${index * 100}ms`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Wave };
