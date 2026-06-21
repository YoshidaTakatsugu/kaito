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
        <p className="mb-5 text-[0.66rem] font-semibold tracking-[0.32em] text-cyan-100/85 sm:text-xs">
          SPORTS MENTAL COACHING
        </p>
        <h1 className="mx-auto max-w-5xl text-balance font-serif text-[clamp(2.15rem,11vw,4.6rem)] font-semibold leading-[1.14] tracking-[-0.015em] text-white lg:mx-0 lg:text-[clamp(4rem,6.4vw,6.9rem)]">
          あなたが本番で
          <span className="block font-sans text-[0.68em] font-semibold leading-[1.32] tracking-[0.01em] text-cyan-100 sm:text-[0.72em]">
            力を出し切れない理由は、
          </span>
          <span className="block">
            本気で自分の能力を高めてきたから。
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-sm font-semibold leading-8 tracking-[0.08em] text-slate-200 sm:text-base lg:mx-0">
          結果に相応しい自分になれる。最後の「心のピース」を埋めるスポーツメンタルコーチング。
        </p>
      </m.div>
    </LazyMotion>
  );
}
