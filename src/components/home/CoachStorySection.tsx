import Link from "next/link";

import { coachAchievements, storyContent } from "@/lib/brand";

export function CoachStorySection() {
  const achievementStages = [
    ...new Set(coachAchievements.map(({ stage }) => stage)),
  ];

  return (
    <section id="story" className="story-chapter story-closing">
      <header>
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8ed9e7]">
          06 / RECORD & MESSAGE
        </p>
        <h2>
          <span>競技実績と、</span>
          <span>選手への想い</span>
        </h2>
      </header>

      <table className="story-achievements w-full table-fixed text-sm leading-[1.7]">
        <caption className="sr-only">
          押田海斗の競技実績：時期・大会・結果
        </caption>
        <colgroup>
          <col className="w-[3.5rem] sm:w-20" />
          <col />
          <col className="w-[4.5rem] sm:w-24" />
        </colgroup>
        {achievementStages.map((stage) => {
          const achievements = coachAchievements.filter(
            (item) => item.stage === stage,
          );
          const stageLabel =
            stage === "小学" ? "小学校" : stage === "中学" ? "中学校" : stage;
          return (
            <tbody key={stage}>
              {achievements.map((achievement, index) => (
                <tr key={achievement.event}>
                  {index === 0 && (
                    <th
                      scope="rowgroup"
                      rowSpan={achievements.length}
                      className="pr-2 text-left align-top text-xs font-semibold text-[#d6ae64]"
                    >
                      {stageLabel}
                    </th>
                  )}
                  <td className="pr-2 align-top text-slate-200">
                    {achievement.event}
                  </td>
                  <td className="text-right align-top font-semibold text-cyan-100">
                    {achievement.result}
                  </td>
                </tr>
              ))}
            </tbody>
          );
        })}
      </table>

      <div className="story-prose mt-6">
        {storyContent.closingParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link
          href="/trial/"
          className="inline-flex min-h-12 items-center justify-center bg-[#d6ae64] px-4 py-3 text-center text-sm font-semibold text-[#031226] hover:bg-[#e8c980]"
        >
          体験コーチングを見る
        </Link>
        <Link
          href="/profile/"
          className="inline-flex min-h-12 items-center justify-center border border-cyan-100/30 px-4 py-3 text-center text-sm font-semibold hover:bg-white/5"
        >
          経歴・プロフィールを見る
        </Link>
      </div>
    </section>
  );
}
