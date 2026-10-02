import { lazy, Suspense, useEffect, useState } from "react";

const WaitlistPopover = lazy(() =>
  import("./waitlist").then((module) => ({ default: module.WaitlistPopover })),
);

export function WaitlistLoader() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 3_000);
    return () => window.clearTimeout(timeout);
  }, []);

  return ready ? (
    <Suspense fallback={null}>
      <WaitlistPopover />
    </Suspense>
  ) : null;
}
