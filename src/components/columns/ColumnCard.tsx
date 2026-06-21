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
        className="group grid gap-5 lg:grid-cols-[0.28fr_1fr]"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-100">
            {article.category}
          </p>
          <p className="mt-3 text-sm text-slate-400">{article.publishedAt}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-cyan-100">
            {article.title}
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            {article.answerFirst}
          </p>
        </div>
      </Link>
    </article>
  );
}
