import { conversionSteps } from "@/lib/brand";

export function ConversionFlowSection() {
  return (
    <section id="flow" className="bg-[#001f3f] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            CONVERSION FLOW
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.35] tracking-[-0.01em] sm:text-5xl">
            まず知り、体感し、理想の結果に相応しい自分へ進む。
          </h2>
          <p className="mt-8 leading-8 text-slate-300">
            無料の学習導線から体験コーチング、継続セッションへ。焦って契約を迫るのではなく、あなた自身が変化を確認しながら進める教育型フローです。
          </p>
        </div>

        <ol className="grid gap-5">
          {conversionSteps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-5 border border-white/12 bg-white/[0.04] p-6 sm:grid-cols-[7rem_1fr]"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-cyan-100">
                STEP {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-8 text-slate-300">
                  {step.description}
                </p>
                <a
                  href={step.href}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/30 px-5 text-sm font-semibold tracking-[0.16em] text-cyan-50 transition-colors duration-200 hover:border-cyan-100/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                >
                  {step.cta}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
