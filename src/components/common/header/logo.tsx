import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

export const Logo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-2", className)} {...props}>
    <Icons.logo className="h-4 w-auto" />
    <span className="text-base font-semibold">Loading UI</span>
  </div>
);
