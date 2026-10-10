import { uspStrengths } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function UspSection() {
  return (
    <section id="usp" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">WHY KAITO OSHIDA</p>
            <h2 className="mt-6 text-balance font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">
              スポーツメンタルコーチ押田海斗 4つの強み
            </h2>
          </div>
          <p className="text-balance font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">
            勝ち切れなかった経験と、人間の仕組みへの理解を、あなたの結果に変える。
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {uspStrengths.map((strength, index) => (
            <article
              key={strength.title}
              className="relative overflow-hidden border border-cyan-100/15 bg-white/[0.045] p-6 sm:p-8"
            >
              <span aria-hidden="true" className="absolute right-4 top-3 font-serif text-7xl font-semibold text-white/[0.06]">
                0{index + 1}
              </span>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#d6ae64]">STRENGTH 0{index + 1}</p>
              <h3 className="mt-6 max-w-xl text-balance text-xl font-semibold leading-[1.55] text-white">{strength.title}</h3>
              <p className="mt-5 text-pretty text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">{strength.detail}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
