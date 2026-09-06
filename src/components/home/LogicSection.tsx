import { logicContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function LogicSection() {
  return (
    <section id="logic" className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionReveal className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">LOGIC</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              {logicContent.title}
            </h2>
          </div>
          <div>
            <h3 className="font-serif text-2xl leading-[1.75] text-cyan-50 sm:text-3xl">
              {logicContent.conclusion}
            </h3>
            <p className="mt-7 text-lg leading-9 text-slate-300">
              {logicContent.description}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
