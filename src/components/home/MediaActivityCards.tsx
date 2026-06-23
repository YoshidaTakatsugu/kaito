"use client";

import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";

export type MediaActivityItem = {
  id: string;
  type: "YouTube" | "Web Article";
  source: string;
  title: string;
  url: string;
  description: string;
  thumbnailSrc: string;
  publishedLabel: string;
  dateTime?: string;
};

type MediaActivityCardsProps = {
  items: readonly MediaActivityItem[];
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function getThumbnailAlt(item: MediaActivityItem) {
  if (item.type === "YouTube") {
    return `スポーツメンタルコーチ押田海斗のインタビュー動画サムネイル：${item.title}`;
  }

  return `スポーツメンタルコーチ押田海斗のインタビュー記事アイキャッチ画像：${item.title}`;
}

export function MediaActivityCards({ items }: MediaActivityCardsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={listVariants}
      >
        {items.map((item) => (
          <m.article
            key={item.id}
            className="group overflow-hidden border border-cyan-100/15 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
            variants={cardVariants}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              aria-label={`${item.title}を外部サイトで見る`}
            >
              <div className="relative aspect-video overflow-hidden bg-[#001f3f]">
                <Image
                  src={item.thumbnailSrc}
                  alt={getThumbnailAlt(item)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 31vw"
                  className="object-cover object-center opacity-[0.86] transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/88 via-[#041225]/24 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-[#041225]/72 px-3 py-2 text-xs font-semibold tracking-[0.16em] text-cyan-50 backdrop-blur-sm">
                  {item.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#4ade80]">
                    {item.source}
                  </p>
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-cyan-100/25 bg-white/[0.08] text-[10px] font-semibold tracking-[0.16em] text-cyan-50 transition-colors duration-200 group-hover:border-[#4ade80]/70 group-hover:text-[#4ade80]"
                  >
                    OPEN
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.16em] text-slate-400">
                  <time dateTime={item.dateTime}>{item.publishedLabel}</time>
                  <span>{item.type === "YouTube" ? "MOVIE" : "ARTICLE"}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            </a>
          </m.article>
        ))}
      </m.div>
    </LazyMotion>
  );
}
