import { futureContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function FutureSection() {
  return (
    <section id="future" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">FUTURE</p>
          <h2 className="mt-6 text-balance font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">
            {futureContent.title}
          </h2>
          <p className="mt-7 text-pretty text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
            {futureContent.introduction}
          </p>
          <ol className="mt-9 grid gap-3">
            {futureContent.benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="grid grid-cols-[3rem_1fr] items-center border border-cyan-100/12 bg-white/[0.045] px-5 py-4"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-[#d6ae64]">
                  0{index + 1}
                </span>
                <span className="text-pretty text-[15px] font-semibold leading-7 text-slate-100 sm:text-base">{benefit}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">{futureContent.closing}</p>
        </div>

      </SectionReveal>
    </section>
  );
}
