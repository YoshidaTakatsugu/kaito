import type { Metadata } from "next";
import Image from "next/image";

import { CoachStorySection } from "@/components/home/CoachStorySection";
import { site, storyContent } from "@/lib/brand";
import { storyPageContent as content, type StoryBlock } from "@/lib/story";

export const metadata: Metadata = {
  title: "押田海斗のストーリー",
  description:
    "空手選手として勝ち切れなかった経験から、スポーツメンタルコーチになるまでの押田海斗のストーリー。",
  alternates: { canonical: "/story/" },
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
        alt: "スポーツメンタルコーチ押田海斗",
      },
    ],
  },
};

const chapterTitles = [
  ["空手に打ち込んだ原点"],
  ["あと一歩で、", "勝ち切れなかった"],
  ["引退後に残った、", "大きな後悔"],
  ["自分を止めていた", "ものの正体"],
  ["だからこそ、今、", "選手の力になりたい"],
] as const;
const chapterLabels = [
  "原点",
  "選手時代",
  "引退と後悔",
  "気づき",
  "コーチとして",
];

function StoryBlocks({ blocks }: { blocks: readonly StoryBlock[] }) {
  // Keep connected narrative sentences together instead of spacing every fragment apart.
  const groups = blocks.reduce<{ type: StoryBlock["type"]; texts: string[] }[]>(
    (result, block) => {
      const previous = result.at(-1);
      if (
        previous?.type === block.type &&
        (block.type === "quote" ||
          previous.texts.join("").length + block.text.length <= 180)
      )
        previous.texts.push(block.text);
      else result.push({ type: block.type, texts: [block.text] });
      return result;
    },
    [],
  );

  return (
    <div className="story-prose">
      {groups.map((group, index) => {
        if (group.type === "quote")
          return (
            <blockquote key={index}>
              {group.texts.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </blockquote>
          );
        return (
          <p
            key={index}
            className={group.type === "emphasis" ? "story-emphasis" : undefined}
          >
            {group.texts.join("")}
          </p>
        );
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
        headline: "押田海斗のストーリー",
        description: metadata.description,
        inLanguage: "ja",
        about: { "@id": `${site.url}/#person` },
        hasPart: [
          ...content.chapters.map((chapter) => ({
            "@type": "WebPageElement",
            "@id": `${pageUrl}#chapter-${chapter.number}`,
            name: chapter.title,
            description: chapter.blocks.map((block) => block.text).join(""),
          })),
          {
            "@type": "WebPageElement",
            "@id": `${pageUrl}#story`,
            name: "競技実績と、選手への想い",
            description: storyContent.closingParagraphs[1],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: site.url },
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

  return (
    <article className="story-page bg-[#041225] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="story-page-hero relative isolate overflow-hidden">
        <div className="story-hero-photo absolute inset-0 -z-20">
          <Image
            src="/images/S__3153966_0.jpg"
            alt="自身の競技経験とコーチングへの想いを語る押田海斗"
            fill
            sizes="(max-width: 639px) 100vw, 65vw"
            loading="eager"
            className="-z-20 object-cover"
          />
        </div>
        <div className="story-hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-[#67d5ae]">
            STORY
          </p>
          <h1 className="mt-4 font-serif">押田海斗のストーリー</h1>
          <p className="mt-3 text-sm text-cyan-50">スポーツメンタルコーチ</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <nav className="story-chapter-nav" aria-label="ストーリーの各章">
          {content.chapters.map((chapter, index) => (
            <a key={chapter.number} href={`#chapter-${chapter.number}`}>
              <span>{chapter.number}</span>
              {chapterLabels[index]}
            </a>
          ))}
          <a href="#story">
            <span>06</span>実績と想い
          </a>
        </nav>
        {content.chapters.map((chapter, index) => (
          <section
            key={chapter.number}
            id={`chapter-${chapter.number}`}
            className="story-chapter"
          >
            <header>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8ed9e7]">
                {chapter.number} / {chapter.eyebrow}
              </p>
              <h2>
                {chapterTitles[index].map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </header>
            <StoryBlocks blocks={chapter.blocks} />
          </section>
        ))}
        <CoachStorySection />
      </div>
    </article>
  );
}
