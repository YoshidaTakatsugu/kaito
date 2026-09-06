import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionReveal } from "@/components/home/SectionReveal";
import { site } from "@/lib/brand";
import {
  storyPageContent as content,
  type StoryBlock,
} from "@/lib/story";

export const metadata: Metadata = {
  title: "押田海斗のストーリー",
  description:
    "空手選手として勝ち切れなかった経験から、スポーツメンタルコーチになるまでの押田海斗のストーリー。",
  alternates: {
    canonical: "/story/",
  },
  openGraph: {
    title: `押田海斗のストーリー | ${site.name}`,
    description:
      "空手選手として勝ち切れなかった経験から、スポーツメンタルコーチになるまでの押田海斗のストーリー。",
    url: `${site.url}/story/`,
    images: [
      {
        url: "/images/S__3153966_0.jpg",
        width: 852,
        height: 568,
        alt: "自身の競技経験とコーチングへの想いを語るスポーツメンタルコーチ押田海斗",
      },
    ],
  },
};

function StoryBlocks({ blocks }: { blocks: readonly StoryBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-9 text-slate-300 sm:text-lg sm:leading-10">
      {blocks.map((block, index) => {
        if (block.type === "quote") {
          return (
            <blockquote
              key={`${block.type}-${index}`}
              className="border-l-2 border-[#d6ae64] py-1 pl-5 font-serif text-xl leading-[1.8] text-white sm:pl-7 sm:text-2xl"
            >
              {block.text}
            </blockquote>
          );
        }

        if (block.type === "emphasis") {
          return (
            <p
              key={`${block.type}-${index}`}
              className="border border-cyan-100/15 bg-white/[0.04] px-5 py-5 font-semibold leading-9 text-cyan-50 sm:px-7"
            >
              {block.text}
            </p>
          );
        }

        return <p key={`${block.type}-${index}`}>{block.text}</p>;
      })}
    </div>
  );
}

export default function StoryPage() {
  const pageUrl = `${site.url}/story/`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "押田海斗のストーリー",
        headline: content.title,
        description:
          "空手選手として勝ち切れなかった経験から、スポーツメンタルコーチになるまでの押田海斗のストーリー。",
        inLanguage: "ja",
        about: { "@id": `${site.url}/#person` },
        hasPart: content.chapters.map((chapter) => ({
          "@type": "WebPageElement",
          name: chapter.title,
          description: chapter.blocks.map((block) => block.text).join(""),
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
            name: "ストーリー",
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

      <header className="relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden px-5 py-14 sm:px-8 sm:py-24">
        <Image
          src="/images/S__3153966_0.jpg"
          alt="自身の競技経験とコーチングへの想いを語るスポーツメンタルコーチ押田海斗"
          fill
          sizes="100vw"
          loading="eager"
          className="-z-30 object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,13,29,0.98)_0%,rgba(3,13,29,0.88)_48%,rgba(3,13,29,0.2)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,13,29,0.98)_0%,rgba(3,13,29,0.08)_72%)]" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#67d5ae]">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.5] text-white sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <p className="mt-8 border-l-2 border-[#d6ae64] pl-5 text-sm font-semibold tracking-[0.12em] text-cyan-50 sm:text-base">
            スポーツメンタルコーチ 押田海斗
          </p>
        </div>
      </header>

      {content.chapters.map((chapter, index) => (
        <section
          key={chapter.number}
          className={`border-b border-cyan-100/10 px-5 py-20 sm:px-8 lg:py-32 ${
            index % 2 === 1 ? "bg-[#071a32]" : "bg-[#041225]"
          }`}
        >
          <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
            <header className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-sans text-5xl font-light text-[#67d5ae] sm:text-6xl">
                {chapter.number}
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
                {chapter.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-[1.5] sm:text-5xl">
                {chapter.title}
              </h2>
            </header>

            <div>
              {index === 3 ? (
                <figure className="relative mb-12 aspect-[16/10] overflow-hidden border border-cyan-100/15">
                  <Image
                    src="/images/S__3153967_0.jpg"
                    alt="対話を通じてアスリートの思い込みに向き合うスポーツメンタルコーチ押田海斗"
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-center"
                  />
                </figure>
              ) : null}
              <StoryBlocks blocks={chapter.blocks} />
            </div>
          </SectionReveal>
        </section>
      ))}

      <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <Image
          src="/images/S__3153968_0.jpg"
          alt="アスリートと一緒に目標へ挑戦するスポーツメンタルコーチ押田海斗"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,13,29,0.98),rgba(3,13,29,0.72))]" />

        <SectionReveal className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#d6ae64]">
            TOGETHER
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.5] sm:text-6xl">
            「自分は、まだまだこんなもんじゃない。」
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-200">
            一緒に目標に向かって挑戦できる日を、楽しみにしています。
          </p>
          <div className="mt-10 grid gap-4 sm:flex">
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
              href="/profile/"
              className="inline-flex min-h-14 items-center justify-center border border-cyan-100/30 bg-[#031226]/45 px-7 text-center text-sm font-semibold tracking-[0.08em] text-white transition-colors hover:border-cyan-100/60 hover:bg-[#031226]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
            >
              経歴・プロフィールを見る
            </Link>
          </div>
        </SectionReveal>
      </section>
    </article>
  );
}
