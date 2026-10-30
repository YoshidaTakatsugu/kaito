import { uspStrengths } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function UspSection() {
  return (
    <section id="usp" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">WHY KAITO OSHIDA</p>
            <h2 className="mt-5 font-serif text-2xl leading-[1.5] sm:text-4xl">
              <span className="mb-2 block font-sans text-sm leading-[1.7] text-slate-300 sm:text-base">スポーツメンタルコーチ</span>
              <span className="inline-block whitespace-nowrap border-b-2 border-[#d6ae64] pb-2 text-[28px] font-semibold min-[390px]:text-[30px] sm:text-4xl">押田海斗４つの強み</span>
            </h2>
          </div>
          <p className="text-pretty font-serif text-[17px] leading-[1.8] text-cyan-50 sm:text-xl">
            勝ち切れなかった経験と、人間の仕組みへの理解を、あなたの結果に変える。
          </p>
        </header>

        <div className="mt-7 grid gap-4 sm:mt-10 md:grid-cols-2">
          {uspStrengths.map((strength, index) => (
            <article
              key={strength.title}
              className="relative overflow-hidden border border-cyan-100/15 bg-white/[0.045] p-5 sm:p-7"
            >
              <span aria-hidden="true" className="absolute right-4 top-3 font-serif text-5xl font-semibold text-white/[0.06]">
                0{index + 1}
              </span>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#d6ae64]">STRENGTH 0{index + 1}</p>
              <h3 className="mt-5 max-w-xl text-balance text-lg font-semibold leading-[1.6] text-white sm:text-xl">{strength.title}</h3>
              <p className="mt-4 whitespace-pre-line text-pretty text-sm leading-[1.85] text-slate-300 sm:text-base">{strength.detail}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
