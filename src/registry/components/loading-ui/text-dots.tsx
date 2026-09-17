import { cn } from "@/lib/utils";

type TextDotsProps = React.ComponentProps<"span"> & {
  dots?: number;
};

function TextDots({
  className,
  children,
  dots = 3,
  style,
  ...props
}: TextDotsProps) {
  const dotCount = Number.isFinite(dots) ? Math.max(1, Math.floor(dots)) : 3;

  return (
    <>
      <style>{`
        @keyframes loading-ui-text-dots {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex items-center", className)}
        style={style}
        {...props}
      >
        <span>{children}</span>
        <span aria-hidden="true" className="inline-flex">
          {Array.from({ length: dotCount }, (_, index) => (
            <span
              key={index}
              style={{
                animation:
                  "loading-ui-text-dots var(--duration, 1.4s) infinite",
                animationDelay: `calc(var(--delay, 0.2s) * ${index + 1})`,
              }}
            >
              .
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

export { TextDots };
