import { VoiceCards, type VoiceCase } from "./VoiceCards";

const voiceCases = [
  {
    id: "karate-top-athlete",
    icon: "空",
    imageSrc: "/images/S__3153968_0.jpg",
    imageAlt:
      "空手大会で実力を発揮する日本代表経験のあるトップアスリートのイメージ用プレースホルダー",
    attribute: "25歳 男性 / 空手競技（組手）",
    sport: "KARATE",
    conclusion:
      "「負けてはいけない」という思い込みが外れ、全日本で初めて競技を心から楽しめた。",
    body: "技術は日本トップクラスなのに、大舞台になると自信を失う負のサイクルにいました。海斗コーチは同世代なので指導者には言えない本音を話せ、自分のブレーキの正体に気づけました。最後の一ピースである「心」が埋まった感覚です。",
  },
  {
    id: "high-school-tennis",
    icon: "庭",
    imageSrc: "/images/S__3153966_0.jpg",
    imageAlt:
      "硬式テニスの試合で練習通りのプレーを発揮する高校生アスリートのイメージ用プレースホルダー",
    attribute: "17歳 男性 / 硬式テニス",
    sport: "TENNIS",
    conclusion:
      "プレッシャーを力に変える捉え方を学び、練習通りのプレーが試合で出せるようになった。",
    body: "大事な場面で体が萎縮していましたが、自分の思考が自分を追い詰めていたと気づき、セッション後はいつも心が軽くなり自然と笑顔になれました。今では試合がワクワクするものに変わっています。",
  },
  {
    id: "pro-mma",
    icon: "拳",
    imageSrc: "/images/S__3153969_0.jpg",
    imageAlt:
      "総合格闘技の練習で競技を続ける意味を再発見したプロ格闘家のイメージ用プレースホルダー",
    attribute: "20代 男性 / 総合格闘技",
    sport: "MMA",
    conclusion:
      "競技を続けている「本当の意味」を再発見し、日々の練習の質が劇的に向上した。",
    body: "今の練習環境に苦手意識があり結果が出ない焦りを感じていましたが、海斗コーチとの対話で物事の捉え方が広がり、客観的に自分を見れるようになりました。練習がワクワクするものに変わり、幸福度も高まっています。",
  },
] satisfies readonly VoiceCase[];

export function VoiceSection() {
  return (
    <section id="voice" className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              VOICE / RESULTS
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              お客様の声・実績
            </h2>
          </div>
          <p className="font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
            NARERUでは、思い込みのブレーキをほどき、競技本番で力を出し切る変化が生まれています。
          </p>
        </div>

        <div className="mt-14">
          <VoiceCards cases={voiceCases} />
        </div>

        <p className="mt-10 border-l border-[#4ade80]/70 pl-5 text-sm font-semibold leading-7 tracking-[0.08em] text-slate-200">
          現在、多くのアスリートが変化を体感中。順次公開予定です。
        </p>
      </div>
    </section>
  );
}
