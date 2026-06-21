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

export function LogicSection() {
  return (
    <section id="logic" className="bg-white px-5 py-24 text-[#001f3f] sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-[#0b5f8f]">
            LOGIC
          </p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
            なぜ、あなたは本番で力を発揮できないのか？
          </h2>
        </div>

        <div className="space-y-10">
          <p className="font-serif text-2xl leading-[1.85] text-[#001f3f] sm:text-3xl">
            本番で力を出せない最大の理由は、過去の経験から作られた「思い込み」が、無意識のうちにブレーキになっているからです。
          </p>
          <p className="max-w-3xl text-lg leading-9 text-slate-700">
            NARERUは、この思い込みを緩めることで、あなたが本来持つ力を自然に発揮できる状態へ導きます。扱うのは性格の弱さではなく、心が行動と結果に与えている因果関係です。
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {logicPoints.map((point, index) => (
              <article
                key={point.label}
                className="border-t border-[#001f3f]/20 pt-5"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-[#0b5f8f]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#001f3f]">
                  {point.label}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
