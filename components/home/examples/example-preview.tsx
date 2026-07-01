"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

export function ExamplePreview({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [Demo, setDemo] = useState<ComponentType | null>(null);

  useEffect(() => {
    const element = ref.current;
    let observer: IntersectionObserver | undefined;

    if (element) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          observer?.disconnect();

          void (async () => {
            const mod = await import(`@/registry/examples/${name}/demo.tsx`);
            const component = Object.values(mod).find(
              (value) => typeof value === "function",
            ) as ComponentType | undefined;

            if (component) {
              setDemo(() => component);
            }
          })();
        },
        { rootMargin: "200px" },
      );

      observer.observe(element);
    }

    return () => {
      observer?.disconnect();
    };
  }, [name]);

  return (
    <div
      ref={ref}
      className="flex size-full items-center justify-center"
      style={{ contentVisibility: Demo ? "visible" : "auto" }}
    >
      {Demo ? <Demo /> : null}
    </div>
  );
}
