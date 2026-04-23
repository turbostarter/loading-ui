import { cn } from "@/lib/utils";

type TextDotsProps = React.ComponentProps<"span">;

function TextDots({ className, children, ...props }: TextDotsProps) {
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
        {...props}
      >
        <span>{children}</span>
        <span aria-hidden="true" className="inline-flex">
          {["0.2s", "0.4s", "0.6s"].map((delay, index) => (
            <span
              key={index}
              style={{
                animation: `loading-ui-text-dots 1.4s infinite ${delay}`,
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
