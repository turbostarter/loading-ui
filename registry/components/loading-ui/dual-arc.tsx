import { cn } from "@/lib/utils";

function DualArc({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "size-7 animate-spin rounded-full border-[3px] border-white border-t-primary border-b-primary",
        className,
      )}
      {...props}
    />
  );
}

export { DualArc };
