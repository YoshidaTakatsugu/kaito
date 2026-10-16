"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

import { heroContent } from "@/lib/brand";

export function HeroCopyMotion() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={false}>
        <h1
          aria-label={heroContent.title}
          className="hero-title max-w-3xl font-serif text-[25px] font-semibold leading-[1.4] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.46)] sm:text-[30px] lg:text-[44px] xl:text-[48px]"
        >
          {heroContent.titleLines.slice(2).map((line, index) => (
            <m.span
              key={line}
              aria-hidden="true"
              className={`block whitespace-nowrap hero-title-emphasis ${
                index === 0 ? "hero-title-lead text-[#d6ae64]" : "hero-title-result text-white"
              }`}
            >
              {line}
            </m.span>
          ))}
        </h1>
      </m.div>
    </LazyMotion>
  );
}
