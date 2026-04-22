"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function PulsatingDots({
  className,
  dots = 3,
  ...props
}: React.ComponentProps<"span"> & { dots?: number }) {
  return (
    <span
      role="status"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span aria-hidden="true" className="inline-flex w-full gap-[16%]">
        {Array.from({ length: dots }, (_, index) => (
          <motion.span
            key={index}
            className="inline-block aspect-square grow rounded-full bg-current"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        ))}
      </span>
      <span className="sr-only">Loading</span>
    </span>
  );
}

export { PulsatingDots };
