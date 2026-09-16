"use client";

import { useTheme } from "next-themes";
import { preload } from "react-dom";

import type { ComponentProps } from "react";

export const ThemedImage = ({
  light,
  dark,
  ...props
}: Omit<ComponentProps<"img">, "src"> & {
  light: string;
  dark: string;
}) => {
  preload(light, { as: "image" });
  preload(dark, { as: "image" });

  const { resolvedTheme } = useTheme();

  return <img src={resolvedTheme === "dark" ? dark : light} {...props} />;
};
