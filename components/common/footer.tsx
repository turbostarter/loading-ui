import { TURBOSTARTER_URL } from "@/components/home/sponsors/turbostarter";
import { X_USERNAME } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="container border-x py-4 text-center md:py-6">
      <p className="text-muted-foreground text-sm">
        Made with ❤️ and{" "}
        <a
          href={`${TURBOSTARTER_URL}?utm_source=loading-ui&utm_medium=referral`}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          TurboStarter
        </a>{" "}
        by{" "}
        <a
          href={`https://x.com/${X_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          @{X_USERNAME}
        </a>
      </p>
    </footer>
  );
};
