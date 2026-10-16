"use client";

import { useMemo, useState } from "react";
import type { ColumnArticle } from "@/lib/columns";
import { ColumnCard } from "./ColumnCard";

function normalize(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase("ja");
}

export function ColumnSearch({ articles }: { articles: ColumnArticle[] }) {
  const [query, setQuery] = useState("");
  const index = useMemo(() => articles.map(article => ({
    article,
    text: normalize([article.title, article.category, article.answerFirst, ...article.body, ...article.faqs.flatMap(faq => [faq.question, faq.answer])].join("\n")),
  })), [articles]);
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  const results = index.filter(item => words.every(word => item.text.includes(word)));

  return (
    <div>
      <label htmlFor="column-search" className="block text-sm font-semibold text-slate-100">コラムを検索</label>
      <input id="column-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="キーワードを入力" maxLength={200} autoComplete="off" aria-controls="column-results" className="mt-3 block min-h-12 w-full max-w-xl rounded border border-white/25 bg-[#071a32] px-4 py-3 text-base text-white placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ae64]" />
      <p role="status" aria-live="polite" aria-atomic="true" className="mt-4 text-sm text-slate-400">{results.length}件</p>
      <div id="column-results" className="mt-6">
        {results.map(({ article }) => <ColumnCard key={article.slug} article={article} />)}
        {!results.length && <p className="border-t border-white/15 py-8 text-sm leading-7 text-slate-300">一致する記事がありません。別のキーワードでお試しください。</p>}
      </div>
    </div>
  );
}
