"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function Spiral({
  dots = 8,
  radius = 31.25,
  className,
  ...props
}: React.ComponentProps<"span"> & { dots?: number; radius?: number }) {
  return (
    <span
      role="status"
      className={cn("relative inline-block", className)}
      {...props}
    >
      {Array.from({ length: dots }, (_, index) => {
        const angle = (index / dots) * (2 * Math.PI);
        const x = `${50 + radius * Math.cos(angle)}%`;
        const y = `${50 + radius * Math.sin(angle)}%`;

        return (
          <motion.span
            key={index}
            aria-hidden="true"
            className="absolute inline-block rounded-full bg-current"
            style={{
              left: x,
              top: y,
              translate: "-50% -50%",
              width: `${150 / dots}%`,
              height: `${150 / dots}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: (index / dots) * 1.5,
              ease: "easeInOut",
            }}
          />
        );
      })}
      <span className="sr-only">Loading</span>
    </span>
  );
}

export { Spiral };
