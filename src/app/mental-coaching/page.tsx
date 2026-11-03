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

const sections = [
  { id: "coaching", label: "コーチングとは" },
  { id: "method", label: "ティーチングとの違い" },
  { id: "accel-brake", label: "スポーツメンタルの役割" },
  { id: "mindset", label: "結果に相応しいメンタル" },
  { id: "self-image", label: "セルフイメージと結果" },
  { id: "purpose", label: "私たちが目指すもの" },
] as const;

function SectionHeading({
  number,
  eyebrow,
  lines,
}: {
  number: string;
  eyebrow: string;
  lines: readonly string[];
}) {
  return (
    <header className="mental-section-heading">
      <div className="mental-section-meta">
        <p>
          {number} / {eyebrow}
        </p>
        <a href="#contents">目次へ戻る</a>
      </div>
      <h2>
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
    </header>
  );
}

function Paragraphs({ items, className = "" }: ParagraphsProps) {
  return (
    <div
      className={`mental-coaching-prose space-y-4 text-base leading-[1.8] text-slate-300 ${className}`}
    >
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
        hasPart: sections.map((section) => ({
          "@type": "WebPageElement",
          "@id": `${pageUrl}#${section.id}`,
          name: section.label,
        })),
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
    <article className="mental-coaching-page bg-[#041225] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <header className="mental-page-hero relative isolate flex items-end overflow-hidden px-5 sm:px-8">
        <Image
          src="/images/mental-volleyball.webp"
          alt="試合でスパイクとブロックに挑むバレーボール選手たち"
          fill
          sizes="100vw"
          loading="eager"
          className="-z-20 object-cover object-[54%_20%]"
        />
        <div className="mental-hero-shade absolute inset-0 -z-10" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#67d5ae]">
            SPORTS MENTAL COACHING
          </p>
          <h1 className="mental-page-title mt-5 font-serif text-white">
            <span className="block">スポーツメンタル</span>
            <span className="block">コーチングとは？</span>
          </h1>
        </div>
      </header>

      <div className="mental-page-intro mx-auto max-w-7xl px-5 sm:px-8">
        <p className="max-w-4xl font-serif text-lg leading-[1.85] text-cyan-50 sm:text-[22px]">
          {content.definition}
        </p>
        <p className="mt-4 text-sm leading-[1.8] text-slate-300">
          {content.introduction}
        </p>
      </div>

      <div className="mental-reading-layout mx-auto max-w-7xl px-5 sm:px-8">
        <aside className="mental-contents" id="contents">
          <nav aria-labelledby="contents-title">
            <p className="mental-contents-caption">CONTENTS</p>
            <h2 id="contents-title">このページの目次</h2>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="mental-reading-content">
          <section id="coaching" className="mental-reading-section">
            <div className="grid gap-6">
              <SectionHeading
                number="01"
                eyebrow="COACHING"
                lines={[content.coaching.title]}
              />
              <Paragraphs items={content.coaching.paragraphs} />
            </div>
          </section>

          <section id="method" className="mental-reading-section">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid gap-6">
                <SectionHeading
                  number="02"
                  eyebrow="METHOD"
                  lines={["ティーチングと", "コーチングの違い"]}
                />
                <Paragraphs items={content.teachingComparison.paragraphs} />
              </div>

              <figure className="mt-7 overflow-hidden border border-[#d6ae64]/25 bg-[#041225]">
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

          <section id="accel-brake" className="mental-reading-section">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid gap-6">
                <SectionHeading
                  number="03"
                  eyebrow="ACCEL & BRAKE"
                  lines={["コーチングと", "スポーツメンタルコーチングの違い"]}
                />
                <Paragraphs
                  items={content.sportsMentalDifference.introduction}
                />
              </div>

              <div className="mt-7 grid gap-px overflow-hidden border border-cyan-100/15 bg-cyan-100/15">
                <section className="bg-[#071a32] p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#d6ae64]">
                    ACCEL / コーチング
                  </p>
                  <h3 className="mental-role-title mt-3 font-semibold">
                    {content.sportsMentalDifference.accelerator.title}
                  </h3>
                  <Paragraphs
                    items={
                      content.sportsMentalDifference.accelerator.paragraphs
                    }
                    className="mt-5"
                  />
                </section>

                <section className="bg-[#071a32] p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#67d5ae]">
                    RELEASE THE BRAKE / スポーツメンタル
                  </p>
                  <h3 className="mental-role-title mt-3 font-semibold">
                    {content.sportsMentalDifference.brake.title}
                  </h3>
                  <Paragraphs
                    items={content.sportsMentalDifference.brake.beforeExamples}
                    className="mt-5"
                  />
                  <blockquote className="my-6 border-l-2 border-[#b76767] bg-[#4c2029]/35 px-5 py-5 font-serif text-lg leading-[1.8] text-rose-50">
                    {content.sportsMentalDifference.brake.examples}
                  </blockquote>
                  <Paragraphs
                    items={content.sportsMentalDifference.brake.afterExamples}
                  />
                </section>
              </div>
            </div>
          </section>

          <section id="mindset" className="mental-reading-section">
            <div className="grid gap-6">
              <div>
                <SectionHeading
                  number="04"
                  eyebrow="IDEAL MINDSET"
                  lines={["結果に相応しい", "メンタルとは？"]}
                />
                <Paragraphs
                  items={content.resultMindset.beforeExamples}
                  className="mt-6"
                />
              </div>

              <div>
                <ol className="border-y border-cyan-100/15">
                  {content.resultMindset.examples.map((example, index) => (
                    <li
                      key={example}
                      className="grid grid-cols-[2rem_1fr] gap-3 border-b border-cyan-100/10 py-4 last:border-b-0"
                    >
                      <span className="font-serif text-2xl text-[#67d5ae]">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-semibold leading-[1.8] text-cyan-50 sm:text-base">
                        {example}
                      </span>
                    </li>
                  ))}
                </ol>
                <Paragraphs
                  items={content.resultMindset.afterExamples}
                  className="mt-6"
                />
              </div>
            </div>
          </section>

          <section id="self-image" className="mental-reading-section">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid gap-6">
                <SectionHeading
                  number="05"
                  eyebrow="SELF-IMAGE"
                  lines={["目に見える結果は、", "どこから生まれるのか"]}
                />
                <Paragraphs items={content.visibleResults.introduction} />
              </div>

              <figure className="mt-7 overflow-hidden border border-[#d6ae64]/25 bg-[#041225]">
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

              <div className="mt-7 grid gap-7">
                <ul className="list-disc space-y-2 border-t border-cyan-100/15 pl-5 pt-4 text-sm leading-[1.8] text-cyan-50 marker:text-[#d6ae64]">
                  {content.visibleResults.levels.map(level => <li key={level.name}>{level.name}</li>)}
                </ul>
                <div className="mental-coaching-prose space-y-4 text-slate-300">
                  {content.visibleResults.levels.map((level) => (
                    <div
                      key={level.name}
                      className="text-sm leading-[1.8]"
                    >
                      <p>
                        {level.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mental-coaching-prose space-y-4 text-base leading-[1.8] text-slate-300">
                  {content.visibleResults.explanation.map((paragraph, index) =>
                    index === 3 || index === 6 ? (
                      <blockquote
                        key={paragraph}
                        className="border-l-2 border-[#d6ae64] bg-white/[0.045] px-5 py-4 font-serif text-lg leading-[1.8] text-white"
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

          <section id="purpose" className="mental-reading-section">
            <div>
              <SectionHeading
                number="06"
                eyebrow="OUR PURPOSE"
                lines={["スポーツメンタルコーチングが", "目指すもの"]}
              />
              <div className="mental-coaching-prose space-y-4 text-base leading-[1.8] text-slate-300">
                {content.goal.paragraphs.map((paragraph, index) => (
                  <p key={paragraph}>
                    {index === 2 ? <>その先にあるのは、<strong className="font-semibold text-cyan-50">積み上げてきた力を本番で発揮し、理想の結果へつなげられる状態</strong>です。</> : paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/trial/"
                  className="inline-flex min-h-14 items-center justify-center bg-[#d6ae64] px-7 text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  体験コーチングについて見る
                </Link>
                <Link
                  href="/athlete-voices/"
                  className="inline-flex min-h-14 items-center justify-center border border-cyan-100/25 px-7 text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:border-cyan-100/60 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
                >
                  アスリートの声を見る
                </Link>
              </div>

              <p className="mt-7 border-t border-cyan-100/15 pt-6 text-xs leading-[1.8] text-slate-400">
                {content.goal.notice}
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
