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
        className={cn(
          "relative mx-auto block rounded-full bg-current",
          className,
        )}
        style={{
          boxShadow: "-150% 0 currentColor, 150% 0 currentColor",
          animation: "loading-ui-triple-dot-rotation 2s ease-in-out infinite",
        }}
        {...props}
      >
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { TripleDotSpinner };
