"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { identify, track } from "@/lib/analytics/client";
import { getWaitlistSignupCountFn } from "@/lib/server";
import { Ring } from "@/registry/components/loading-ui/ring";
import { cn } from "@/lib/utils";

const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address")
    .pipe(z.email("Enter a valid email address")),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

const popupDismissedAtAtom = atomWithStorage<string | null>(
  "loading_ui_waitlist_popup_dismissed_at",
  null,
  undefined,
  { getOnInit: true },
);

const REDISPLAY_MS = 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 3_000;

export function WaitlistPopover() {
  const [dismissedAt, setDismissedAt] = useAtom(popupDismissedAtAtom);
  const [showAfterDelay, setShowAfterDelay] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { email: "" },
  });

  const dismissedAtMs = dismissedAt ? Date.parse(dismissedAt) : Number.NaN;
  const dismissalExpired =
    !Number.isNaN(dismissedAtMs) && Date.now() - dismissedAtMs >= REDISPLAY_MS;
  const open = showAfterDelay && (!dismissedAt || dismissalExpired);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setShowAfterDelay(true),
      SHOW_DELAY_MS,
    );
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (dismissalExpired && dismissedAt) {
      setDismissedAt(null);
    }
  }, [dismissalExpired, dismissedAt, setDismissedAt]);

  const count = useQuery({
    queryKey: ["waitlist-signup-count"],
    queryFn: () => getWaitlistSignupCountFn(),
    staleTime: 60_000,
  });

  const dismiss = () => {
    track("waitlist_dismissed", { source: "popup" });
    setDismissedAt(new Date().toISOString());
  };

  const onSubmit = async (values: WaitlistFormValues) => {
    const email = values.email.trim();
    identify(email, { email });
    await Promise.all([
      Promise.resolve(track("waitlist_submitted", { source: "popup", email })),
      new Promise(resolve => setTimeout(resolve, 1000)),
    ]);
    void queryClient.invalidateQueries({ queryKey: ["waitlist-signup-count"] });
  };

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen, eventDetails) => {
        if (!nextOpen) {
          eventDetails.cancel();
        }
      }}
    >
      <PopoverTrigger
        nativeButton={false}
        render={
          <span
            aria-hidden
            className="pointer-events-none fixed right-4 bottom-2 md:right-6 md:bottom-6"
          />
        }
      />
      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={8}
        initialFocus={false}
        positioner={{
          disableAnchorTracking: true,
          positionMethod: "fixed",
        }}
        className="w-full max-w-80 overflow-hidden p-0 md:max-w-96"
      >
        <div className="from-primary to-foreground/50 text-primary-foreground relative rounded-t-lg bg-gradient-to-br from-30% px-6 py-5">
          <PopoverHeader className="flex flex-col gap-1 pr-6">
            <PopoverTitle className="tracking-tight leading-tight! text-xl">
              Want to track your{" "}
              <Ring className="size-[1em] inline-block mt-[-0.2em] [--duration:0s]" />{" "}
              loading times?
            </PopoverTitle>
            <PopoverDescription className="text-primary-foreground/85">
              Analytics, metrics and AI to optimize your apps performance.
              Secure, opinionated, 100% yours.
            </PopoverDescription>
          </PopoverHeader>
          <button
            type="button"
            className="absolute top-3 right-3"
            onClick={dismiss}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 items-center w-full pt-0">
          <div className="flex flex-col gap-3 px-2 tracking-tight">
            <p>
              <strong className="font-semibold">1 second</strong> of loading
              time costs you <strong className="font-semibold">20%</strong> of
              users.
            </p>
            <p>Time to fix it.</p>
            <p>One email when we launch. No spam, unsubscribe anytime.</p>
          </div>

          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full"
          >
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="min-w-0 flex-1"
                >
                  <FieldLabel className="sr-only" htmlFor="waitlist-email">
                    Email address
                  </FieldLabel>
                  <Input
                    {...field}
                    id="waitlist-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={fieldState.invalid}
                    className="h-10"
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className={cn("shrink-0 disabled:opacity-100", {
                "bg-[#2dc653] text-primary-foreground":
                  form.formState.isSubmitSuccessful,
              })}
              disabled={
                form.formState.isSubmitting || form.formState.isSubmitSuccessful
              }
            >
              {form.formState.isSubmitting ? (
                <Ring className="size-4" />
              ) : form.formState.isSubmitSuccessful ? (
                <>
                  <Check className="size-4" />
                  You're in, see ya!
                </>
              ) : (
                "I want it!"
              )}
            </Button>
          </form>

          <p className="text-muted-foreground text-center text-sm -mt-0.5">
            <span className="font-semibold">
              {new Intl.NumberFormat("en-US").format((count.data ?? 0) + 147)}
            </span>{" "}
            people already joined!
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
