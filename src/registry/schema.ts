import { z } from "zod";

export const registryItemTypeSchema = z.enum([
  "registry:lib",
  "registry:block",
  "registry:component",
  "registry:ui",
  "registry:hook",
  "registry:page",
  "registry:file",
  "registry:theme",
  "registry:style",
  "registry:item",
  "registry:base",
  "registry:font",
  "registry:example",
  "registry:internal",
]);

export const registryItemFileSchema = z.discriminatedUnion("type", [
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: z.enum(["registry:file", "registry:page"]),
    target: z.string(),
  }),
  z.object({
    path: z.string(),
    content: z.string().optional(),
    type: registryItemTypeSchema.exclude(["registry:file", "registry:page"]),
    target: z.string().optional(),
  }),
]);

export const registryItemTailwindSchema = z.object({
  config: z
    .object({
      content: z.array(z.string()).optional(),
      theme: z.record(z.string(), z.unknown()).optional(),
      plugins: z.array(z.string()).optional(),
    })
    .optional(),
});

export const registryItemCssVarsSchema = z.object({
  theme: z.record(z.string(), z.string()).optional(),
  light: z.record(z.string(), z.string()).optional(),
  dark: z.record(z.string(), z.string()).optional(),
});

export const registryItemCommonSchema = z.object({
  $schema: z.string().optional(),
  extends: z.string().optional(),
  name: z.string(),
  title: z.string().optional(),
  author: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
  tailwind: registryItemTailwindSchema.optional(),
  cssVars: registryItemCssVarsSchema.optional(),
  css: z.record(z.string(), z.unknown()).optional(),
  envVars: z.record(z.string(), z.string()).optional(),
  meta: z.record(z.string(), z.unknown()).optional(),
  docs: z.string().optional(),
  categories: z.array(z.string()).optional(),
});

export const registryItemSchema = z.discriminatedUnion("type", [
  registryItemCommonSchema.extend({
    type: z.literal("registry:base"),
    config: z.unknown().optional(),
  }),
  registryItemCommonSchema.extend({
    type: z.literal("registry:font"),
    font: z.object({
      family: z.string(),
      provider: z.literal("google"),
      import: z.string(),
      variable: z.string(),
      weight: z.array(z.string()).optional(),
      subsets: z.array(z.string()).optional(),
      selector: z.string().optional(),
      dependency: z.string().optional(),
    }),
  }),
  registryItemCommonSchema.extend({
    type: registryItemTypeSchema.exclude(["registry:base", "registry:font"]),
  }),
]);

export type RegistryItemFile = z.infer<typeof registryItemFileSchema>;
export type RegistryItem = z.infer<typeof registryItemSchema>;
