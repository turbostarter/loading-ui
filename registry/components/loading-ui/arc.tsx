import { cn } from "@/lib/utils";

function Arc({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "size-7 animate-spin rounded-full border-[3px] border-secondary border-t-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Arc };
