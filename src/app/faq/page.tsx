import type { Metadata } from "next";
import Link from "next/link";

import { SectionReveal } from "@/components/home/SectionReveal";
import { site } from "@/lib/brand";
import { faqPageContent as content, faqPageItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: content.title,
  description: content.introduction,
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    title: `${content.title} | ${site.name}`,
    description: content.introduction,
    url: `${site.url}/faq/`,
  },
};

export default function FaqPage() {
  const pageUrl = `${site.url}/faq/`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.introduction,
        inLanguage: "ja",
        mainEntity: { "@id": `${pageUrl}#faq` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqPageItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answers.join(""),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
  const jsonLd = JSON.stringify(pageJsonLd).replace(/</g, "\\u003c");

  return (
    <article className="bg-[#041225] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <header className="border-b border-cyan-100/10 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#67d5ae]">
              {content.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">
              {content.title}
            </h1>
          </div>
          <div>
            <p className="border-l-2 border-[#d6ae64] pl-5 font-serif text-2xl leading-[1.8] text-cyan-50 sm:pl-7 sm:text-4xl">
              {content.lead}
            </p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {content.introduction}
            </p>
          </div>
        </div>

        <nav
          aria-label="質問カテゴリー"
          className="mx-auto mt-14 grid w-full max-w-7xl gap-px border border-cyan-100/15 bg-cyan-100/15 md:grid-cols-3"
        >
          {content.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group flex min-h-28 items-center justify-between gap-5 bg-[#071a32] px-6 py-6 transition-colors hover:bg-[#0a2340] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
            >
              <span>
                <span className="block text-xs font-semibold tracking-[0.18em] text-[#67d5ae]">
                  {category.number} / {category.eyebrow}
                </span>
                <span className="mt-3 block font-semibold leading-7 text-white">
                  {category.title}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl text-[#d6ae64] transition-transform group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          ))}
        </nav>
      </header>

      {content.categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 border-b border-cyan-100/10 px-5 py-20 sm:px-8 lg:py-28 ${
            categoryIndex % 2 === 1 ? "bg-[#071a32]" : "bg-[#041225]"
          }`}
        >
          <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <header className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-sans text-5xl font-light text-[#67d5ae] sm:text-6xl">
                {category.number}
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
                {category.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-[1.5] sm:text-5xl">
                {category.title}
              </h2>
            </header>

            <div className="border-t border-cyan-100/20">
              {category.items.map((item, itemIndex) => (
                <details
                  key={item.number}
                  className="group border-b border-cyan-100/15"
                  open={categoryIndex === 0 && itemIndex === 0}
                >
                  <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100 [&::-webkit-details-marker]:hidden">
                    <span className="flex gap-4 sm:gap-6">
                      <span className="shrink-0 font-sans text-lg font-semibold text-[#67d5ae] sm:text-xl">
                        {item.number}
                      </span>
                      <span className="text-base font-semibold leading-8 text-white sm:text-xl">
                        {item.question}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-9 shrink-0 place-items-center border border-cyan-100/25 text-xl font-light text-[#67d5ae] transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="grid gap-4 pb-9 pl-0 sm:grid-cols-[3.5rem_1fr] sm:pl-1">
                    <span className="font-sans text-lg font-semibold text-[#d6ae64]">
                      A.
                    </span>
                    <div className="space-y-4 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                      {item.answers.map((answer) => (
                        <p key={answer}>{answer}</p>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </SectionReveal>
        </section>
      ))}

      <section className="bg-[#06172d] px-5 py-24 sm:px-8 lg:py-32">
        <SectionReveal className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
              NEXT STEP
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.5] sm:text-6xl">
              自分の状況について、まずは話してみませんか。
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-300">
              体験コーチングでは、現在の悩みや目標と向き合いながら、理想の結果へ向かう最初の一歩を一緒に見つけていきます。
            </p>
          </div>
          <div className="grid gap-4 sm:flex lg:grid">
            <Link
              href="/trial/"
              className="inline-flex min-h-14 items-center justify-center bg-[#d6ae64] px-7 text-center text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              体験コーチングを見る
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>
            <Link
              href="/contact/"
              className="inline-flex min-h-14 items-center justify-center border border-cyan-100/30 px-7 text-center text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:border-cyan-100/60 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
            >
              お問い合わせ
            </Link>
          </div>
        </SectionReveal>
      </section>
    </article>
  );
}
