"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

import { heroContent } from "@/lib/brand";

export function HeroCopyMotion() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={false}>
        <h1
          aria-label={heroContent.title}
          className="max-w-3xl font-serif text-[clamp(1.72rem,7vw,3.1rem)] font-semibold leading-[1.34] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.46)] lg:text-[clamp(2.5rem,3.4vw,3.6rem)]"
        >
          {heroContent.titleLines.map((line, index) => (
            <m.span
              key={line}
              aria-hidden="true"
              className={`block ${
                index === 1 || index === 2 ? "text-[#d6ae64]" : "text-white"
              } ${index === 1 ? "pl-[0.35em]" : ""} ${
                index === 2 ? "pl-[0.85em]" : ""
              } ${index === 3 ? "pl-[0.3em]" : ""}`}
            >
              {line}
            </m.span>
          ))}
        </h1>
        <m.p className="mt-6 max-w-xl border-l border-[#d6ae64]/70 pl-4 text-sm font-semibold leading-7 tracking-[0.06em] text-slate-100 drop-shadow-[0_3px_16px_rgba(0,0,0,0.4)] sm:text-base">
          {heroContent.subcopy}
        </m.p>
      </m.div>
    </LazyMotion>
  );
}
