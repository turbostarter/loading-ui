import { cn } from "@/lib/utils";

function DeliveryTruck({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-delivery-truck-bounce {
          0%,
          50%,
          100% {
            transform: translateY(0);
          }

          30%,
          90% {
            transform: translateY(-3px);
          }
        }

        @keyframes loading-ui-delivery-truck-lines {
          0% {
            background-position: 6.25em 0.6875em, 7.1875em 2.1875em, 6.5625em 3.75em;
            opacity: 1;
          }

          50% {
            background-position: 0 0.6875em, 1.25em 2.1875em, 0.3125em 3.75em;
          }

          60% {
            background-position: -1.875em 0.6875em, 0 2.1875em, -0.625em 3.75em;
          }

          75%,
          100% {
            background-position: -1.875em 0.6875em, -1.875em 2.1875em, -1.875em 3.75em;
            opacity: 0;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "relative inline-block [--truck-accent:color-mix(in_srgb,currentColor_70%,white)] [--truck-detail:color-mix(in_srgb,currentColor_12%,white)] [--truck-main:currentColor] [--truck-wheel:color-mix(in_srgb,currentColor_35%,black)]",
          className,
        )}
        style={{
          width: "8.125em",
          height: "6.25em",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "linear-gradient(var(--truck-main), var(--truck-main)), linear-gradient(var(--truck-accent), var(--truck-accent)), linear-gradient(var(--truck-accent), var(--truck-accent))",
          backgroundSize: "5em 4.375em, 1.875em 3.125em, 1.875em 1.875em",
          backgroundPosition: "0 0, 5em 1.25em, 6.25em 2.5em",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute bottom-[0.625em] left-[0.75em] box-content block rounded-full border-[0.625em]"
          style={{
            width: "0.625em",
            height: "0.625em",
            background: "var(--truck-detail)",
            borderColor: "var(--truck-wheel)",
            boxShadow:
              "4.875em 0 0 -0.625em var(--truck-detail), 4.875em 0 0 0 var(--truck-wheel)",
            animation:
              "loading-ui-delivery-truck-bounce 0.75s ease-in infinite alternate",
          }}
        />
        <span
          aria-hidden="true"
          className="absolute top-0 right-full block"
          style={{
            width: "4.375em",
            height: "4.375em",
            backgroundImage:
              "linear-gradient(var(--truck-detail) 2.8125em, transparent 0), linear-gradient(var(--truck-detail) 2.8125em, transparent 0), linear-gradient(var(--truck-detail) 2.8125em, transparent 0)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.875em 0.25em",
            backgroundPosition: "0 0.6875em, 0.5em 2.1875em, 0 3.75em",
            animation: "loading-ui-delivery-truck-lines 0.75s linear infinite",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { DeliveryTruck };
