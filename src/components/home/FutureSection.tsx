import Image from "next/image";

import { futureContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function FutureSection() {
  return (
    <section id="future" className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">FUTURE</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            {futureContent.title}
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-300">
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
                <span className="font-semibold leading-8 text-slate-100">{benefit}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-serif text-2xl text-cyan-50">{futureContent.closing}</p>
        </div>

        <figure className="border border-cyan-100/15 bg-white/[0.045] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#001f3f] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/S__3153968_0.jpg"
              alt="試合で自分の力を出し切り理想の結果に近づく未来を示すスポーツメンタルコーチ押田海斗"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[50%_center]"
            />
          </div>
        </figure>
      </SectionReveal>
    </section>
  );
}
