import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/brand";
import { trialPageContent as content } from "@/lib/trial";

export const metadata: Metadata = {
  title: content.title,
  description: content.introduction[3],
  alternates: {
    canonical: "/trial/",
  },
  openGraph: {
    title: `${content.title} | ${site.name}`,
    description: content.introduction[3],
    url: `${site.url}/trial/`,
    images: [
      {
        url: "/images/S__3153967_0.jpg",
        width: 1045,
        height: 697,
        alt: "体験コーチングでアスリートの可能性に寄り添うスポーツメンタルコーチ押田海斗",
      },
    ],
  },
};

export default function TrialPage() {
  const pageUrl = `${site.url}/trial/`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.introduction[3],
        inLanguage: "ja",
        mainEntity: { "@id": `${pageUrl}#service` },
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
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: content.title,
        serviceType: "スポーツメンタルコーチング",
        description: content.introduction[3],
        provider: { "@id": `${site.url}/#person` },
        audience: {
          "@type": "Audience",
          audienceType: content.overview.items[2].values[0],
        },
        offers: {
          "@type": "Offer",
          price: "11000",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock",
          url: pageUrl,
          description: `${content.price}。対面 / オンライン。`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answers.join(""),
          },
        })),
      },
    ],
  };
  const jsonLd = JSON.stringify(pageJsonLd).replace(/</g, "\\u003c");

  return (
    <article className="trial-page bg-[#041225] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <header>
        <div className="relative isolate flex min-h-60 items-end overflow-hidden bg-[#031226] px-5 py-7 sm:min-h-72 sm:px-8 sm:py-10 lg:min-h-[22rem]">
          <div className="absolute inset-0 -z-20 lg:left-[30%]">
            <Image
              src="/images/S__3153967_0.jpg"
              alt="ノートを手にアスリートとの対話に向き合うスポーツメンタルコーチ押田海斗"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              loading="eager"
              className="object-cover object-[60%_12%] lg:object-[60%_4%]"
            />
            <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#031226,transparent_40%)] lg:block" />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,13,29,0.9),rgba(3,13,29,0.15)_75%)]" />
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#91e2c6]">{content.eyebrow}</p>
            <h1 className="mt-3 font-serif text-[28px] leading-relaxed sm:text-4xl">{content.title}</h1>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-10">
          <div className="max-w-3xl">
            <p className="text-sm leading-6 text-[#e8c980]">{content.statement}</p>
            <p className="mt-2 font-serif text-xl leading-[1.6] sm:text-2xl">{content.headline}</p>
            <p className="mt-4 text-sm leading-[1.8] text-slate-300 sm:text-base">{content.introduction[3]}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-xl font-semibold text-white">{content.price}</p>
              <Link href={content.application.href} className="inline-flex min-h-12 items-center justify-center rounded bg-[#d6ae64] px-5 py-3 text-center text-sm font-semibold text-[#031226] hover:bg-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {content.application.label}<span aria-hidden="true" className="ml-3">→</span>
              </Link>
            </div>
          </div>
          <nav aria-label="体験コーチングのページ内メニュー" className="mt-5 flex gap-5 overflow-x-auto border-t border-white/10 text-xs text-slate-300">
            {[
              ["#trial-benefits", "3つのメリット"],
              ["#trial-overview", "料金・概要"],
              ["#trial-flow", "当日の流れ"],
              ["#faq", "よくある質問"],
            ].map(([href, label]) => <a key={href} href={href} className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ae64]">{label}</a>)}
          </nav>
        </div>
      </header>

      <section id="trial-audience" className="border-y border-white/10 bg-[#071a32] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
          <header>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#91e2c6]">FOR ATHLETES</p>
            <h2 className="mt-3 font-serif text-2xl leading-[1.5] sm:text-3xl">{content.audience.title}</h2>
          </header>
          <div>
            <p className="text-sm leading-[1.8] text-slate-300">{content.introduction.slice(0, 3).join("")}</p>
            <ul className="mt-4 border-t border-white/15">
              {content.audience.items.map(item => <li key={item} className="border-b border-white/10 py-3 text-sm font-semibold leading-[1.8] text-cyan-50">{item}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-[1.8] text-slate-300">{content.audience.closing}</p>
          </div>
        </div>
      </section>

      <section id="trial-benefits" className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#e8c980]">THREE BENEFITS</p>
          <h2 className="mt-3 font-serif text-[22px] leading-[1.5] sm:text-3xl">{content.benefits.title.replace("3つのこと", "")}<span className="block sm:inline">3つのこと</span></h2>
          <div role="region" aria-label="体験コーチングの3つのメリット" tabIndex={0} className="trial-benefits-scroller mt-6 grid auto-cols-[90%] grid-flow-col snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6ae64] md:auto-cols-auto md:grid-flow-row md:grid-cols-3 md:overflow-visible md:pb-0">
            {content.benefits.items.map((benefit, index) => {
              const examples = "examples" in benefit ? <blockquote className="space-y-1 border-l-2 border-[#d6ae64]/60 pl-3 text-cyan-50">{benefit.examples.map(example => <p key={example}>{example}</p>)}</blockquote> : null;
              return (
                <article key={benefit.title} className="min-w-0 snap-start border border-white/15 bg-white/[0.035] p-5 sm:p-6">
                  <p className="text-sm font-semibold text-[#91e2c6]" aria-hidden="true">0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-[1.6]">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-slate-300">{benefit.paragraphs[0]}</p>
                  <details className="group mt-4 border-t border-white/15">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 text-sm font-semibold text-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ae64] [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">詳しく見る</span><span className="hidden group-open:inline">説明を閉じる</span>
                    </summary>
                    <div className="space-y-3 pb-1 text-sm leading-[1.8] text-slate-300">
                      {index === 1 ? examples : null}
                      {benefit.paragraphs.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                      {index !== 1 ? examples : null}
                      {"closing" in benefit ? <p>{benefit.closing}</p> : null}
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="trial-overview" className="border-y border-white/10 bg-[#071a32] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
          <header>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#e8c980]">SESSION DETAILS</p>
            <h2 className="mt-3 font-serif text-2xl leading-[1.5] sm:text-3xl">{content.overview.title}</h2>
          </header>
          <dl className="border-t border-white/15">
            {content.overview.items.map(item => (
              <div key={item.label} className="grid gap-2 border-b border-white/10 py-4 sm:grid-cols-[6rem_1fr] sm:gap-5">
                <dt className="text-xs font-semibold leading-6 text-[#91e2c6]">{item.label}</dt>
                <dd>
                  {item.values.map(value => <p key={value} className="text-sm font-semibold leading-[1.8]">{value}</p>)}
                  {"note" in item ? <p className="mt-2 text-xs font-normal leading-[1.8] text-slate-400">{item.note}</p> : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="trial-flow" className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
          <header>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#91e2c6]">SESSION FLOW</p>
            <h2 className="mt-3 font-serif text-2xl leading-[1.5] sm:text-3xl">{content.flow.title}</h2>
          </header>
          <ol className="border-t border-white/15">
            {content.flow.steps.map(step => (
              <li key={step.title} className="border-b border-white/10 py-4">
                <h3 className="text-[15px] font-semibold leading-[1.6] text-[#e8c980]">{step.title}</h3>
                <div className="mt-2 space-y-2 text-sm leading-[1.8] text-slate-300">{step.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="border-y border-white/10 bg-[#071a32] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
          <header>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#91e2c6]">FAQ</p>
            <h2 className="mt-3 font-serif text-2xl leading-[1.5] sm:text-3xl">{content.faq.title}</h2>
          </header>
          <div className="border-t border-white/15">
            {content.faq.items.map((item, index) => (
              <details key={item.question} className="group border-b border-white/10" open={index === 0}>
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold leading-[1.8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6ae64] [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span><span aria-hidden="true" className="text-xl font-normal text-[#91e2c6] group-open:rotate-45">+</span>
                </summary>
                <div className="space-y-2 pb-4 text-sm leading-[1.8] text-slate-300">{item.answers.map(answer => <p key={answer}>{answer}</p>)}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="trial-booking" className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl leading-[1.5] sm:text-3xl">体験コーチングのお申し込み</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">ご希望の形式・日程をお知らせください。</p>
          </div>
          <Link href={content.application.href} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded bg-[#d6ae64] px-5 py-3 text-center text-sm font-semibold text-[#031226] hover:bg-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            {content.application.label}<span aria-hidden="true" className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
