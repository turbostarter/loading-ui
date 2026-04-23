import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TURBOSTARTER_URL } from "@/lib/constants";

export function TurbostarterCta({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 border-y p-6 text-sm",
        className,
      )}
      {...props}
    >
      <div className="text-base leading-tight font-semibold text-balance underline-offset-2 group-hover:underline">
        Build your SaaS in days, not months. On all platforms.
      </div>
      <div className="text-muted-foreground">
        Trusted by 280+ developers and founders.
      </div>
      <div className="text-muted-foreground">
        Get web, mobile and extension setup in minutes, so you can focus on your
        product.
      </div>
      <Button variant="outline" size="sm" className="mt-2 w-fit">
        Try TurboStarter
      </Button>
      <a
        href={`${TURBOSTARTER_URL}?utm_source=loading-ui&utm_medium=referral`}
        target="_blank"
        className="absolute inset-0"
      >
        <span className="sr-only">Try TurboStarter</span>
      </a>
    </div>
  );
}
