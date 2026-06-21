import type { Metadata } from "next";
import { ColumnCard } from "@/components/columns/ColumnCard";
import { getColumns } from "@/lib/columns";
import { site } from "@/lib/brand";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "NARERUのコラムは、トップアスリートが本番で力を出すための疑問にAnswer-Firstで答える1問1答型コンテンツです。",
  openGraph: {
    title: `コラム | ${site.name}`,
    description:
      "トップアスリートの本番発揮、プレッシャー、心技体を1問1答で解説します。",
    url: `${site.url}/columns/`,
  },
};

export default async function ColumnsPage() {
  const columns = await getColumns();

  return (
    <section className="bg-white px-5 py-24 text-[#001f3f] sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#0b5f8f]">
              COLUMNS
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              1問1答で、心のブレーキをほどく。
            </h1>
          </div>
          <p className="font-serif text-2xl leading-[1.85] text-[#001f3f] sm:text-3xl">
            NARERUのコラムは、質問をタイトルにし、冒頭で結論を示すAnswer-First構造です。AI検索にも人にも、答えが迷子にならない形で本番発揮の知識を整理します。
          </p>
        </div>

        <div className="mt-16">
          {columns.map((article) => (
            <ColumnCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
