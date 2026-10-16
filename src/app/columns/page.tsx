import type { Metadata } from "next";
import Image from "next/image";
import { ColumnSearch } from "@/components/columns/ColumnSearch";
import { getColumns } from "@/lib/columns";
import { site } from "@/lib/brand";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "アスリートの声とNARERUからのお知らせ。タイトルや本文のキーワードから記事を検索できます。",
  alternates: { canonical: "/columns/" },
  openGraph: {
    title: `コラム | ${site.name}`,
    description:
      "アスリートの声とNARERUからのお知らせを掲載しています。",
    url: `${site.url}/columns/`,
    images: [{ url: "/images/columns-stadium.webp", width: 1920, height: 1089, alt: "照明に照らされたスタジアム" }],
  },
};

export default async function ColumnsPage() {
  const columns = await getColumns();

  return (
    <div className="bg-[#041225] text-white">
      <header className="relative isolate flex min-h-72 items-end overflow-hidden px-5 py-10 sm:min-h-80 sm:px-8 sm:py-14">
        <Image src="/images/columns-stadium.webp" alt="照明に照らされたスタジアム" fill loading="eager" sizes="100vw" className="-z-20 object-cover object-[50%_60%] opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[#031226]/45" />
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100">COLUMNS</p>
          <h1 className="mt-4 font-serif text-[28px] leading-relaxed sm:text-4xl">コラム</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100 sm:text-base">アスリートの声と、NARERUの取り組みをお届けします。</p>
        </div>
      </header>
      <section aria-label="コラム一覧と検索" className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-5xl"><ColumnSearch articles={columns} /></div>
      </section>
    </div>
  );
}
