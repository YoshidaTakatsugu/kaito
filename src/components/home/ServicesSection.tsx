import { servicePrograms, trialContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">SERVICE</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">サービス紹介</h2>
          </div>
          <p className="font-serif text-2xl leading-[1.8] text-cyan-50 sm:text-3xl">
            あなたの現在地と目標に合わせ、5つのプログラムからサポートを設計します。
          </p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicePrograms.map((program, index) => (
            <article
              key={program}
              className={`relative flex min-h-56 flex-col justify-between overflow-hidden border p-6 sm:p-8 ${
                index === 0
                  ? "border-[#d6ae64]/60 bg-[#d6ae64] text-[#031226]"
                  : "border-cyan-100/15 bg-white/[0.045] text-white"
              }`}
            >
              <span aria-hidden="true" className={`absolute right-3 top-1 font-serif text-8xl font-semibold ${index === 0 ? "text-[#031226]/10" : "text-white/[0.06]"}`}>
                0{index + 1}
              </span>
              <p className={`text-xs font-semibold tracking-[0.22em] ${index === 0 ? "text-[#031226]/65" : "text-cyan-100"}`}>
                PROGRAM 0{index + 1}
              </p>
              <div className="relative mt-12">
                <h3 className="text-2xl font-semibold leading-[1.45]">{program}</h3>
                {index === 0 ? (
                  <p className="mt-5 text-sm font-semibold leading-7">{trialContent.details[0].value}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#trial"
            className="inline-flex min-h-12 items-center justify-center border border-cyan-100/30 px-6 text-sm font-semibold tracking-[0.1em] text-white transition-colors hover:border-[#d6ae64] hover:text-[#d6ae64]"
          >
            体験コーチングの詳細を見る <span aria-hidden="true" className="ml-3">→</span>
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
