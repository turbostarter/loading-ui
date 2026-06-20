"use client";

import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  COLOR_NAMES,
  colorGradientVar,
  colorVar,
  type Color,
} from "@/lib/colors";

const colorAtom = atomWithStorage<Color>("color", "black");

export function useColor() {
  return useAtom(colorAtom);
}

export const ColorPicker = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [color, setColor] = useColor();

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 md:gap-3",
        className,
      )}
      {...props}
    >
      {COLOR_NAMES.map((colorName) => (
        <button
          key={colorName}
          className={cn(
            "ring-offset-background size-6 cursor-pointer rounded-full ring-current transition-transform active:translate-y-px md:size-7 lg:size-8",
            {
              "ring-2 ring-offset-2": color === colorName,
            },
          )}
          style={{
            background: colorGradientVar(colorName),
            color: colorVar(colorName),
          }}
          aria-label={colorName}
          onClick={() => setColor(colorName)}
        />
      ))}
    </div>
  );
};
