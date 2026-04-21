import { readFileFromRoot } from "@/lib/read-file";
import { Index } from "@/registry/__index__";
import { ExamplesIndex } from "@/registry/examples/__index__";
import {
  registryItemSchema,
  type RegistryItem,
  type RegistryItemFile,
} from "@/registry/schema";
import { LRUCache } from "lru-cache";
import path from "path";
import { promises as fs } from "fs";
import { registry } from "@/registry/registry";

// LRU cache for cross-request caching of registry items.
// File reads are I/O-bound, so caching improves dev server performance.
const registryCache = new LRUCache<string, any>({
  max: 500,
  ttl: 1000 * 60 * 5, // 5 minutes (shorter for dev to pick up changes).
});

export function getDemoComponent(name: string) {
  return ExamplesIndex[name]?.component;
}

function getRegistryEntry(name: string) {
  return Index[name];
}

export function getRegistryComponent(name: string) {
  const demoComponent = getDemoComponent(name);
  if (demoComponent) {
    return demoComponent;
  }

  return getRegistryEntry(name)?.component;
}

export async function getDemoItem(name: string) {
  const demo = ExamplesIndex[name];
  if (!demo) {
    return null;
  }

  const content = await readFileFromRoot(demo.filePath);

  return {
    name: demo.name,
    type: "registry:internal" as const,
    files: [
      {
        path: demo.filePath,
        content,
        type: "registry:internal" as const,
      },
    ],
  };
}

export async function getRegistryItem(name: string) {
  const cacheKey = name;

  // Check cache first.
  if (registryCache.has(cacheKey)) {
    return registryCache.get(cacheKey);
  }

  const item = getRegistryEntry(name);

  if (!item) {
    registryCache.set(cacheKey, null);
    return null;
  }

  const normalizedItem = {
    ...item,
    files: item.files.map((file: unknown) =>
      typeof file === "string" ? { path: file } : file,
    ),
  };

  // Convert all file paths to object.
  const result = registryItemSchema.safeParse(normalizedItem);
  if (!result.success) {
    registryCache.set(cacheKey, null);
    return null;
  }

  // Read all files in parallel.
  let files: typeof result.data.files = await Promise.all(
    item.files.map(async (file: RegistryItemFile) => {
      const content = await getFileContent(file);
      const relativePath = path.relative(process.cwd(), file.path);

      return Object.assign({}, file, {
        path: relativePath,
        content,
      });
    }),
  );

  // Fix file paths.
  files = fixFilePaths(files);

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    registryCache.set(cacheKey, null);
    return null;
  }

  // Cache the result.
  registryCache.set(cacheKey, parsed.data);

  return parsed.data;
}

async function getFileContent(file: RegistryItemFile) {
  let code = await fs.readFile(file.path, "utf-8");

  // Some registry items uses default export.
  // We want to use named export instead.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export");
  }

  // Fix imports.
  code = fixImport(code);

  return code;
}

function getFileTarget(file: RegistryItemFile) {
  let target = file.target;

  if (!target || target === "") {
    const fileName = file.path.split("/").pop();
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`;
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`;
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`;
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`;
    }
  }

  return target ?? "";
}

function fixFilePaths(files: RegistryItem["files"]) {
  if (!files) {
    return [];
  }

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0].path;
  const firstFilePathDir = path.dirname(firstFilePath);

  return files.map(file => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    };
  });
}

export function fixImport(content: string) {
  content = content.replace(
    /@\/styles\/([\w-]+)\/(ui-rtl|ui)\/([\w-]+)/g,
    (match, _styleName, type, component) => {
      if (type === "ui" || type === "ui-rtl") {
        return `@/components/ui/${component}`;
      }

      return match;
    },
  );

  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (
    match: string,
    importPath: string,
    type: string,
    component: string,
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`;
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`;
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`;
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`;
    }

    return match;
  };

  return content.replace(regex, replacement);
}

export function getCLICommand(name: string) {
  return `npx shadcn add ${registry.name}/${name}`;
}
