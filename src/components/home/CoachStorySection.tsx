import Image from "next/image";

import { coach, coachAchievements } from "@/lib/brand";
import { getStoryProofImage } from "@/lib/site-images";

export function CoachStorySection() {
  const storyProofImage = getStoryProofImage();

  return (
    <section id="story" className="bg-white px-5 py-24 text-[#001f3f] sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-[#0b5f8f]">
            E-E-A-T
          </p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.35] tracking-[-0.01em] sm:text-5xl">
            日本で一番、日本一を逃したからこそ、あなたの最後の一片（ピース）を埋められる。
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-700">
            技術も体も揃っていたのに、なぜ勝てなかったのか。その答えが「心の器」でした。負け続けた痛みを知る私だからこそ、勝ちきれない選手の最後の壁を壊せます。
          </p>
        </div>

        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1fr] lg:items-start">
            <figure className="border border-[#001f3f]/10 bg-slate-50 p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#001f3f]">
                <Image
                  src={storyProofImage.src}
                  alt={storyProofImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover"
                />
              </div>
              {storyProofImage.caption ? (
                <figcaption className="mt-4 text-xs font-semibold leading-6 tracking-[0.08em] text-slate-600">
                  {storyProofImage.caption}
                </figcaption>
              ) : null}
            </figure>

            <div className="border-y border-[#001f3f]/15">
              {coachAchievements.map((achievement) => (
                <div
                  key={`${achievement.event}-${achievement.result}`}
                  className="grid gap-3 border-b border-[#001f3f]/10 py-5 last:border-b-0 sm:grid-cols-[0.42fr_1fr_0.38fr]"
                >
                  <p className="text-sm font-semibold tracking-[0.16em] text-[#0b5f8f]">
                    {achievement.stage}
                  </p>
                  <p className="text-lg font-semibold text-[#001f3f]">
                    {achievement.event}
                  </p>
                  <p className="text-left text-lg font-semibold text-slate-600 sm:text-right">
                    {achievement.result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="border-l border-[#0b5f8f]/40 bg-slate-50 px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#0b5f8f]">
                EXPERIENCE
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                日本で一番、日本一を逃したメンタルコーチ。
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                あと一歩の悔しさを、競技者の外側からではなく内側から知っています。
              </p>
            </article>
            <article className="border-l border-[#0b5f8f]/40 bg-slate-50 px-5 py-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#0b5f8f]">
                RARITY
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                日本でも稀な20代のプロコーチ。
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                指導者との壁を感じる選手にも、同世代のパートナーとして近い距離で伴走します。
              </p>
            </article>
          </div>

          <p className="text-sm leading-7 text-slate-500">
            Coach: {coach.name} / {coach.role}
          </p>
        </div>
      </div>
    </section>
  );
}
