import { readFileSync } from "node:fs";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { source } from "@/lib/source";
import { Icons } from "@/components/common/icons";

const font = readFileSync("./app/api/og/[...slug]/Geist-Regular.ttf");
const fontBold = readFileSync("./app/api/og/[...slug]/Geist-Bold.ttf");

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const title = page.data.title;
  const description = page.data.description;

  return new ImageResponse(
    <div tw="flex h-full w-full bg-black text-white">
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] bottom-16" />
      <div tw="flex absolute flex-row bottom-24 right-24 text-white">
        <Icons.logo width={48} height={48} />
      </div>
      <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
        <div
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
          style={{
            textWrap: "balance",
            fontWeight: 600,
            fontSize: title && title.length > 20 ? 64 : 80,
            letterSpacing: "-0.04em",
          }}
        >
          {title}
        </div>
        <div
          tw="text-[40px] leading-[1.3] flex-grow-1 text-stone-400"
          style={{
            fontWeight: 500,
            textWrap: "balance",
          }}
        >
          {description}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: font,
          weight: 400,
        },
        {
          name: "Geist",
          data: fontBold,
          weight: 600,
        },
      ],
    },
  );
}

export function generateStaticParams() {
  return source.generateParams().map(page =>
    Object.assign({}, page, {
      ...page,
      slug: [...page.slug, "image.png"],
    }),
  );
}
