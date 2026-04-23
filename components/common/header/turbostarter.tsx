import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";
import { TURBOSTARTER_URL } from "@/lib/constants";

export const Turbostarter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    href={`${TURBOSTARTER_URL}?utm_source=loading-ui&utm_medium=referral`}
    target="_blank"
    className={cn(
      "border-border text-foreground hover:bg-accent flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
      className,
    )}
    {...props}
  >
    <Icons.turbostarter className="size-4" />
    TurboStarter
  </a>
);
