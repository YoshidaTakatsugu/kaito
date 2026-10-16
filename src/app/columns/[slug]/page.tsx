import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildColumnJsonLd, getColumnBySlug, getColumns, type ColumnArticle } from "@/lib/columns";
import { site } from "@/lib/brand";

type ColumnPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const columns = await getColumns();
  return columns.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ColumnPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getColumnBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.answerFirst,
    alternates: { canonical: `/columns/${article.slug}/` },
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.answerFirst,
      url: `${site.url}/columns/${article.slug}/`,
      type: "article",
      images: [{ url: "/images/columns-stadium.webp", width: 1920, height: 1089, alt: "照明に照らされたスタジアム" }],
    },
  };
}

function ArticleBody({ article }: { article: ColumnArticle }) {
  const blocks = article.blocks ?? article.body.map(text => ({ type: "paragraph" as const, text }));
  const nodes: ReactNode[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === "heading") {
      nodes.push(<h2 key={i} className="pt-5 text-lg font-semibold leading-[1.7] text-white sm:text-xl">{block.text}</h2>);
    } else if (block.type === "list-item") {
      const items = [block.text];
      while (blocks[i + 1]?.type === "list-item") items.push(blocks[++i].text);
      nodes.push(<ul key={i} className="list-disc space-y-2 pl-5 marker:text-[#d6ae64]">{items.map(text => <li key={text}>{text}</li>)}</ul>);
    } else {
      nodes.push(<p key={i}>{block.text}</p>);
    }
  }
  return <div className="space-y-5 text-[15px] leading-[1.9] text-slate-300 sm:text-base">{nodes}</div>;
}

export default async function ColumnDetailPage({ params }: ColumnPageProps) {
  const { slug } = await params;
  const article = await getColumnBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = JSON.stringify(buildColumnJsonLd(article)).replace(
    /</g,
    "\\u003c",
  );

  return (
    <article className="bg-[#041225] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
        <header className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16">
          <Image src="/images/columns-stadium.webp" alt="照明に照らされたスタジアム" fill loading="eager" sizes="100vw" className="-z-20 object-cover object-[50%_60%] opacity-60" />
          <div className="absolute inset-0 -z-10 bg-[#031226]/60" />
          <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            {article.category}
          </p>
          <h1 className="mt-5 font-serif text-2xl leading-[1.65] sm:text-[32px]">
            {article.title}
          </h1>
          <p className="mt-5 text-sm leading-7 text-cyan-50 sm:text-base">
            {article.answerFirst}
          </p>
          </div>
        </header>
      <div className="mx-auto grid w-full max-w-3xl gap-10 px-5 py-10 sm:px-8 sm:py-14">
        <ArticleBody article={article} />

        {article.faqs.length > 0 && <section className="border-t border-cyan-100/15 pt-8">
          <h2 className="text-lg font-semibold sm:text-xl">この記事のFAQ</h2>
          <dl className="mt-6 grid gap-5">
            {article.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-t border-cyan-100/10 pt-5"
              >
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 leading-8 text-slate-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>}

        <Link
          href="/columns/"
          className="inline-flex min-h-11 w-fit items-center justify-center border border-cyan-100/30 px-5 text-sm font-semibold text-cyan-50 transition-colors duration-200 hover:border-cyan-100/70 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
        >
          コラム一覧へ
        </Link>
      </div>
    </article>
  );
}
