"use client";

import { CopyButton } from "@/components/common/copy-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RegistryItem } from "@/registry/schema";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { track } from "@vercel/analytics";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";

export const CopyComponent = ({ item }: { item: RegistryItem }) => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <CopyButton
            variant="secondary"
            size="icon"
            value={item?.files?.[0]?.content ?? ""}
            className="bg-secondary static size-9"
            onClick={() =>
              track("component_source_copied", { name: item.name })
            }
          />
        }
      />
      <TooltipContent sideOffset={8}>Copy component</TooltipContent>
    </Tooltip>
  );
};

export const CopyCLICommand = ({
  item,
  command,
}: {
  item: RegistryItem;
  command: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <CopyButton
            variant="secondary"
            size="icon"
            value={command}
            className="bg-secondary static size-9"
            icon={<Terminal />}
            onClick={() => track("cli_command_copied", { name: item.name })}
          />
        }
      />
      <TooltipContent sideOffset={8}>Copy CLI command</TooltipContent>
    </Tooltip>
  );
};

export const OpenInV0 = ({
  item,
  href,
}: {
  item: RegistryItem;
  href: string;
}) => {
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
            onClick={() => track("open_in_v0", { name: item.name })}
          >
            <Icons.v0 className="size-4" />
          </a>
        }
      />
      <TooltipContent sideOffset={8}>Open in v0</TooltipContent>
    </Tooltip>
  );
};
