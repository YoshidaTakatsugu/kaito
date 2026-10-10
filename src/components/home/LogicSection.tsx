import { logicContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function LogicSection() {
  return (
    <section id="logic" className="bg-[#041225] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">LOGIC</p>
            <h2 className="mt-6 text-balance font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]">
              {logicContent.title}
            </h2>
          </div>
          <div>
            <h3 className="text-balance font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">
              {logicContent.conclusion}
            </h3>
            <p className="mt-6 text-pretty text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
              {logicContent.description}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
