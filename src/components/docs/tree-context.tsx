import { deserializePageTree } from "fumadocs-core/source/client";
import type { SerializedPageTree } from "fumadocs-core/source/client";
import { createContext, useContext, useMemo, type ReactNode } from "react";

import type { source } from "@/lib/source";

export type PageTree = typeof source.pageTree;

const PageTreeContext = createContext<PageTree | null>(null);

export function PageTreeProvider({
  tree,
  children,
}: {
  tree: SerializedPageTree | PageTree;
  children: ReactNode;
}) {
  const value = useMemo(() => {
    if (tree && typeof tree === "object" && "$fumadocs_loader" in tree) {
      return deserializePageTree(tree);
    }
    return tree;
  }, [tree]);

  return (
    <PageTreeContext.Provider value={value}>
      {children}
    </PageTreeContext.Provider>
  );
}

export function usePageTree() {
  const tree = useContext(PageTreeContext);
  if (!tree) {
    throw new Error("usePageTree must be used within PageTreeProvider");
  }
  return tree;
}
