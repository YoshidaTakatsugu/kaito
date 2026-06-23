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
        <h1 className="max-w-4xl text-balance font-serif text-[clamp(1.9rem,8.8vw,3.45rem)] font-semibold leading-[1.18] tracking-[-0.01em] text-white drop-shadow-[0_5px_26px_rgba(0,0,0,0.42)] lg:text-[clamp(3.4rem,5.2vw,5.4rem)]">
          <span className="block">本気で力を発揮し</span>
          <span className="block pl-[1.1em] font-sans text-[0.82em] font-semibold leading-[1.36] tracking-[0.01em] text-cyan-100 sm:text-[0.86em]">
            高めてきた能力を
          </span>
          <span className="block pl-[2.2em]">結果につなげる</span>
        </h1>
        <p className="mt-7 max-w-2xl text-balance text-xs font-semibold leading-7 tracking-[0.08em] text-slate-100 drop-shadow-[0_3px_18px_rgba(0,0,0,0.36)] sm:text-sm">
          結果に相応しいメンタルを育むスポーツメンタルコーチング
        </p>
      </m.div>
    </LazyMotion>
  );
}
