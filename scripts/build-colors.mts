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

const format = Bun.spawnSync(["bunx", "oxfmt", outputPath], {
  stdout: "inherit",
  stderr: "inherit",
});

if (format.exitCode !== 0) {
  process.exit(format.exitCode ?? 1);
}
