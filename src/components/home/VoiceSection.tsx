import Image from "next/image";
import { featuredAthleteVoice } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function VoiceSection() {
  return (
    <section id="voice" className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <header className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              VOICE / RESULTS
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              お客様の声・実績
            </h2>
          </div>
          <p className="font-serif text-2xl leading-[1.8] text-cyan-50 sm:text-3xl">
            <span className="block">高めてきた能力が、</span>
            <span className="block">本番の結果へつながり始めた変化。</span>
          </p>
        </header>

        <SectionReveal className="mt-14">
          <article
            aria-labelledby="featured-athlete-voice-title"
            className="overflow-hidden border border-cyan-100/15 bg-[#071a32] shadow-[0_28px_90px_rgba(0,0,0,0.24)]"
          >
            <header className="grid lg:grid-cols-[1.12fr_0.88fr]">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
                <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
                  {featuredAthleteVoice.label}
                </p>
                <h3
                  id="featured-athlete-voice-title"
                  className="mt-6 max-w-3xl font-serif text-3xl leading-[1.55] text-white sm:text-4xl lg:text-5xl"
                >
                  {featuredAthleteVoice.title}
                </h3>
                <p className="mt-8 border-l-2 border-[#67d5ae] pl-5 text-sm font-semibold leading-7 text-cyan-50 sm:text-base">
                  {featuredAthleteVoice.profile}
                </p>
              </div>

              <figure className="relative min-h-[320px] overflow-hidden bg-[#001f3f] sm:min-h-[420px] lg:min-h-[520px]">
                <Image
                  src="/images/S__3153968_0.jpg"
                  alt="選手の成長と結果を喜ぶスポーツメンタルコーチ押田海斗"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/75 via-transparent to-[#041225]/10" />
                <figcaption className="absolute bottom-5 left-5 border-l border-cyan-100/60 pl-4 text-xs font-semibold tracking-[0.16em] text-cyan-50 sm:bottom-7 sm:left-7">
                  SPORTS MENTAL COACH / KAITO OSHIDA
                </figcaption>
              </figure>
            </header>

            <div className="border-t border-cyan-100/15 px-6 py-4 sm:px-10 lg:px-14">
              {featuredAthleteVoice.questions.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className="group border-b border-cyan-100/15 last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 text-left font-semibold leading-7 text-white transition-colors hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-cyan-100/25 text-lg font-light text-[#67d5ae] transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="max-w-4xl pb-8 pr-2 text-[15px] leading-8 text-slate-300 sm:text-base sm:leading-9">
                    {item.answers.map((answer) => (
                      <p key={answer} className="mt-4 first:mt-0">
                        {answer}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </article>
        </SectionReveal>

        <SectionReveal className="mt-8">
          <figure className="grid gap-8 border border-cyan-100/15 bg-white/[0.045] px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[0.42fr_1fr] lg:gap-14 lg:px-14">
            <figcaption>
              <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">
                {featuredAthleteVoice.parentVoice.label}
              </p>
              <h3 className="mt-5 font-serif text-2xl leading-[1.7] text-white sm:text-3xl">
                {featuredAthleteVoice.parentVoice.title}
              </h3>
            </figcaption>

            <blockquote className="border-l border-cyan-100/20 pl-6 sm:pl-8">
              <div className="space-y-5 text-[15px] leading-8 text-slate-300 sm:text-base sm:leading-9">
                {featuredAthleteVoice.parentVoice.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <footer className="mt-8 text-sm font-semibold tracking-[0.08em] text-cyan-50">
                {featuredAthleteVoice.parentVoice.attribution}
              </footer>
            </blockquote>
          </figure>
        </SectionReveal>

        <p className="mt-10 border-l border-[#67d5ae] pl-5 text-sm font-semibold leading-7 tracking-[0.06em] text-slate-200">
          現在、多くのアスリートが変化を体感中。順次公開予定です
        </p>
      </div>
    </section>
  );
}
