import { aspirationContent as content } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function AspirationSection() {
  return (
    <section id="problem" className="bg-[#041225] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header>
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">ASPIRATION</p>
            <h2 className="mt-5 font-serif text-2xl leading-[1.5] min-[375px]:text-[28px] sm:text-5xl sm:leading-[1.3]">
              <span className="block">こんな想いを、</span>
              <span className="block">胸に抱いていませんか？</span>
            </h2>
          </div>
        </header>

        <div className="mt-7 max-w-5xl sm:mt-10">
          <ul className="grid gap-3">
            {content.aspirations.map((aspiration) => (
              <li
                key={aspiration}
                className="grid grid-cols-[1.5rem_1fr] items-center gap-3 border border-cyan-100/15 bg-white/[0.045] p-4 sm:gap-4 sm:p-5"
              >
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#d6ae64]">
                  <path d="M20 13v7H4V4h11" />
                  <path d="m7 11 4 4L21 5" />
                </svg>
                <p className="text-pretty text-[15px] font-semibold leading-7 text-slate-100 sm:text-base">
                  {aspiration}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-7 max-w-3xl space-y-4 text-sm leading-[1.85] text-slate-300 sm:mt-9 sm:text-base">
          <p>{content.introduction}</p>
          <p><strong className="font-semibold text-cyan-50">{content.emphasis}</strong></p>
          {content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <p className="pt-2"><strong className="font-semibold text-[#e8c980]">{content.closingLead}</strong></p>
          <p>{content.closing}</p>
        </div>
      </SectionReveal>
    </section>
  );
}
