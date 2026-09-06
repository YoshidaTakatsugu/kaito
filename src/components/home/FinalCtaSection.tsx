import Image from "next/image";

import { heroContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="relative isolate overflow-hidden bg-[#031226] px-5 py-24 text-white sm:px-8">
      <span id="seminar" className="absolute top-0 scroll-mt-24" aria-hidden="true" />
      <Image
        src="/images/S__3153969_0.jpg"
        alt="体験コーチングへの最初の一歩を後押しするスポーツメンタルコーチ押田海斗"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[68%_center] opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,18,38,0.98),rgba(3,18,38,0.72),rgba(3,18,38,0.45))]" />
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#d6ae64]">TAKE THE FIRST STEP</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.35] sm:text-6xl">自分の力を結果につなげよう。</h2>
          <p className="mt-7 text-lg leading-9 text-slate-200">{heroContent.subcopy}</p>
          <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a href="#trial" className="inline-flex min-h-12 items-center justify-center bg-[#d6ae64] px-5 text-center text-sm font-semibold tracking-[0.08em] text-[#031226]">
              {heroContent.primaryCta.label} <span aria-hidden="true" className="ml-3">→</span>
            </a>
            <a href="#final-cta" className="inline-flex min-h-12 items-center justify-center border border-white/35 bg-[#031226]/50 px-5 text-center text-sm font-semibold tracking-[0.06em] text-white">
              {heroContent.secondaryCta.label} <span aria-hidden="true" className="ml-3">→</span>
            </a>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
