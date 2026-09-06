import Image from "next/image";

import { heroContent } from "@/lib/brand";
import { HeroCopyMotion } from "./HeroCopyMotion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#031226] text-white"
    >
      <Image
        src="/images/Top.jpg"
        alt="本番で実力を発揮させるスポーツメンタルコーチ押田海斗のポートレート"
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-[64%_center] sm:object-[61%_center] lg:object-[70%_8%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,38,0.08)_0%,rgba(3,18,38,0.3)_38%,rgba(3,18,38,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.96)_0%,rgba(3,18,38,0.74)_42%,rgba(3,18,38,0.12)_78%)]" />

      <p className="absolute left-5 right-5 top-7 z-10 max-w-[25rem] text-xs font-semibold leading-6 tracking-[0.08em] text-cyan-50/90 drop-shadow-[0_3px_16px_rgba(0,0,0,0.5)] sm:left-8 sm:top-10 sm:text-sm lg:left-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {heroContent.eyebrow}
      </p>

      <div className="pointer-events-none absolute bottom-20 right-[3%] z-[1] hidden size-[24rem] opacity-75 lg:block xl:size-[29rem]">
        <Image
          src="/images/logo2.png"
          alt="NARERU 結果に相応しい自分になれるスポーツメンタルコーチングのロゴ"
          fill
          sizes="29rem"
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-end px-5 pb-7 pt-32 sm:px-8 sm:pb-12 lg:items-center lg:pb-16 lg:pt-28">
        <div className="w-full max-w-[35rem] lg:max-w-[47rem]">
          <HeroCopyMotion />
          <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center bg-[#d6ae64] px-5 text-center text-sm font-semibold tracking-[0.08em] text-[#031226] transition-colors duration-200 hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {heroContent.primaryCta.label}
              <span aria-hidden="true" className="ml-3">→</span>
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex min-h-12 items-center justify-center border border-white/40 bg-[#031226]/45 px-5 text-center text-sm font-semibold tracking-[0.06em] text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/75 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {heroContent.secondaryCta.label}
              <span aria-hidden="true" className="ml-3">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-[#031226]/78 backdrop-blur-sm lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-[16rem_1fr] items-center gap-8 px-8 py-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#d6ae64]">
            NARERUの信念
          </p>
          <p className="text-lg text-slate-100">
            人には、まだ発揮されていない可能性がある。
          </p>
        </div>
      </div>
    </section>
  );
}
