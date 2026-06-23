import Image from "next/image";

import { coach, coachAchievements } from "@/lib/brand";
import { getStoryProofImage } from "@/lib/site-images";
import { SectionReveal } from "./SectionReveal";

const storyMessages = [
  "勝てるだけの技術も、動けるだけの身体もあった。それでも、頂点の一歩手前で何度も止まった。",
  "その経験があるから、私は「力がないから負けた」と簡単には言いません。能力がある選手ほど、結果に近づくほど、心の器が問われる瞬間があります。",
  "NARERUは、あなたの可能性を根拠なく励ます場所ではありません。高めてきた能力を、勝負の場で結果につなげるために、最後の心のピースを一緒に埋める場所です。",
] as const;

export function CoachStorySection() {
  const storyProofImage = getStoryProofImage();

  return (
    <section id="story" className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            STORY
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.35] tracking-[-0.01em] sm:text-5xl">
            1番を一番逃したコーチだから、勝ちきれない痛みに伴走できる。
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-300">
            技術も体も揃っていたのに、なぜ勝てなかったのか。その答えが「心の器」でした。
            負け続けた痛みを知る私だからこそ、勝ちきれない選手の最後の壁を壊せます。
          </p>

          <div className="mt-10 space-y-4">
            {storyMessages.map((message) => (
              <p
                key={message}
                className="border-l border-cyan-100/35 bg-white/[0.045] px-5 py-4 leading-8 text-slate-200"
              >
                {message}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1fr] lg:items-start">
            <figure className="border border-cyan-100/15 bg-white/[0.045] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#001f3f]">
                <Image
                  src={storyProofImage.src}
                  alt={storyProofImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover object-[55%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/30 via-transparent to-transparent" />
              </div>
              {storyProofImage.caption ? (
                <figcaption className="mt-4 text-xs font-semibold leading-6 tracking-[0.08em] text-slate-300">
                  {storyProofImage.caption}
                </figcaption>
              ) : null}
            </figure>

            <div className="border-y border-cyan-100/15">
              {coachAchievements.map((achievement) => (
                <div
                  key={`${achievement.event}-${achievement.result}`}
                  className="grid gap-3 border-b border-cyan-100/10 py-5 last:border-b-0 sm:grid-cols-[0.42fr_1fr_0.38fr]"
                >
                  <p className="text-sm font-semibold tracking-[0.16em] text-cyan-100">
                    {achievement.stage}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {achievement.event}
                  </p>
                  <p className="text-left text-lg font-semibold text-slate-300 sm:text-right">
                    {achievement.result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-cyan-100/15 bg-white/[0.045] p-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan-100">
              BELIEF
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-snug">
              あなたに可能性があると信じる理由は、すでに本気で積み上げてきたものがあるからです。
            </h3>
            <p className="mt-5 leading-8 text-slate-300">
              本番で力を出せないことは、努力が足りない証拠ではありません。
              むしろ、本気で能力を高めてきた選手ほど、負けたくない想いが強くなり、無意識のブレーキも強くなる。
              だからこそ、心の整え方を変えれば、あなたの競技人生はまだ変えられます。
            </p>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            Coach: {coach.name} / {coach.role}
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
