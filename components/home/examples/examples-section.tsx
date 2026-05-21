"use client";

import { Section } from "@/components/common/section";
import { COLORS, toOklch, useColor } from "@/components/common/color-picker";
import { useTheme } from "next-themes";

export const ExamplesSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { resolvedTheme } = useTheme();
  const [color] = useColor();

  if (!resolvedTheme) {
    return null;
  }

  const colors = COLORS[resolvedTheme as keyof typeof COLORS] ?? COLORS.light;
  const value = colors[color];

  return (
    <Section
      className="bg-border flex flex-wrap content-start items-stretch gap-px p-0!"
      style={{
        color: toOklch(value),
      }}
    >
      {children}
    </Section>
  );
};
