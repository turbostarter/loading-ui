import { Examples } from "@/components/home/examples";
import { Hero } from "@/components/home/hero";

export default function Page(_: PageProps<"/">) {
  return (
    <>
      <Hero />
      <Examples />
    </>
  );
}
