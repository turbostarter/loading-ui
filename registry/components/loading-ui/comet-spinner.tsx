import { cn } from "@/lib/utils";

function CometSpinner({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-comet-shadow {
          0% {
            box-shadow:
              0 -0.83em 0 -0.4em,
              0 -0.83em 0 -0.42em,
              0 -0.83em 0 -0.44em,
              0 -0.83em 0 -0.46em,
              0 -0.83em 0 -0.477em;
          }

          5%,
          95% {
            box-shadow:
              0 -0.83em 0 -0.4em,
              0 -0.83em 0 -0.42em,
              0 -0.83em 0 -0.44em,
              0 -0.83em 0 -0.46em,
              0 -0.83em 0 -0.477em;
          }

          10%,
          59% {
            box-shadow:
              0 -0.83em 0 -0.4em,
              -0.087em -0.825em 0 -0.42em,
              -0.173em -0.812em 0 -0.44em,
              -0.256em -0.789em 0 -0.46em,
              -0.297em -0.775em 0 -0.477em;
          }

          20% {
            box-shadow:
              0 -0.83em 0 -0.4em,
              -0.338em -0.758em 0 -0.42em,
              -0.555em -0.617em 0 -0.44em,
              -0.671em -0.488em 0 -0.46em,
              -0.749em -0.34em 0 -0.477em;
          }

          38% {
            box-shadow:
              0 -0.83em 0 -0.4em,
              -0.377em -0.74em 0 -0.42em,
              -0.645em -0.522em 0 -0.44em,
              -0.775em -0.297em 0 -0.46em,
              -0.82em -0.09em 0 -0.477em;
          }

          100% {
            box-shadow:
              0 -0.83em 0 -0.4em,
              0 -0.83em 0 -0.42em,
              0 -0.83em 0 -0.44em,
              0 -0.83em 0 -0.46em,
              0 -0.83em 0 -0.477em;
          }
        }

        @keyframes loading-ui-comet-rotation {
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
        aria-label="Loading"
        className={cn(
          "relative inline-block overflow-hidden rounded-full align-middle",
          className,
        )}
        style={{
          width: "1em",
          height: "1em",
          animation:
            "loading-ui-comet-shadow 1.7s infinite ease, loading-ui-comet-rotation 1.7s infinite ease",
          transform: "translateZ(0)",
        }}
        {...props}
      />
    </>
  );
}

export { CometSpinner };
