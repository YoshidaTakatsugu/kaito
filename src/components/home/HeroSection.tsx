import Image from "next/image";

import { heroContent } from "@/lib/brand";
import { HeroCopyMotion } from "./HeroCopyMotion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="home-hero relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#031226] text-white"
    >
      <Image
        src="/images/Top.jpg"
        alt="本番で実力を発揮させるスポーツメンタルコーチ押田海斗のポートレート"
        fill
        loading="eager"
        sizes="100vw"
        className="hero-photo object-cover object-[64%_center] sm:object-[61%_center] lg:object-[70%_8%]"
      />
      <div className="hero-shade-vertical absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,38,0.08)_0%,rgba(3,18,38,0.3)_38%,rgba(3,18,38,0.94)_100%)]" />
      <div className="hero-shade-horizontal absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.96)_0%,rgba(3,18,38,0.74)_42%,rgba(3,18,38,0.12)_78%)]" />

      <p aria-hidden="true" className="hero-opening absolute left-5 top-8 z-10 text-xs font-semibold leading-[1.9] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] sm:left-8 sm:top-10 sm:text-base lg:left-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:text-lg">
        <span className="block">{heroContent.titleLines[0]}</span>
        <span className="block">{heroContent.titleLines[1]}</span>
      </p>

      <div className="pointer-events-none absolute bottom-24 right-[5%] z-[1] hidden h-48 w-56 opacity-75 lg:block xl:h-56 xl:w-64">
        <Image
          src="/images/nareru-logo.png"
          alt="NARERU 結果に相応しい自分になれるスポーツメンタルコーチングのロゴ"
          fill
          sizes="(min-width: 1280px) 256px, 224px"
          className="object-contain"
        />
      </div>

      <div className="hero-content relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl items-end px-5 pb-7 pt-32 sm:px-8 sm:pb-12 lg:pb-24 lg:pt-28">
        <div className="w-full max-w-[35rem] lg:max-w-[47rem]">
          <HeroCopyMotion />
          <div className="hero-actions mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
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

    </section>
  );
}
