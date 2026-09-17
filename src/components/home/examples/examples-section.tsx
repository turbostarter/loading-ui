"use client";

import { Section } from "@/components/common/section";
import { useColor } from "@/components/common/color-picker";
import { colorVar } from "@/lib/colors";

export const ExamplesSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [color] = useColor();

  return (
    <Section
      className="bg-border flex flex-wrap content-start items-stretch gap-px p-0!"
      style={{
        color: colorVar(color),
      }}
    >
      {children}
    </Section>
  );
};
