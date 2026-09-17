const bundledFiles = import.meta.glob<string>(
  ["../registry/**/*.{ts,tsx,css,json}", "../content/**/*.{md,mdx}"],
  { query: "?raw", import: "default" },
);

function toGlobKey(relativePath: string) {
  const normalized = relativePath.replaceAll("\\", "/").replace(/^\.\/+/, "");
  const fromSrc = normalized.replace(/^src\//, "");
  return `../${fromSrc}`;
}

export async function readFileFromRoot(relativePath: string) {
  const load = bundledFiles[toGlobKey(relativePath)];
  if (load) {
    return load();
  }

  const { promises: fs } = await import("node:fs");
  const path = await import("node:path");
  return fs.readFile(path.join(process.cwd(), relativePath), "utf-8");
}
