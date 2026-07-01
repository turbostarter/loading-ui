import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { generateColorsCss } from "../lib/colors.ts";

const outputPath = path.join(process.cwd(), "app/colors.css");

const content = generateColorsCss();
const existing = await fs.readFile(outputPath, "utf8").catch(() => null);

if (existing !== content) {
  await fs.writeFile(outputPath, content);
  console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
}

const format = spawnSync("bunx", ["oxfmt", outputPath], {
  stdio: "inherit",
});

if (format.status !== 0) {
  process.exit(format.status ?? 1);
}
