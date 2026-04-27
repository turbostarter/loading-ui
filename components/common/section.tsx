import { cn } from "@/lib/utils";

export const Section = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <div className="w-full border-b">
      <section
        className={cn("container px-6 py-16 md:py-24 lg:py-32", className)}
        {...props}
      />
    </div>
  );
};

export const HeroSection = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <Section
      id="hero"
      className={cn(
        "flex flex-col items-center justify-center gap-6",
        className,
      )}
      {...props}
    />
  );
};

export const HeroSectionTitle = (props: React.ComponentProps<"h1">) => {
  return (
    <h1
      className="max-w-2xl text-center text-4xl font-semibold tracking-[-0.06em]! text-balance sm:text-5xl md:text-6xl xl:text-7xl"
      {...props}
    />
  );
};

export const HeroSectionDescription = (props: React.ComponentProps<"p">) => {
  return (
    <p
      className="text-muted-foreground mx-auto max-w-2xl text-center lg:text-lg xl:text-xl 2xl:text-2xl"
      {...props}
    />
  );
};
