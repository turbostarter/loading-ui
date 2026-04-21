import Link from "next/link";
import { Section } from "@/components/common/section";
import { ArrowUpRight, Terminal } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCLICommand, getOpenInV0Url, getRegistryItem } from "@/lib/registry";
import { Index } from "@/registry/__index__";
import { ExamplesIndex } from "@/registry/examples/__index__";
import { CopyButton } from "@/components/common/copy-button";
import { RegistryItem } from "@/registry/schema";
import { cn } from "@/lib/utils";

const CopyComponent = ({ item }: { item: RegistryItem }) => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <CopyButton
            variant="secondary"
            size="icon"
            value={item?.files?.[0]?.content ?? ""}
            className="static size-9 bg-secondary"
          />
        }
      />
      <TooltipContent sideOffset={8}>Copy component</TooltipContent>
    </Tooltip>
  );
};

const CopyCLICommand = ({ item }: { item: RegistryItem }) => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <CopyButton
            variant="secondary"
            size="icon"
            value={getCLICommand(item.name)}
            className="static size-9 bg-secondary"
            icon={<Terminal />}
          />
        }
      />
      <TooltipContent sideOffset={8}>Copy CLI command</TooltipContent>
    </Tooltip>
  );
};

const OpenInV0 = ({ item }: { item: RegistryItem }) => {
  const href = getOpenInV0Url(item.name);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${item.name} in v0`}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "icon",
              }),
              "static",
            )}
          >
            <Icons.v0 className="size-4" />
          </a>
        }
      />
      <TooltipContent sideOffset={8}>Open in v0</TooltipContent>
    </Tooltip>
  );
};

export const Examples = async () => {
  const tiles = await Promise.all(
    Object.entries(Index).map(async ([name, entry]) => {
      const ExampleComponent = ExamplesIndex[`${entry.name}-demo`]?.component;

      if (!ExampleComponent) {
        return null;
      }

      const item = await getRegistryItem(entry.name);
      return { name, entry, item, ExampleComponent };
    }),
  );

  return (
    <Section className="bg-border grid grid-cols-1 gap-px p-0! sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tiles.map(tile => {
        if (!tile) {
          return null;
        }

        const { name, item, ExampleComponent } = tile;

        return (
          <div key={name} className="group/component relative aspect-4/3">
            <div className="absolute inset-x-0 z-10 top-0 flex items-center justify-end p-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100">
              <div className="flex items-center gap-1.5">
                <CopyComponent item={item} />
                <CopyCLICommand item={item} />
                <OpenInV0 item={item} />
              </div>
            </div>
            <Link
              href={`/docs/components/${item.name}`}
              className="bg-background flex size-full items-center justify-center"
            >
              <ExampleComponent />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
                <span className="text-muted-foreground group-hover/component:text-foreground truncate text-sm transition-colors">
                  {item.name}
                </span>

                <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100" />
              </div>
            </Link>
          </div>
        );
      })}
    </Section>
  );
};
