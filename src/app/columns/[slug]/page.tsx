import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildColumnJsonLd, getColumnBySlug, getColumns } from "@/lib/columns";
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
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.answerFirst,
      url: `${site.url}/columns/${article.slug}/`,
      type: "article",
    },
  };
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
  const displayFaqs = article.faqs.length
    ? article.faqs
    : [
        {
          question: article.title,
          answer: article.answerFirst,
        },
      ];

  return (
    <article className="bg-white px-5 py-24 text-[#001f3f] sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="mx-auto grid w-full max-w-5xl gap-12">
        <header>
          <p className="text-xs font-semibold tracking-[0.28em] text-[#0b5f8f]">
            {article.category}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-8 font-serif text-2xl leading-[1.85] text-[#001f3f] sm:text-3xl">
            {article.answerFirst}
          </p>
        </header>

        <div className="grid gap-7 text-lg leading-9 text-slate-700">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="border-t border-[#001f3f]/15 pt-10">
          <h2 className="text-2xl font-semibold">この記事のFAQ</h2>
          <dl className="mt-6 grid gap-5">
            {displayFaqs.map((faq) => (
              <div key={faq.question} className="border-t border-[#001f3f]/10 pt-5">
                <dt className="font-semibold text-[#001f3f]">{faq.question}</dt>
                <dd className="mt-3 leading-8 text-slate-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Link
          href="/columns/"
          className="inline-flex w-fit min-h-11 items-center justify-center rounded-full border border-[#001f3f]/20 px-5 text-sm font-semibold tracking-[0.16em] text-[#001f3f] transition-colors duration-200 hover:bg-[#001f3f] hover:text-white"
        >
          コラム一覧へ
        </Link>
      </div>
    </article>
  );
}
