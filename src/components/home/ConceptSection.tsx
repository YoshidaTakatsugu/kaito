import Image from "next/image";

import { SectionReveal } from "./SectionReveal";

const conceptSteps = [
  {
    title: "メンタル",
    text: "自分をどう捉えるかが、プレッシャー下での選択を決めます。",
  },
  {
    title: "行動",
    text: "心の状態が整うと、呼吸・判断・一歩目が試合で変わります。",
  },
  {
    title: "結果",
    text: "行動が変わることで、積み上げてきた能力が結果につながります。",
  },
] as const;

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="bg-[#061a33] px-5 py-24 text-white sm:px-8"
    >
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <figure className="order-2 border border-cyan-100/15 bg-white/[0.045] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.22)] lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#001f3f] sm:aspect-[5/4]">
            <Image
              src="/images/Top.jpg"
              alt="メンタルと行動と結果の因果関係を対話で整えるスポーツメンタルコーチ押田海斗の写真"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[55%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/40 via-transparent to-transparent" />
          </div>
        </figure>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            CONCEPT
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.35] tracking-[-0.01em] sm:text-5xl">
            結果を変えるには、自分自身（メンタル）を変える必要があります。
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-300">
            NARERUの考え方は、根性論ではありません。メンタルが行動を作り、行動が結果を作る。
            だからこそ、試合で能力を出し切るには、技術や体力だけでなく、あなた自身の捉え方を整える必要があります。
          </p>

          <div className="mt-10 grid gap-4">
            {conceptSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 border-l border-cyan-100/35 bg-white/[0.045] px-5 py-5 sm:grid-cols-[5rem_1fr] sm:items-start"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-cyan-100">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-8 text-slate-300">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
