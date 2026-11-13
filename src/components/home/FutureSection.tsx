import Link from "next/link";
import { futureContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function FutureSection() {
  return (
    <section id="future" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal soft className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">FUTURE</p>
          <h2 className="mt-5 font-serif text-[23px] leading-[1.5] min-[360px]:text-2xl sm:text-4xl">
            <span className="block whitespace-nowrap">{futureContent.title.replace("獲得できる未来とは", "")}</span>
            <span className="block whitespace-nowrap"><span aria-hidden="true" className="whitespace-pre">{"          "}</span>獲得できる未来とは</span>
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
                <span className="text-pretty text-[15px] font-semibold leading-7 text-slate-100 sm:text-base">
                  {index === 2 || index === 3 ? (
                    <>
                      {benefit.split("、")[0]}、<br />
                      {benefit.split("、").slice(1).join("、")}
                    </>
                  ) : benefit}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">
            <span className="block">そんな自分へ、</span>
            <span className="block">少しずつ近づいていきます。</span>
          </p>
          <Link href="/mental-coaching/" data-press-tone="outline" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#d6ae64] px-3 py-3 text-center text-sm font-semibold leading-6 text-[#e8c980] transition-colors hover:bg-[#d6ae64] hover:text-[#031226] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:px-6">
            <span>スポーツメンタルコーチングとは</span>
            <span aria-hidden="true" className="shrink-0">→</span>
          </Link>
        </div>

      </SectionReveal>
    </section>
  );
}
