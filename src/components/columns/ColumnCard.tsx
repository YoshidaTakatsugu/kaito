import Link from "next/link";
import type { ColumnArticle } from "@/lib/columns";

type ColumnCardProps = {
  article: ColumnArticle;
};

export function ColumnCard({ article }: ColumnCardProps) {
  return (
    <article className="border-t border-cyan-100/15 py-7">
      <Link
        href={`/columns/${article.slug}/`}
        className="group grid gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100 lg:grid-cols-[0.28fr_1fr]"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-100">
            {article.category}
          </p>
          <time dateTime={article.publishedAt} className="mt-3 block text-xs text-slate-400">{article.publishedAt}</time>
        </div>
        <div>
          <h2 className="text-lg font-semibold leading-[1.7] text-white transition-colors duration-200 group-hover:text-cyan-100 sm:text-xl">
            {article.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {article.answerFirst}
          </p>
        </div>
      </Link>
    </article>
  );
}
