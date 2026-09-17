import { preload } from "react-dom";

import { cn } from "@/lib/utils";

import type { ComponentProps } from "react";

export const ThemedImage = ({
  light,
  dark,
  className,
  ...props
}: Omit<ComponentProps<"img">, "src"> & {
  light: string;
  dark: string;
}) => {
  preload(light, { as: "image" });
  preload(dark, { as: "image" });

  return (
    <>
      <img src={light} className={cn("dark:hidden", className)} {...props} />
      <img
        src={dark}
        className={cn("hidden dark:block", className)}
        {...props}
      />
    </>
  );
};
