import { BrakeShiftDiagram } from "./BrakeShiftDiagram";
import { SectionReveal } from "./SectionReveal";

const loopSteps = [
  {
    label: "セルフイメージ",
    text: "自分は大事な場面でミスをする",
  },
  {
    label: "信念・価値観",
    text: "ミスをしてはいけない",
  },
  {
    label: "行動",
    text: "ミスを避けようとする",
  },
  {
    label: "プレー",
    text: "大胆な選択ができない",
  },
  {
    label: "結果",
    text: "本来の力を出し切れない",
  },
] as const;

export function LogicSection() {
  return (
    <section
      id="logic"
      className="bg-[#041225] px-5 py-24 text-white sm:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              LOGIC
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              結果にふさわしいメンタルを、先に手に入れる。
            </h2>
          </div>

          <div className="space-y-6">
            <p className="font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
              結果を変えるには、先に「結果にふさわしいメンタル」を手に入れる必要があります。
            </p>
            <p className="text-lg leading-9 text-slate-300">
              技術や練習量というアクセルを踏んでも、過去の経験から作られた思い込みというブレーキが残っている限り、本番では力を出し切れません。押田海斗が手伝いたいのは、もっと頑張らせることだけではなく、あなたを止めているブレーキを一緒に外すことです。
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-14">
          <BrakeShiftDiagram />
        </SectionReveal>

        <SectionReveal className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div id="cycle" className="scroll-mt-24">
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              SELF IMAGE LOOP
            </p>
            <h3 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-5xl">
              今の思い込みが、今の結果を作っている。
            </h3>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              たとえば「無になってプレーできない」選手は、集中力がないのではなく、ミスを避けようとする思い込みに行動を支配されていることがあります。だから、結果だけを変えようとしても、根っこのセルフイメージが変わらない限り同じパターンに戻ってしまいます。
            </p>
          </div>

          <div className="relative overflow-hidden border border-cyan-100/15 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ade80]/15 blur-3xl" />
            <div className="relative grid gap-3">
              {loopSteps.map((step, index) => (
                <article
                  key={step.label}
                  className="grid gap-4 border border-cyan-100/12 bg-[#061a33]/85 p-4 sm:grid-cols-[7.5rem_1fr] sm:items-center"
                >
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#4ade80]">
                      LAYER {index + 1}
                    </p>
                    <h4 className="mt-2 font-semibold text-cyan-50">
                      {step.label}
                    </h4>
                  </div>
                  <p className="text-base font-semibold leading-8 text-white">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 border-l border-[#4ade80]/70 pl-5">
              <p className="text-sm font-semibold leading-7 text-slate-200">
                NARERUが止めたいのは、この負のループです。気合いで押し切るのではなく、セルフイメージから行動と結果を整え直します。
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
