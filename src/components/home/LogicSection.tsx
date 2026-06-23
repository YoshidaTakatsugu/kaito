import { SectionReveal } from "./SectionReveal";

const logicPoints = [
  {
    label: "過去の経験",
    text: "負けた試合、届かなかった一歩、周囲の評価が、無意識の基準を作ります。",
  },
  {
    label: "思い込み",
    text: "「大事な場面では失敗する」という解釈が、勝負の前から行動を狭めます。",
  },
  {
    label: "ブレーキ",
    text: "身体は動けるのに、判断・呼吸・踏み込みが小さくなり、本来の力が出ません。",
  },
] as const;

const shingitaiParts = [
  {
    label: "心",
    text: "思い込みをゆるめ、試合で使える集中と自己信頼を作る。",
  },
  {
    label: "技",
    text: "積み上げた技術を、本番でも再現できる状態に整える。",
  },
  {
    label: "体",
    text: "動ける身体を、勝負どころで迷わず使い切れるようにする。",
  },
] as const;

const shiftSteps = ["思い込みをゆるめる", "行動が変わる", "結果につながる"] as const;

export function LogicSection() {
  return (
    <section
      id="logic"
      className="bg-[#041225] px-5 py-24 text-white sm:px-8"
    >
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            LOGIC
          </p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
            なぜ、あなたは本番で力を発揮できないのか？
          </h2>
        </div>

        <div className="space-y-10">
          <p className="font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
            本番で力を出せない最大の理由は、過去の経験から作られた
            「思い込み」が、無意識のうちにブレーキになっているからです。
          </p>
          <p className="max-w-3xl text-lg leading-9 text-slate-300">
            NARERUは、この思い込みを緩めることで、あなたが本来持つ力を自然に発揮できる状態へ導きます。
            問題は性格の弱さではなく、心が行動と結果に与えている因果関係です。
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {logicPoints.map((point, index) => (
              <article
                key={point.label}
                className="border-t border-cyan-100/20 bg-white/[0.035] px-5 py-6"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-cyan-100">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {point.label}
                </h3>
                <p className="mt-4 leading-8 text-slate-300">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mx-auto mt-14 grid w-full max-w-7xl gap-10 border border-cyan-100/15 bg-white/[0.045] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] sm:p-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div id="cycle" className="scroll-mt-24">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            SHINGITAI MODEL
          </p>
          <h3 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-5xl">
            最後は心のピースを一緒に埋めよう。
          </h3>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            心・技・体がつながると、練習で高めてきた能力は「本番で使える力」に変わります。
            NARERUは、欠けていた心の土台を整え、負のサイクルを正のサイクルへ切り替えます。
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {shiftSteps.map((step, index) => (
              <div
                key={step}
                className="border-l border-cyan-100/35 bg-[#061a33] px-4 py-4"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-cyan-100">
                  STEP {index + 1}
                </p>
                <p className="mt-2 font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            className="relative mx-auto aspect-square w-full max-w-[22rem]"
            aria-label="NARERUが提唱する心技体の統合モデル図"
          >
            <div className="absolute left-[8%] top-[16%] grid h-[46%] w-[46%] place-items-center rounded-full border border-cyan-100/35 bg-cyan-100/10 text-center shadow-[0_0_70px_rgba(178,245,255,0.08)]">
              <span className="font-serif text-3xl font-semibold text-cyan-50">
                心
              </span>
            </div>
            <div className="absolute right-[8%] top-[16%] grid h-[46%] w-[46%] place-items-center rounded-full border border-blue-300/35 bg-blue-300/10 text-center shadow-[0_0_70px_rgba(93,173,226,0.08)]">
              <span className="font-serif text-3xl font-semibold text-blue-50">
                技
              </span>
            </div>
            <div className="absolute bottom-[8%] left-1/2 grid h-[46%] w-[46%] -translate-x-1/2 place-items-center rounded-full border border-slate-100/35 bg-slate-100/10 text-center shadow-[0_0_70px_rgba(255,255,255,0.07)]">
              <span className="font-serif text-3xl font-semibold text-slate-50">
                体
              </span>
            </div>
            <div className="absolute left-1/2 top-1/2 grid h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#4ade80] p-4 text-center text-[#041225] shadow-[0_0_80px_rgba(74,222,128,0.35)]">
              <span className="text-sm font-bold leading-6 sm:text-base">
                実力
                <br />
                発揮
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {shingitaiParts.map((part) => (
              <article key={part.label} className="bg-[#061a33] px-4 py-5">
                <h4 className="font-serif text-2xl font-semibold text-cyan-50">
                  {part.label}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {part.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
