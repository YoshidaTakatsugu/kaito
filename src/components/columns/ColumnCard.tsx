import Link from "next/link";
import type { ColumnArticle } from "@/lib/columns";

type ColumnCardProps = {
  article: ColumnArticle;
};

export function ColumnCard({ article }: ColumnCardProps) {
  return (
    <article className="border-t border-[#001f3f]/15 py-7">
      <Link
        href={`/columns/${article.slug}/`}
        className="group grid gap-5 lg:grid-cols-[0.28fr_1fr]"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-[#0b5f8f]">
            {article.category}
          </p>
          <p className="mt-3 text-sm text-slate-500">{article.publishedAt}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold leading-snug text-[#001f3f] transition-colors duration-200 group-hover:text-[#0b5f8f]">
            {article.title}
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-700">
            {article.answerFirst}
          </p>
        </div>
      </Link>
    </article>
  );
}
