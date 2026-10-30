import { empathyContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function EmpathySection() {
  return (
    <section id="problem" className="bg-[#041225] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header>
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">EMPATHY</p>
            <h2 className="mt-6 font-serif text-[28px] leading-[1.4] min-[375px]:text-[2rem] sm:text-5xl sm:leading-[1.3]">
              <span className="block">こんな悩みを</span>
              <span className="block">抱えていませんか？</span>
            </h2>
          </div>
        </header>

        <div className="mt-10 max-w-5xl sm:mt-14">
          <div className="grid gap-3">
            {empathyContent.worries.map((worry, index) => (
              <article
                key={worry}
                className="grid grid-cols-[1.5rem_1fr] items-center gap-3 border border-cyan-100/15 bg-white/[0.045] p-5 sm:gap-4"
              >
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#d6ae64]">
                  <path d="M20 13v7H4V4h11" />
                  <path d="m7 11 4 4L21 5" />
                </svg>
                <p className="text-pretty text-[15px] font-semibold leading-7 text-slate-100 sm:text-base">
                  {index === 0 ? <><span className="block sm:inline">練習ではできるのに</span><span className="block sm:inline">試合になるとできない</span></> : index === 4 ? <><span className="block">自分ならもっと活躍できるはずだと、</span><span className="block">モヤモヤしている</span></> : worry}
                </p>
              </article>
            ))}
          </div>

        </div>

        <p className="mt-7 max-w-5xl text-pretty border-l-2 border-[#d6ae64] bg-white/[0.04] px-5 py-5 font-serif text-base leading-[1.8] text-cyan-50 sm:px-8 sm:text-xl">
          {empathyContent.closing}
        </p>
      </SectionReveal>
    </section>
  );
}
