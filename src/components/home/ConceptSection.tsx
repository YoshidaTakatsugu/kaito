import Image from "next/image";

import { conceptContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function ConceptSection() {
  return (
    <section id="concept" className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <figure className="border border-cyan-100/15 bg-white/[0.04] p-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#001f3f] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/S__3153967_0.jpg"
              alt="結果に相応しいメンタルを育むためにアスリートと対話するスポーツメンタルコーチ押田海斗"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[56%_center]"
            />
          </div>
        </figure>

        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">NARERU CONCEPT</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">{conceptContent.title}</h2>
          <p className="mt-8 text-lg leading-9 text-slate-300">{conceptContent.body}</p>
          <div className="mt-10 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 border-y border-cyan-100/15 py-7 text-center">
            {["メンタル", "行動", "結果"].map((label, index) => (
              <div key={label} className="contents">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#d6ae64]">0{index + 1}</p>
                  <p className="mt-2 font-serif text-lg font-semibold text-white sm:text-2xl">{label}</p>
                </div>
                {index < 2 ? <span aria-hidden="true" className="text-cyan-100/60">→</span> : null}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
