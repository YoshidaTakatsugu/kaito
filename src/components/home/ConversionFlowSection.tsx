import { trialContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function ConversionFlowSection() {
  return (
    <section id="trial" className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">TRIAL COACHING</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.35] sm:text-6xl">{trialContent.title}</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-slate-300">{trialContent.overview}</p>
            <dl className="mt-9 border-y border-cyan-100/15">
              {trialContent.details.map((detail) => (
                <div key={detail.label} className="grid gap-2 border-b border-cyan-100/10 py-5 last:border-b-0 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-[#d6ae64]">{detail.label}</dt>
                  <dd className="font-semibold leading-8 text-white">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16">
          <h3 className="font-serif text-3xl text-white sm:text-4xl">体験で得られる3つのこと</h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {trialContent.benefits.map((benefit, index) => (
              <article key={benefit.title} className="border border-cyan-100/15 bg-white/[0.045] p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#67d5ae]">BENEFIT 0{index + 1}</p>
                <h4 className="mt-5 text-xl font-semibold leading-[1.55] text-white">{benefit.title}</h4>
                <p className="mt-5 leading-8 text-slate-300">{benefit.description}</p>
              </article>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">SESSION FLOW</p>
            <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-5xl">お申し込みから体験まで</h3>
          </div>
          <ol className="relative border-l border-cyan-100/20 pl-7">
            {trialContent.steps.map((step, index) => (
              <li key={step.title} className="relative pb-9 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[2.08rem] top-1 grid size-3 place-items-center rounded-full bg-[#d6ae64] ring-4 ring-[#041225]" />
                <p className="text-xs font-semibold tracking-[0.18em] text-[#d6ae64]">0{index + 1}</p>
                <h4 className="mt-2 text-xl font-semibold text-white">{step.title}</h4>
                <p className="mt-3 leading-8 text-slate-300">{step.description}</p>
              </li>
            ))}
          </ol>
        </SectionReveal>

        <SectionReveal className="mt-16 grid gap-7 border border-[#d6ae64]/35 bg-[#d6ae64]/[0.08] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-[#d6ae64]">FIRST STEP</p>
            <p className="mt-4 font-serif text-2xl leading-[1.65] text-white">なりたい自分へ変わっていく、最初の一歩を。</p>
          </div>
          <a href="#final-cta" className="inline-flex min-h-12 items-center justify-center bg-[#d6ae64] px-6 text-sm font-semibold tracking-[0.1em] text-[#031226]">
            体験コーチングに申し込む <span aria-hidden="true" className="ml-3">→</span>
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
