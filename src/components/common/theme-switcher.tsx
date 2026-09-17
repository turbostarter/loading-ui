"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const ThemeSwitcher = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      className={cn("group/toggle extend-touch-target relative", className)}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3l0 18" />
        <path d="M12 9l4.65 -4.65" />
        <path d="M12 14.3l7.37 -7.37" />
        <path d="M12 19.6l8.85 -8.85" />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
