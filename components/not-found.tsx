import type { ErrorComponentProps } from "@tanstack/react-router";
import { useEffect } from "react";

import { Link } from "@/components/common/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { fonts } from "@/lib/fonts";

export function NotFound() {
  return (
    <div
      className={`flex min-h-[50vh] flex-col items-center justify-center gap-4 ${fonts}`}
    >
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link href="/" className={buttonVariants()}>
        Go home
      </Link>
    </div>
  );
}

export function DefaultError({ error, reset }: ErrorComponentProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h1>Oops, something went wrong</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
