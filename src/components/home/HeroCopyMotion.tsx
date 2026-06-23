"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Transition,
} from "framer-motion";

export function HeroCopyMotion() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 24 };
  const animate = reduceMotion ? {} : { opacity: 1, y: 0 };
  const transition: Transition = {
    duration: reduceMotion ? 0 : 0.72,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <LazyMotion features={domAnimation}>
      <noscript>
        <style>
          {"[data-hero-copy]{opacity:1!important;transform:none!important}"}
        </style>
      </noscript>
      <m.div
        data-hero-copy
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <h1 className="max-w-5xl text-balance font-serif text-[clamp(2.4rem,12vw,5rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white drop-shadow-[0_5px_26px_rgba(0,0,0,0.42)] lg:text-[clamp(4.3rem,6.6vw,7rem)]">
          本番で力を発揮し、
          <span className="block font-sans text-[0.68em] font-semibold leading-[1.32] tracking-[0.01em] text-cyan-100 sm:text-[0.72em]">
            高めてきた能力を
          </span>
          <span className="block">結果につなげる。</span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-sm font-semibold leading-8 tracking-[0.08em] text-slate-100 drop-shadow-[0_3px_18px_rgba(0,0,0,0.36)] sm:text-base">
          結果に相応しいメンタルを育むスポーツメンタルコーチング
        </p>
      </m.div>
    </LazyMotion>
  );
}
