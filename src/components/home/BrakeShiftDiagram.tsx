"use client";

import { useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type DiagramMode = "brake" | "release";

const modes = {
  brake: {
    label: "ブレーキが残る状態",
    headline: "アクセルを踏んでも、思い込みが現在地に引き戻す。",
    brake: "負けてはいけない / ミスできない",
    current: "練習ではできるが、本番で止まる",
    goal: "目標",
    result: "結果に届ききらない",
    note: "練習・技術・体力というアクセルはある。それでも、過去の記憶から生まれたセルフイメージがブレーキになり、勝負所の一歩を小さくします。",
  },
  release: {
    label: "ブレーキを外した状態",
    headline: "結果にふさわしいメンタルを先に手に入れると、結果がついてくる。",
    brake: "思い込みをゆるめる",
    current: "呼吸・視野・選択が戻る",
    goal: "目標",
    result: "結果にふさわしい自分",
    note: "NARERUは、もっと頑張らせるだけのコーチングではありません。あなたを止めていたブレーキを外し、目標に向かう力を自然に使える状態へ導きます。",
  },
} as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export function BrakeShiftDiagram() {
  const [mode, setMode] = useState<DiagramMode>("release");
  const reduceMotion = useReducedMotion();
  const current = modes[mode];
  const isRelease = mode === "release";

  return (
    <section className="overflow-hidden border border-cyan-100/15 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            ACCEL & BRAKE
          </p>
          <h3 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-5xl">
            アクセルを踏む前に、ブレーキを外す。
          </h3>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            先生やコーチが練習量や技術を高めるアクセルを支える一方で、NARERUは本番で力を止めているブレーキに向き合います。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {(Object.keys(modes) as DiagramMode[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key)}
                className={`min-h-12 rounded-full border px-5 text-sm font-semibold tracking-[0.12em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 ${
                  mode === key
                    ? "border-[#4ade80] bg-[#4ade80] text-[#041225]"
                    : "border-cyan-100/25 bg-white/[0.035] text-cyan-50 hover:bg-white/[0.08]"
                }`}
                aria-pressed={mode === key}
              >
                {modes[key].label}
              </button>
            ))}
          </div>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            key={mode}
            className="relative min-h-[34rem] overflow-hidden bg-[#061a33] p-5 sm:min-h-[30rem] sm:p-7"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(74,222,128,0.17),transparent_28%),radial-gradient(circle_at_18%_84%,rgba(103,232,249,0.12),transparent_30%)]" />
            <m.p
              className="relative max-w-2xl font-serif text-2xl leading-[1.55] text-cyan-50 sm:text-3xl"
              variants={itemVariants}
            >
              {current.headline}
            </m.p>

            <div className="relative mt-10 grid gap-5 lg:grid-cols-[0.8fr_0.9fr_1fr_1.2fr] lg:items-center">
              <m.div
                className={`rounded-full border p-5 text-center ${
                  isRelease
                    ? "border-[#4ade80]/60 bg-[#4ade80]/10"
                    : "border-rose-200/40 bg-rose-400/10"
                }`}
                variants={itemVariants}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                  BRAKE
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white">
                  {current.brake}
                </p>
              </m.div>

              <m.div
                className="hidden h-px bg-cyan-100/30 lg:block"
                variants={itemVariants}
              />

              <m.div
                className="rounded-full border border-cyan-100/35 bg-[#041225]/80 p-5 text-center"
                variants={itemVariants}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100">
                  CURRENT
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white">
                  {current.current}
                </p>
              </m.div>

              <m.div
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
                variants={itemVariants}
              >
                <div className="border-l border-cyan-100/35 bg-white/[0.055] p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100">
                    ACCEL
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-white">
                    練習・技術・体力
                  </p>
                </div>
                <div className="border-l border-[#4ade80]/70 bg-[#4ade80]/10 p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#4ade80]">
                    NARERU
                  </p>
                  <p className="mt-2 font-semibold leading-7 text-white">
                    ブレーキを外す
                  </p>
                </div>
              </m.div>
            </div>

            <div className="relative mt-8 grid gap-5 sm:grid-cols-[0.8fr_1fr] sm:items-center">
              <m.div
                className="rounded-full border border-cyan-100/35 bg-[#041225]/80 p-6 text-center"
                variants={itemVariants}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100">
                  GOAL
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {current.goal}
                </p>
              </m.div>
              <m.div
                className={`rounded-full border p-7 text-center shadow-[0_0_80px_rgba(74,222,128,0.14)] ${
                  isRelease
                    ? "border-[#4ade80] bg-[#4ade80] text-[#041225]"
                    : "border-cyan-100/30 bg-white/[0.055] text-white"
                }`}
                variants={itemVariants}
              >
                <p className="text-xs font-bold tracking-[0.22em] opacity-80">
                  RESULT
                </p>
                <p className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                  {current.result}
                </p>
              </m.div>
            </div>

            <m.p
              className="relative mt-8 border-l border-cyan-100/35 pl-5 text-sm font-semibold leading-7 text-slate-200"
              variants={itemVariants}
            >
              {current.note}
            </m.p>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
