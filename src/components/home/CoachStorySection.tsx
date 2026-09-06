import Image from "next/image";

import { coach, coachAchievements, storyContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function CoachStorySection() {
  return (
    <section id="story" className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionReveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">STORY</p>
            <p className="mt-5 text-sm font-semibold tracking-[0.1em] text-[#d6ae64]">
              {storyContent.subtitle}
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.35] sm:text-6xl">
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
            <div className="space-y-8 text-lg leading-10 text-slate-300">
              {storyContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 border-y border-cyan-100/15">
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

            <blockquote className="mt-12 space-y-8 border-l-2 border-[#d6ae64] bg-white/[0.04] px-5 py-7 text-lg leading-10 text-slate-200 sm:px-8">
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
