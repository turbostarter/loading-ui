"use client";

import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";

import { createQueryClient } from "./utils";

import type { QueryClient } from "@tanstack/react-query";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
export const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  } else {
    // Browser: use singleton pattern to keep the same query client
    return (clientQueryClientSingleton ??= createQueryClient());
  }
};

export function QueryClientProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {props.children}
    </TanstackQueryClientProvider>
  );
}
