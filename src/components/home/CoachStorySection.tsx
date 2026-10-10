import Image from "next/image";

import { coach, coachAchievements, storyContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function CoachStorySection() {
  const achievementStages = [...new Set(coachAchievements.map(({ stage }) => stage))];

  return (
    <section id="story" className="bg-[#041225] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">STORY</p>
            <p className="mt-5 text-sm font-semibold tracking-[0.1em] text-[#d6ae64]">
              {storyContent.subtitle}
            </p>
            <h2 className="mt-6 text-balance font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">
              {storyContent.title}
            </h2>
            <figure className="mt-9 border border-cyan-100/15 bg-white/[0.04] p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#001f3f]">
                <Image
                  src="/images/S__3153967_0.jpg"
                  alt="日本一を逃し続けた経験をコーチングの原点とするスポーツメンタルコーチ押田海斗"
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover object-[57%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/65 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-5 text-sm font-semibold leading-7 text-white">
                  {coach.name} / {coach.role}
                </figcaption>
              </div>
            </figure>
          </div>

          <div>
            <div className="space-y-6 text-pretty text-[15px] leading-8 text-slate-300 sm:text-base">
              {storyContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <table className="mt-9 w-full table-fixed border-y border-cyan-100/15 text-sm leading-6 sm:hidden">
              <caption className="sr-only">押田海斗の競技実績：時期・大会・結果</caption>
              <colgroup>
                <col className="w-[4rem]" />
                <col />
                <col className="w-[4.5rem]" />
              </colgroup>
              {achievementStages.map((stage) => {
                const achievements = coachAchievements.filter((item) => item.stage === stage);
                const stageLabel = stage === "小学" ? "小学校" : stage === "中学" ? "中学校" : stage;

                return (
                  <tbody key={stage} className="border-b border-cyan-100/10 last:border-b-0">
                    {achievements.map((achievement, index) => (
                      <tr key={achievement.event}>
                        {index === 0 ? (
                          <th
                            scope="rowgroup"
                            rowSpan={achievements.length}
                            className="py-3 pr-2 text-left align-top text-xs font-semibold text-[#d6ae64]"
                          >
                            {stageLabel}
                          </th>
                        ) : null}
                        <td className="py-3 pr-2 align-top font-semibold text-white">{achievement.event}</td>
                        <td className="py-3 text-right align-top font-semibold text-cyan-100">{achievement.result}</td>
                      </tr>
                    ))}
                  </tbody>
                );
              })}
            </table>

            <div className="mt-12 hidden border-y border-cyan-100/15 sm:block">
              {coachAchievements.map((achievement) => (
                <div
                  key={`${achievement.stage}-${achievement.event}`}
                  className="grid gap-2 border-b border-cyan-100/10 py-4 last:border-b-0 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
                >
                  <p className="text-xs font-semibold tracking-[0.15em] text-[#d6ae64]">{achievement.stage}</p>
                  <p className="font-semibold text-white">{achievement.event}</p>
                  <p className="font-semibold text-cyan-100">{achievement.result}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-12 space-y-6 border-l-2 border-[#d6ae64] bg-white/[0.04] px-5 py-7 text-pretty text-[15px] leading-8 text-slate-200 sm:px-8 sm:text-base">
              {storyContent.closingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
