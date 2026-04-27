"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
import { WordRotate } from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";

const COPY_TIMEOUT = 2000;
const LOOP_INTERVAL = 2000;
const ROTATION_DURATION = 250;

interface InstallerProps {
  className?: string;
  command: string | string[];
  interval?: number;
}

const getCommonPrefix = (values: string[]) => {
  if (values.length <= 1) {
    return "";
  }
  let prefix = values[0];
  for (let i = 1; i < values.length; i++) {
    while (prefix && !values[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (!prefix) {
      break;
    }
  }
  return prefix;
};

export const Installer = ({
  command,
  className,
  interval = LOOP_INTERVAL,
}: InstallerProps) => {
  const commands = Array.isArray(command) ? command : [command];
  const prefix = getCommonPrefix(commands);
  const suffixes = commands.map((c) => c.slice(prefix.length));

  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentSuffix = suffixes[index] ?? suffixes[0];
  const currentCommand = prefix + currentSuffix;
  const currentCommandRef = useRef(currentCommand);
  currentCommandRef.current = currentCommand;

  useEffect(() => {
    if (commands.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current: number) => (current + 1) % commands.length);
    }, interval);

    return () => clearInterval(timer);
  }, [commands.length, interval]);

  const handleCopy = () => {
    void navigator.clipboard.writeText(currentCommandRef.current);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, COPY_TIMEOUT);
  };

  const Icon = copied ? CheckIcon : CopyIcon;

  return (
    <InputGroup
      className={cn(
        "bg-background h-9 w-fit max-w-[calc(100vw-2rem)] px-1 font-mono md:h-10",
        className,
      )}
    >
      <InputGroupAddon>
        <InputGroupText className="text-muted-foreground font-normal">
          $
        </InputGroupText>
      </InputGroupAddon>
      <div className="relative flex min-w-0 flex-1 items-center overflow-hidden pl-1 text-[11px] whitespace-nowrap sm:text-xs md:text-sm">
        <span aria-live="polite" className="sr-only">
          {currentCommand}
        </span>
        {prefix && (
          <span aria-hidden="true" className="shrink-0">
            {prefix}
          </span>
        )}
        {suffixes.length > 1 ? (
          <WordRotate
            aria-hidden="true"
            animationDuration={ROTATION_DURATION}
            className="shrink-0 leading-none"
            duration={interval}
            index={index}
            words={suffixes}
          />
        ) : (
          <span aria-hidden="true" className="shrink-0">
            {currentSuffix}
          </span>
        )}
      </div>
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Copy"
          onClick={handleCopy}
          size="icon-xs"
          title="Copy"
        >
          <Icon className="size-3.5" size={14} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};
