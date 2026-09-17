import { cn } from "@/lib/utils";
import {
  Alert,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";

export function Callout({
  title,
  children,
  icon,
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof Alert> & {
  icon?: React.ReactNode;
  variant?: "default" | "info" | "warning";
}) {
  return (
    <Alert
      data-variant={variant}
      className={cn(
        "border-surface bg-surface text-surface-foreground mt-6 w-auto rounded-xl md:-mx-1 **:[code]:border",
        className,
      )}
      {...props}
    >
      {icon ? <AlertMedia>{icon}</AlertMedia> : null}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="text-card-foreground/80">
        {children}
      </AlertDescription>
    </Alert>
  );
}
