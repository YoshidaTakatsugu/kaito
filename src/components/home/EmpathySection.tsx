import Image from "next/image";

import { empathyContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function EmpathySection() {
  return (
    <section id="problem" className="bg-[#041225] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">EMPATHY</p>
            <h2 className="mt-6 text-balance font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">
              {empathyContent.title}
            </h2>
          </div>
          <p className="text-balance font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">
            あなたの努力が足りないのではありません。
          </p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-3">
            {empathyContent.worries.map((worry) => (
              <article
                key={worry}
                className="grid grid-cols-[2.5rem_1fr] items-start gap-3 border border-cyan-100/15 bg-white/[0.045] p-5 sm:grid-cols-[3.25rem_1fr] sm:items-center"
              >
                <span aria-hidden="true" className="font-serif text-3xl text-cyan-100/70">☑</span>
                <p className="text-pretty text-[15px] font-semibold leading-7 text-slate-100 sm:text-base">{worry}</p>
              </article>
            ))}
          </div>

          <figure className="border border-cyan-100/15 bg-white/[0.04] p-3">
            <div className="relative min-h-[28rem] overflow-hidden bg-[#001f3f]">
              <Image
                src="/images/S__3153966_0.jpg"
                alt="本番で実力を発揮できない悩みに寄り添うスポーツメンタルコーチ押田海斗"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[58%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/70 via-transparent to-transparent" />
            </div>
          </figure>
        </div>

        <p className="mt-10 max-w-5xl text-pretty border-l-2 border-[#d6ae64] bg-white/[0.04] px-5 py-6 font-serif text-lg leading-[1.8] text-cyan-50 sm:px-8 sm:text-xl">
          {empathyContent.closing}
        </p>
      </SectionReveal>
    </section>
  );
}
