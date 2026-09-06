import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/brand";
import { mentalCoachingPage as content } from "@/lib/mental-coaching";

export const metadata: Metadata = {
  title: "スポーツメンタルコーチングとは",
  description: content.definition,
  alternates: {
    canonical: "/mental-coaching/",
  },
  openGraph: {
    title: `スポーツメンタルコーチングとは | ${site.name}`,
    description: content.definition,
    url: `${site.url}/mental-coaching/`,
    images: [
      {
        url: content.teachingComparison.image.src,
        width: content.teachingComparison.image.width,
        height: content.teachingComparison.image.height,
        alt: content.teachingComparison.image.alt,
      },
    ],
  },
};

type ParagraphsProps = {
  items: readonly string[];
  className?: string;
};

function Paragraphs({ items, className = "" }: ParagraphsProps) {
  return (
    <div className={`space-y-6 text-base leading-9 text-slate-300 sm:text-lg ${className}`}>
      {items.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function MentalCoachingPage() {
  const pageUrl = `${site.url}/mental-coaching/`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.definition,
        inLanguage: "ja",
        about: { "@id": `${site.url}/#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "HOME",
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

      <header className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
        <Image
          src="/images/S__3153967_0.jpg"
          alt="アスリートの内側にある答えを対話で引き出すスポーツメンタルコーチ押田海斗"
          fill
          sizes="100vw"
          loading="eager"
          className="-z-20 object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,13,29,0.98)_0%,rgba(3,13,29,0.88)_45%,rgba(3,13,29,0.3)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,13,29,0.96)_0%,transparent_60%)]" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#67d5ae]">
            SPORTS MENTAL COACHING
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.35] text-white sm:text-6xl lg:text-7xl">
            <span className="block">スポーツメンタル</span>
            <span className="block">コーチングとは？</span>
          </h1>
          <p className="mt-8 max-w-4xl border-l-2 border-[#d6ae64] pl-5 font-serif text-xl leading-[1.9] text-cyan-50 sm:pl-7 sm:text-3xl">
            {content.definition}
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
            {content.introduction}
          </p>
        </div>
      </header>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
          <header>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
              01 / COACHING
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.45] sm:text-5xl">
              {content.coaching.title}
            </h2>
          </header>
          <Paragraphs items={content.coaching.paragraphs} />
        </div>
      </section>

      <section className="border-y border-cyan-100/10 bg-[#071a32] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <header>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
                02 / METHOD
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.45] sm:text-5xl">
                {content.teachingComparison.title}
              </h2>
            </header>
            <Paragraphs items={content.teachingComparison.paragraphs} />
          </div>

          <figure className="mt-14 overflow-hidden border border-[#d6ae64]/25 bg-[#f7f5ee] p-2 sm:p-4">
            <Image
              src={content.teachingComparison.image.src}
              alt={content.teachingComparison.image.alt}
              width={content.teachingComparison.image.width}
              height={content.teachingComparison.image.height}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="h-auto w-full"
            />
            <figcaption className="sr-only">
              {content.teachingComparison.image.alt}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <header className="grid gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
                03 / ACCEL &amp; BRAKE
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.45] sm:text-5xl">
                {content.sportsMentalDifference.title}
              </h2>
            </div>
            <Paragraphs items={content.sportsMentalDifference.introduction} />
          </header>

          <div className="mt-16 grid gap-px overflow-hidden border border-cyan-100/15 bg-cyan-100/15 lg:grid-cols-2">
            <section className="bg-[#071a32] px-6 py-9 sm:px-10 sm:py-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#d6ae64]">
                ACCEL
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-[1.6] sm:text-3xl">
                {content.sportsMentalDifference.accelerator.title}
              </h3>
              <Paragraphs
                items={content.sportsMentalDifference.accelerator.paragraphs}
                className="mt-7"
              />
            </section>

            <section className="bg-[#071a32] px-6 py-9 sm:px-10 sm:py-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#67d5ae]">
                RELEASE THE BRAKE
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-[1.6] sm:text-3xl">
                {content.sportsMentalDifference.brake.title}
              </h3>
              <Paragraphs
                items={content.sportsMentalDifference.brake.beforeExamples}
                className="mt-7"
              />
              <blockquote className="my-8 border-l-2 border-[#b76767] bg-[#4c2029]/35 px-5 py-5 font-serif text-lg leading-9 text-rose-50">
                {content.sportsMentalDifference.brake.examples}
              </blockquote>
              <Paragraphs
                items={content.sportsMentalDifference.brake.afterExamples}
              />
            </section>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100/10 bg-[#06172d] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.52fr_1fr] lg:gap-24">
          <header>
            <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
              04 / IDEAL MINDSET
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.45] sm:text-5xl">
              {content.resultMindset.title}
            </h2>
            <Paragraphs
              items={content.resultMindset.beforeExamples}
              className="mt-9"
            />
          </header>

          <div>
            <ol className="border-y border-cyan-100/15">
              {content.resultMindset.examples.map((example, index) => (
                <li
                  key={example}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-cyan-100/10 py-6 last:border-b-0 sm:grid-cols-[3.5rem_1fr]"
                >
                  <span className="font-serif text-2xl text-[#67d5ae]">
                    0{index + 1}
                  </span>
                  <span className="text-lg font-semibold leading-8 text-cyan-50 sm:text-xl">
                    {example}
                  </span>
                </li>
              ))}
            </ol>
            <Paragraphs
              items={content.resultMindset.afterExamples}
              className="mt-10"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <header className="grid gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
                05 / SELF-IMAGE
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.45] sm:text-5xl">
                {content.visibleResults.title}
              </h2>
            </div>
            <Paragraphs items={content.visibleResults.introduction} />
          </header>

          <figure className="mt-14 overflow-hidden border border-[#d6ae64]/25 bg-[#f7f5ee] p-2 sm:p-4">
            <Image
              src={content.visibleResults.image.src}
              alt={content.visibleResults.image.alt}
              width={content.visibleResults.image.width}
              height={content.visibleResults.image.height}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="h-auto w-full"
            />
            <figcaption className="sr-only">
              {content.visibleResults.image.alt}
            </figcaption>
          </figure>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <dl className="border-t border-cyan-100/15">
              {content.visibleResults.levels.map((level) => (
                <div
                  key={level.name}
                  className="border-b border-cyan-100/15 py-6"
                >
                  <dt className="text-lg font-semibold text-cyan-50">
                    {level.name}
                  </dt>
                  <dd className="mt-3 leading-8 text-slate-300">
                    {level.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="space-y-6 text-base leading-9 text-slate-300 sm:text-lg">
              {content.visibleResults.explanation.map((paragraph, index) =>
                index === 3 || index === 6 ? (
                  <blockquote
                    key={paragraph}
                    className="border-l-2 border-[#d6ae64] bg-white/[0.045] px-5 py-4 font-serif text-xl leading-9 text-white"
                  >
                    {paragraph}
                  </blockquote>
                ) : (
                  <p key={paragraph}>{paragraph}</p>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cyan-100/10 bg-[#071a32] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
            06 / OUR PURPOSE
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.45] sm:text-6xl">
            {content.goal.title}
          </h2>
          <Paragraphs items={content.goal.paragraphs} className="mt-12 text-left" />

          <div className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/trial/"
              className="inline-flex min-h-14 items-center justify-center bg-[#d6ae64] px-7 text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              体験コーチングについて見る
            </Link>
            <Link
              href="/#voice"
              className="inline-flex min-h-14 items-center justify-center border border-cyan-100/25 px-7 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:border-cyan-100/60 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
            >
              お客様の声を見る
            </Link>
          </div>

          <p className="mx-auto mt-14 max-w-4xl border-t border-cyan-100/15 pt-8 text-left text-xs leading-7 text-slate-400 sm:text-sm">
            {content.goal.notice}
          </p>
        </div>
      </section>
    </article>
  );
}
