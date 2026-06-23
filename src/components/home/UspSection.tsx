import { SectionReveal } from "./SectionReveal";

const reasons = [
  {
    label: "01",
    title: "20代の現役感覚で、選手の近くに立てる。",
    text: "年齢や立場の距離が近いから、指導者には言いづらい本音や、試合前の揺らぎをそのまま扱えます。",
  },
  {
    label: "02",
    title: "思い込みとセルフイメージを、勝負の前から整える。",
    text: "「大事な場面で失敗する」という無意識の前提をほどき、身体が動ける心の状態を作ります。",
  },
  {
    label: "03",
    title: "心技体を、精神論ではなく結果の因果関係で見る。",
    text: "メンタルを気合いで片づけず、心が行動を変え、行動が結果を変える流れとして設計します。",
  },
  {
    label: "04",
    title: "勝ちきれなかった痛みを、競技者の内側から知っている。",
    text: "日本一を逃し続けた経験があるから、あと一歩の選手に必要な最後の壁を一緒に見つけられます。",
  },
] as const;

export function UspSection() {
  return (
    <section id="usp" className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              WHY NARERU
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-5xl">
              NARERUが選ばれる理由
            </h2>
          </div>
          <p className="font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
            NARERUは、あなたを励ますだけの場所ではありません。勝負の場で能力を結果につなげるために、思い込み・行動・心技体を同じ線上で整えるコーチングです。
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.label}
              className="group relative overflow-hidden border border-cyan-100/15 bg-white/[0.045] p-6 transition-transform duration-200 hover:-translate-y-1 hover:bg-white/[0.065]"
            >
              <p
                aria-hidden="true"
                className="absolute right-4 top-4 font-serif text-7xl font-semibold leading-none tracking-[-0.08em] text-white/10"
              >
                {reason.label}
              </p>
              <p className="text-xs font-semibold tracking-[0.24em] text-cyan-100">
                REASON {reason.label}
              </p>
              <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-snug text-white">
                {reason.title}
              </h3>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
