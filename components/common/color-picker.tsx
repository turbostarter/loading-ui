"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Oklch = readonly [number, number, number];

export const COLORS = {
  light: {
    black: [0, 0, 0],
    blue: [0.6204, 0.195, 253.83],
    violet: [0.7217, 0.1768, 305.49],
    orange: [0.6958, 0.2042, 43.48],
    red: [0.5814, 0.2348, 27.98],
    green: [0.7697, 0.2123, 148.69],
    yellow: [0.8606, 0.1731, 91.94],
    sky: [0.8276, 0.1013, 230.34],
  },
  dark: {
    black: [1, 0, 0],
    blue: [0.6204, 0.195, 253.83],
    violet: [0.7217, 0.1768, 305.49],
    orange: [0.6958, 0.2042, 43.48],
    red: [0.5814, 0.2348, 27.98],
    green: [0.7697, 0.2123, 148.69],
    yellow: [0.8606, 0.1731, 91.94],
    sky: [0.8276, 0.1013, 230.34],
  },
} as const;

export type Color = keyof (typeof COLORS)[keyof typeof COLORS];

const GRADIENT_MODIFIERS = {
  start: { dl: 0.509, dc: -0.006, dh: -17.26 },
  end: { dl: -0.2326, dc: 0.1136, dh: 28.01 },
} as const;

export const toOklch = ([l, c, h]: Oklch) =>
  `oklch(${l.toFixed(4)} ${c.toFixed(4)} ${h.toFixed(2)})`;

const modifyColor = (
  [l, c, h]: Oklch,
  { dl = 0, dc = 0, dh = 0 }: { dl?: number; dc?: number; dh?: number },
): Oklch => [
  Math.min(1, Math.max(0, l + dl)),
  Math.max(0, c + dc),
  (h + dh + 360) % 360,
];

const colorAtom = atomWithStorage<Color>("color", "black");

export function useColor() {
  return useAtom(colorAtom);
}

export const ColorPicker = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useColor();

  if (!resolvedTheme) {
    return null;
  }

  const colors = COLORS[resolvedTheme as keyof typeof COLORS] ?? COLORS.light;

  return (
    <div
      className={cn(
        "flex gap-2 md:gap-3 items-center justify-center",
        className,
      )}
      {...props}
    >
      {Object.entries(colors).map(([colorName, value]) => (
        <button
          key={colorName}
          className={cn(
            "size-6 md:size-7 lg:size-8 rounded-full cursor-pointer ring-offset-background active:translate-y-px transition-transform ring-current",
            {
              "ring-2 ring-offset-2": color === colorName,
            },
          )}
          style={{
            background: `linear-gradient(in oklch 135deg, ${toOklch(modifyColor(value, GRADIENT_MODIFIERS.start))} 0%, ${toOklch(value)} 50%, ${toOklch(modifyColor(value, GRADIENT_MODIFIERS.end))} 100%)`,
            color: toOklch(value),
          }}
          aria-label={colorName}
          onClick={() => setColor(colorName as Color)}
        />
      ))}
    </div>
  );
};
