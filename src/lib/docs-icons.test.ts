import assert from "node:assert/strict";
import { test } from "node:test";
import { readdir, readFile } from "node:fs/promises";
import { getDocsIcon } from "./docs-icons.ts";

void test("every documentation icon has an explicit import", async () => {
  const files = await readdir("src/content/docs", { recursive: true });
  const contents = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => readFile(`src/content/docs/${file}`, "utf8")),
  );
  let checked = 0;
  for (const content of contents) {
    const icon = /^icon:\s*(\w+)/m.exec(content)?.[1];
    if (icon) {
      assert.ok(getDocsIcon(icon), `Missing icon: ${icon}`);
      checked++;
    }
  }
  assert.ok(checked > 0);
  assert.equal(getDocsIcon(undefined), undefined);
  assert.equal(getDocsIcon("UnknownIcon"), undefined);
});
