import Image from "next/image";

import { HeroCopyMotion } from "./HeroCopyMotion";

const heroImageAlt =
  "本番で力を発揮し高めてきた能力を結果につなげるスポーツメンタルコーチ押田海斗のトップビジュアル";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(92svh-4rem)] overflow-hidden bg-[#031226] text-white sm:min-h-[calc(100svh-4rem)]"
    >
      <Image
        src="/images/Top.jpg"
        alt={heroImageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover object-[63%_center] sm:object-[60%_center] lg:object-[70%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,38,0.08)_0%,rgba(3,18,38,0.35)_42%,rgba(3,18,38,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,38,0.92)_0%,rgba(3,18,38,0.72)_38%,rgba(3,18,38,0.2)_72%,rgba(3,18,38,0.04)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#031226]/80 to-transparent" />

      <p className="absolute left-5 right-5 top-8 z-10 max-w-[22rem] text-balance text-xs font-semibold leading-6 tracking-[0.11em] text-cyan-50/90 drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)] sm:left-8 sm:top-10 sm:text-sm lg:left-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        あなたが悩んでいる理由は、
        <span className="block pl-5">
          本気で自分の能力を高めてきたから。
        </span>
      </p>

      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-4rem)] w-full max-w-7xl items-center px-5 pb-10 pt-28 sm:min-h-[calc(100svh-4rem)] sm:px-8 sm:pb-12 sm:pt-28 lg:pb-20 lg:pt-20">
        <div className="w-full max-w-[25rem] sm:max-w-[34rem] lg:max-w-[48rem]">
          <HeroCopyMotion />

          <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <a
              href="#coaching"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-100 px-6 text-sm font-semibold tracking-[0.16em] text-[#031226] shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              体験コーチングに申し込む
            </a>
            <a
              href="#flow"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-[#031226]/30 px-6 text-sm font-semibold tracking-[0.16em] text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/65 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              無料動画を受け取る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
