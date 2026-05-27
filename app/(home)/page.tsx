import { ColorPicker } from "@/components/common/color-picker";
import { Examples } from "@/components/home/examples/examples";
import { Hero } from "@/components/home/hero";

export default function Page(_: PageProps<"/">) {
  return (
    <>
      <Hero />
      <ColorPicker className="container border-x border-b py-6 md:py-8" />
      <Examples />
    </>
  );
}
