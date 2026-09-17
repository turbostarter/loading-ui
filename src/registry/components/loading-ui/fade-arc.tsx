import { useId } from "react";

import { cn } from "@/lib/utils";

function FadeArc({ className, style, ...props }: React.ComponentProps<"svg">) {
  const baseId = useId().replace(/:/g, "");
  const leadingGradientId = `${baseId}-leading`;
  const trailingGradientId = `${baseId}-trailing`;

  return (
    <>
      <style>{`
        @keyframes loading-ui-fade-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="status"
        className={cn(className)}
        style={{
          animationName: "loading-ui-fade-arc-spin",
          animationDuration: "var(--duration, 1s)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          ...style,
        }}
        {...props}
      >
        <defs>
          <linearGradient
            id={leadingGradientId}
            x1="50%"
            x2="50%"
            y1="5.271%"
            y2="91.793%"
          >
            <stop offset="0%" stopColor="currentColor" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient
            id={trailingGradientId}
            x1="50%"
            x2="50%"
            y1="15.24%"
            y2="87.15%"
          >
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <g fill="none">
          <path
            d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021"
            fill={`url(#${leadingGradientId})`}
            transform="translate(1.5 1.625)"
          />
          <path
            d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118"
            fill={`url(#${trailingGradientId})`}
            transform="translate(1.5 1.625)"
          />
        </g>
      </svg>
    </>
  );
}

export { FadeArc };
