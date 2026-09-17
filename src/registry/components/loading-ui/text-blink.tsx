import { cn } from "@/lib/utils";

type TextBlinkProps = Omit<React.ComponentProps<"span">, "children"> & {
  children: React.ReactNode;
  as?: React.ElementType;
  minOpacity?: number;
};

function TextBlink({
  children,
  as: Component = "p",
  className,
  minOpacity = 0.45,
  style,
  ...props
}: TextBlinkProps) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-text-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: var(--loading-ui-text-blink-opacity);
          }
        }
      `}</style>
      <Component
        className={cn("inline-block font-medium", className)}
        style={
          {
            ...style,
            "--loading-ui-text-blink-opacity": minOpacity,
            animation:
              "loading-ui-text-blink var(--duration, 2s) ease-in-out infinite",
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </Component>
    </>
  );
}

export { TextBlink };
