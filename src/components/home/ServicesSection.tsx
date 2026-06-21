import { servicePrograms, services } from "@/lib/brand";

const programVisuals = [
  {
    number: "01",
    outcome: "本番の緊張を整える",
    promise: "まず、力を出せない理由を言語化する。",
    card: "border-cyan-100/25 bg-[#08203f] text-white shadow-[0_28px_80px_rgba(0,0,0,0.24)]",
    bar: "bg-cyan-100",
    label: "text-cyan-100",
    heading: "text-white",
    body: "text-slate-200",
    footer: "border-cyan-100/20 text-cyan-50",
    numberTone: "text-white/10",
    badge: "border-cyan-100/20 bg-white/10 text-cyan-50",
  },
  {
    number: "02",
    outcome: "勝負所で出し切る",
    promise: "代表・全国上位のプレッシャーに合わせて再設計する。",
    card: "border-cyan-100/15 bg-white/[0.055] text-white shadow-[0_22px_60px_rgba(0,0,0,0.16)]",
    bar: "bg-[#0b5f8f]",
    label: "text-cyan-100",
    heading: "text-white",
    body: "text-slate-300",
    footer: "border-cyan-100/15 text-slate-200",
    numberTone: "text-white/10",
    badge: "border-cyan-100/20 bg-white/10 text-cyan-50",
  },
  {
    number: "03",
    outcome: "競技人生を設計する",
    promise: "結果だけでなく、プロとしての在り方まで扱う。",
    card: "border-cyan-100/15 bg-white/[0.045] text-white",
    bar: "bg-cyan-100/70",
    label: "text-cyan-100",
    heading: "text-white",
    body: "text-slate-300",
    footer: "border-cyan-100/15 text-slate-300",
    numberTone: "text-white/10",
    badge: "border-cyan-100/15 bg-white/[0.08] text-cyan-50",
  },
  {
    number: "04",
    outcome: "課題から逆算する",
    promise: "競技特性、大会日程、個人課題に合わせて組む。",
    card: "border-cyan-100/15 bg-white/[0.045] text-white",
    bar: "bg-[#2f6fa8]",
    label: "text-cyan-100",
    heading: "text-white",
    body: "text-slate-300",
    footer: "border-cyan-100/15 text-slate-300",
    numberTone: "text-white/10",
    badge: "border-cyan-100/15 bg-white/[0.08] text-cyan-50",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="coaching"
      className="bg-[#061a33] px-5 py-24 text-white sm:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              SERVICE
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
              サービス紹介・価格
            </h2>
          </div>
          <div>
            <p className="font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
              NARERUのコーチングは、単なる励ましではなく、脳科学と心理学に基づき「心技体」を統合させる専門的な介入です。
            </p>
            <div className="mt-8 border-y border-cyan-100/15 py-6">
              <p className="text-xs font-semibold tracking-[0.24em] text-cyan-100">
                TRIAL COACHING
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{services[0].name}</h3>
                  <p className="mt-3 text-slate-300">
                    50分 / 対面・オンライン
                  </p>
                </div>
                <p className="text-4xl font-semibold tracking-[-0.02em]">
                  {services[0].price}
                </p>
              </div>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                {services[0].description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {servicePrograms.map((program, index) => {
            const visual = programVisuals[index];

            return (
              <article
                key={program.name}
                className={`group relative isolate flex min-h-[21rem] flex-col justify-between overflow-hidden border p-6 transition-transform duration-200 hover:-translate-y-1 ${visual.card}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${visual.bar}`} />
                <p
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-2 top-4 -z-10 font-serif text-8xl font-semibold leading-none tracking-[-0.08em] ${visual.numberTone}`}
                >
                  {visual.number}
                </p>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className={`text-xs font-semibold tracking-[0.24em] ${visual.label}`}
                    >
                      {program.level}
                    </p>
                    <p
                      className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] ${visual.badge}`}
                    >
                      {visual.number}
                    </p>
                  </div>
                  <p
                    className={`mt-8 text-sm font-semibold tracking-[0.16em] ${visual.label}`}
                  >
                    {visual.outcome}
                  </p>
                  <h3
                    className={`mt-3 text-2xl font-semibold leading-snug ${visual.heading}`}
                  >
                    {program.name}
                  </h3>
                  <p className={`mt-5 text-sm leading-8 ${visual.body}`}>
                    {program.description}
                  </p>
                  <p
                    className={`mt-6 border-l pl-4 text-base font-semibold leading-8 ${visual.footer}`}
                  >
                    {visual.promise}
                  </p>
                </div>
                <div className={`mt-8 border-t pt-4 ${visual.footer}`}>
                  <p className="text-xs font-semibold tracking-[0.2em]">
                    RECOMMENDED
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7">
                    {program.recommendedFor}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
