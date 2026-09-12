import { promises as fs } from "fs";
import path from "path";

function resolveRegistryPath(relativePath: string) {
  const withoutPrefix = relativePath.replace(/^(?:\.\/)?registry\//, "");
  return path.join(process.cwd(), "registry", withoutPrefix);
}

export async function readFileFromRoot(relativePath: string) {
  return fs.readFile(resolveRegistryPath(relativePath), "utf-8");
}
