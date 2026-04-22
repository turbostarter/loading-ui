import { cn } from "@/lib/utils";

function Bars({
  className,
  bars = 3,
  ...props
}: React.ComponentProps<"span"> & { bars?: number }) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-wave-bars {
          0%,
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(0.6);
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex items-stretch gap-[5%]", className)}
        {...props}
      >
        {Array.from({ length: bars }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block h-full bg-current rounded-[1px]"
            style={{
              width: `${100 / bars}%`,
              animation: "loading-ui-wave-bars 1.2s ease-in-out infinite",
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Bars };
