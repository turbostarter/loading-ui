"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/common/section";
import { getStars } from "@/lib/octokit";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";

const useStats = () => {
  const stars = useQuery({
    queryKey: ["github-stars"],
    queryFn: getStars,
  });

  return [
    {
      label: "Daily visitors",
      value: 1_500,
      change: "+44%",
    },
    {
      label: "Monthly visitors",
      value: 45_000,
      change: "+58%",
    },
    {
      label: "Monthly page views",
      value: 200_000,
      change: "+65%",
    },
    {
      label: "GitHub Stars",
      value: stars.data ?? 0,
      change: "+150%",
    },
  ];
};

export const Stats = () => {
  const stats = useStats();

  return (
    <Section
      id="stats"
      className="bg-border grid grid-cols-1 gap-px p-0! md:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-background flex flex-col items-start justify-center gap-2 px-6 py-5 lg:py-6"
        >
          <div className="inline-flex w-full items-center justify-between gap-2">
            <h3 className="text-muted-foreground truncate text-sm tracking-tight lg:text-base">
              {stat.label}
            </h3>
            <Badge
              className={cn({
                "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400":
                  stat.change.startsWith("+"),
                "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400":
                  stat.change.startsWith("-"),
              })}
            >
              {stat.change.startsWith("+") ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              {stat.change.slice(1)}
            </Badge>
          </div>
          <p className="text-3xl font-medium tracking-tighter md:text-4xl lg:text-5xl">
            {Intl.NumberFormat("en-US").format(stat.value)}+
          </p>
        </div>
      ))}
    </Section>
  );
};
