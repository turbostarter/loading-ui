import { cn } from "@/lib/utils";

type TerminalProps = React.ComponentProps<"span"> & {
  prompt?: string;
};

function Terminal({ className, prompt = ">", ...props }: TerminalProps) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-terminal-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "inline-flex items-center gap-[0.25em] font-mono",
          className,
        )}
        {...props}
      >
        <span aria-hidden="true">{prompt}</span>
        <span
          aria-hidden="true"
          className="inline-block w-[0.5em] bg-current"
          style={{
            height: "1em",
            animation: "loading-ui-terminal-blink 1s step-end infinite",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Terminal };
