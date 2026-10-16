"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

import { heroContent } from "@/lib/brand";

export function HeroCopyMotion() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={false}>
        <h1
          aria-label={heroContent.title}
          className="hero-title max-w-3xl font-serif text-[clamp(1.38rem,5.7vw,2.75rem)] font-semibold leading-[1.4] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.46)] lg:text-[clamp(2.5rem,3.4vw,3.6rem)] lg:leading-[1.34]"
        >
          {heroContent.titleLines.slice(2).map((line, index) => (
            <m.span
              key={line}
              aria-hidden="true"
              className={`block hero-title-emphasis ${
                index === 0 ? "text-[#d6ae64]" : "text-white"
              }`}
            >
              {index === 1 ? (
                <>
                  <span className="block sm:inline">自分の力を</span>
                  <span className="block sm:inline">結果につなげよう。</span>
                </>
              ) : line}
            </m.span>
          ))}
        </h1>
      </m.div>
    </LazyMotion>
  );
}
