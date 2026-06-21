"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Transition,
} from "framer-motion";

import type { SiteImage } from "@/lib/site-images";

type CycleMode = "negative" | "positive";

type CycleToggleProps = {
  coreImage?: SiteImage | null;
};

const cycles = {
  negative: {
    name: "負のサイクル",
    summary:
      "技・体を磨いていても心のピースが欠けると、不安が萎縮を生み、結果が出ないことで自信を失いやすくなります。",
    steps: ["不安", "萎縮", "結果が出ない", "自信喪失"],
    core: "心のピースが欠けている",
  },
  positive: {
    name: "正のサイクル",
    summary:
      "心・技・体が重なると、ワクワクが集中を生み、実力発揮と結果が次の自信につながります。",
    steps: ["ワクワク", "集中", "実力発揮", "結果がついてくる"],
    core: "パフォーマンス最大化",
  },
} as const;

const circleBase =
  "grid size-40 place-items-center rounded-full border text-lg font-semibold sm:size-48";

export function CycleToggle({ coreImage = null }: CycleToggleProps) {
  const [mode, setMode] = useState<CycleMode>("negative");
  const reduceMotion = useReducedMotion();
  const active = cycles[mode];
  const isPositive = mode === "positive";

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 260, damping: 28 };

  return (
    <LazyMotion features={domAnimation}>
      <div className="rounded-sm border border-cyan-100/15 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div
              className="grid grid-cols-2 rounded-full border border-cyan-100/15 bg-[#020b17]/55 p-1"
              role="tablist"
              aria-label="心技体サイクルの切り替え"
            >
              {(["negative", "positive"] as const).map((cycleMode) => (
                <button
                  key={cycleMode}
                  type="button"
                  role="tab"
                  aria-selected={mode === cycleMode}
                  aria-controls="cycle-panel"
                  onClick={() => setMode(cycleMode)}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5f8f] ${
                    mode === cycleMode
                      ? "bg-cyan-100 text-[#041225]"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cycles[cycleMode].name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={mode}
                id="cycle-panel"
                role="tabpanel"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
                className="mt-7"
              >
                <p className="text-xs font-semibold tracking-[0.24em] text-cyan-100">
                  {active.name}
                </p>
                <p className="mt-4 text-xl font-semibold leading-9 text-white">
                  {active.summary}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {active.steps.map((step, index) => (
                    <div
                      key={step}
                      className="border-l border-cyan-100/30 bg-white/[0.055] px-4 py-3"
                    >
                      <p className="text-xs font-semibold text-cyan-100">
                        STEP {index + 1}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </m.div>
            </AnimatePresence>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[24rem]">
            <m.div
              className={`absolute left-4 top-14 ${circleBase} border-cyan-100/30 bg-cyan-100/10 text-cyan-50`}
              animate={{
                x: isPositive ? 20 : 0,
                y: isPositive ? -4 : 0,
                opacity: 1,
              }}
              transition={transition}
            >
              技
            </m.div>
            <m.div
              className={`absolute right-4 top-14 ${circleBase} border-[#2f6fa8]/45 bg-[#2f6fa8]/18 text-cyan-50`}
              animate={{
                x: isPositive ? -20 : 0,
                y: isPositive ? -4 : 0,
                opacity: 1,
              }}
              transition={transition}
            >
              体
            </m.div>
            <div className="absolute left-1/2 top-36 -translate-x-1/2">
              <m.div
                className={`${circleBase} border-dashed ${
                  isPositive
                    ? "border-[#00a86b]/60 bg-[#00a86b]/18 text-[#d8fff0]"
                    : "border-cyan-100/20 bg-white/[0.04] text-slate-400"
                }`}
                animate={{
                  y: isPositive ? -40 : 20,
                  opacity: isPositive ? 1 : 0.62,
                  scale: isPositive ? 1 : 0.86,
                }}
                transition={transition}
              >
                心
              </m.div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <m.div
                className={`relative grid size-28 place-items-center overflow-hidden rounded-full border text-center text-sm font-semibold leading-6 sm:size-32 ${
                  isPositive
                    ? "border-[#00a86b] bg-[#00a86b] text-white shadow-[0_0_50px_rgba(0,168,107,0.38)]"
                    : "border-cyan-100/20 bg-[#020b17] text-slate-400"
                }`}
                animate={{
                  scale: isPositive ? 1.08 : 0.92,
                }}
                transition={transition}
              >
                {isPositive && coreImage ? (
                  <>
                    <Image
                      src={coreImage.src}
                      alt={coreImage.alt}
                      fill
                      sizes="8rem"
                      className="object-cover"
                    />
                    <span className="relative z-10 m-3 rounded-full bg-[#001f3f]/70 px-3 py-2 text-white backdrop-blur-sm">
                      {active.core}
                    </span>
                  </>
                ) : (
                  active.core
                )}
              </m.div>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-cyan-100/15 pt-6 font-serif text-2xl leading-relaxed text-cyan-50">
          最後は心のピースを一緒に埋めよう。
        </p>
      </div>
    </LazyMotion>
  );
}
