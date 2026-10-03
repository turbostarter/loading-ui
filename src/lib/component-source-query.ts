export type ComponentSourceQueryInput = {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
  maxLines?: number;
};

export function componentSourceQueryInput(
  input: ComponentSourceQueryInput,
): ComponentSourceQueryInput {
  return {
    name: input.name,
    src: input.src,
    title: input.title,
    language: input.language,
    maxLines: input.maxLines,
  };
}
