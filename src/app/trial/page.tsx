import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionReveal } from "@/components/home/SectionReveal";
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
        url: "/images/S__3153969_0.jpg",
        width: 1030,
        height: 687,
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
          price: "5500",
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
    <article className="bg-[#041225] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <header className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
        <Image
          src="/images/S__3153969_0.jpg"
          alt="体験コーチングでアスリートの可能性に寄り添うスポーツメンタルコーチ押田海斗"
          fill
          sizes="100vw"
          loading="eager"
          className="-z-30 object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,13,29,0.98)_0%,rgba(3,13,29,0.91)_43%,rgba(3,13,29,0.3)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,13,29,0.98)_0%,rgba(3,13,29,0.16)_72%)]" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#67d5ae]">
              {content.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-7 font-serif text-xl leading-[1.8] text-cyan-50 sm:text-3xl">
              {content.statement}
            </p>
            <p className="mt-2 max-w-2xl font-serif text-3xl leading-[1.45] text-white sm:text-5xl">
              {content.headline}
            </p>
            <div className="mt-8 max-w-2xl space-y-1 text-sm leading-7 text-slate-200 sm:text-base">
              {content.introduction.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="pt-3 leading-8 text-slate-300">
                {content.introduction[3]}
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                {content.price}
              </p>
              <Link
                href={content.application.href}
                className="inline-flex min-h-14 items-center justify-center bg-[#d6ae64] px-7 text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {content.application.label}
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="border-y border-cyan-100/10 bg-[#071a32] px-5 py-20 sm:px-8 lg:py-28">
        <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
          <header>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
              FOR ATHLETES
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.4] sm:text-5xl">
              {content.audience.title}
            </h2>
          </header>

          <div>
            <ul className="grid gap-px border border-cyan-100/15 bg-cyan-100/15 sm:grid-cols-2">
              {content.audience.items.map((item) => (
                <li
                  key={item}
                  className="flex min-h-28 gap-4 bg-[#071a32] p-6 text-base font-semibold leading-8 text-cyan-50"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-7 shrink-0 place-items-center border border-[#67d5ae]/60 text-sm text-[#67d5ae]"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-l-2 border-[#d6ae64] pl-6 sm:pl-8">
              <p className="font-serif text-2xl leading-[1.7] text-white sm:text-3xl">
                {content.audience.statement}
              </p>
              <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                {content.audience.closing}
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <SectionReveal>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
              THREE BENEFITS
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.4] sm:text-5xl">
              {content.benefits.title}
            </h2>
          </SectionReveal>

          <div className="mt-12 space-y-5">
            {content.benefits.items.map((benefit, index) => (
              <SectionReveal key={benefit.title}>
                <article className="grid gap-7 border border-cyan-100/15 bg-white/[0.035] px-6 py-8 sm:px-9 sm:py-10 lg:grid-cols-[8rem_0.72fr_1fr] lg:gap-10">
                  <p className="font-serif text-5xl text-[#67d5ae]" aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h3 className="text-2xl font-semibold leading-[1.6] text-white sm:text-3xl">
                    {benefit.title}
                  </h3>
                  <div className="space-y-5 leading-8 text-slate-300">
                    {"examples" in benefit ? (
                      <blockquote className="space-y-1 border-l-2 border-[#d6ae64] pl-5 font-serif text-lg leading-8 text-cyan-50">
                        {benefit.examples.map((example) => (
                          <p key={example}>{example}</p>
                        ))}
                      </blockquote>
                    ) : null}
                    {benefit.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {"closing" in benefit ? <p>{benefit.closing}</p> : null}
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100/10 bg-[#06172d] px-5 py-20 sm:px-8 lg:py-24">
        <SectionReveal className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 border border-dashed border-cyan-100/25 px-6 py-10 sm:px-10 lg:grid-cols-[0.48fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
                ATHLETE VOICE
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-[1.45] sm:text-4xl">
                {content.athleteChanges.title}
              </h2>
            </div>
            <p className="border-l border-cyan-100/20 pl-6 leading-8 text-slate-300">
              {content.athleteChanges.note}
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
          <header>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
              SESSION DETAILS
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.4] sm:text-5xl">
              {content.overview.title}
            </h2>
          </header>

          <dl className="border-y border-cyan-100/20">
            {content.overview.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-b border-cyan-100/10 py-6 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="text-xs font-semibold tracking-[0.16em] text-[#67d5ae]">
                  {item.label}
                </dt>
                <dd className="space-y-2 font-semibold leading-8 text-white">
                  {item.values.map((value) => (
                    <p key={value}>{value}</p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </SectionReveal>
      </section>

      <section className="border-y border-cyan-100/10 bg-[#071a32] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <SectionReveal className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <header>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
                SESSION FLOW
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.4] sm:text-5xl">
                {content.flow.title}
              </h2>
            </header>

            <ol className="border-t border-cyan-100/20">
              {content.flow.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-5 border-b border-cyan-100/15 py-7 sm:grid-cols-[4rem_1fr] sm:py-9"
                >
                  <span className="font-serif text-3xl text-[#d6ae64]" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-8 text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <div className="mt-4 space-y-3 leading-8 text-slate-300">
                      {step.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </SectionReveal>

          <SectionReveal className="mt-12 flex flex-col gap-5 border border-[#d6ae64]/30 bg-[#031226] px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#d6ae64]">
                FIRST STEP
              </p>
              <p className="mt-3 font-serif text-2xl leading-[1.55] text-white">
                {content.headline}
              </p>
            </div>
            <Link
              href={content.application.href}
              className="inline-flex min-h-14 shrink-0 items-center justify-center bg-[#d6ae64] px-7 text-center text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {content.application.label}
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-8 lg:py-28">
        <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
          <header>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
              FAQ
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.4] sm:text-5xl">
              {content.faq.title}
            </h2>
          </header>

          <div className="border-t border-cyan-100/20">
            {content.faq.items.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-cyan-100/15 py-2"
                open={index === 0}
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold leading-8 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="mr-3 font-serif text-2xl text-[#67d5ae]">Q.</span>
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center border border-cyan-100/25 text-xl font-light text-[#67d5ae] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-7 pl-0 leading-8 text-slate-300 sm:pl-12">
                  {item.answers.map((answer) => (
                    <p key={answer} className="mt-3 first:mt-0">
                      {answer}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="relative isolate overflow-hidden border-t border-cyan-100/10 px-5 py-24 sm:px-8 lg:py-32">
        <Image
          src="/images/S__3153968_0.jpg"
          alt="目標に向かう最初の一歩を応援するスポーツメンタルコーチ押田海斗"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,13,29,0.98),rgba(3,13,29,0.72))]" />
        <SectionReveal className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
            START HERE
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.45] sm:text-6xl">
            {content.statement}
            <span className="mt-2 block">{content.headline}</span>
          </h2>
          <p className="mt-7 font-serif text-2xl text-white">{content.price}</p>
          <Link
            href={content.application.href}
            className="mt-9 inline-flex min-h-14 w-full items-center justify-center bg-[#d6ae64] px-7 text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            {content.application.label}
            <span aria-hidden="true" className="ml-3">
              →
            </span>
          </Link>
        </SectionReveal>
      </section>
    </article>
  );
}
