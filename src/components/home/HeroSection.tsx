import Image from "next/image";

import { HeroCopyMotion } from "./HeroCopyMotion";

const heroImageAlt =
  "本番で実力を発揮させるスポーツメンタルコーチ押田海斗のポートレート";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#031226] text-white"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_8%,rgba(18,98,145,0.38),transparent_35%),linear-gradient(180deg,#031226_0%,#001f3f_58%,#020b17_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-cyan-100/25" />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl content-start px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.74fr)] lg:items-center lg:gap-16 lg:py-20">
        <div className="relative mx-auto h-[46svh] min-h-[18rem] w-full max-w-[29rem] overflow-hidden rounded-b-[2rem] border border-cyan-100/15 bg-[#001f3f] shadow-[0_34px_110px_rgba(0,0,0,0.42)] sm:h-[48svh] lg:order-2 lg:h-[min(70vh,44rem)] lg:max-w-none lg:rounded-[2rem]">
          <Image
            src="/images/oshida-hero.jpg"
            alt={heroImageAlt}
            fill
            preload
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover object-[50%_18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,63,0.1)_0%,rgba(0,31,63,0.36)_48%,rgba(0,14,30,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,63,0.64)_0%,transparent_42%,rgba(0,31,63,0.18)_100%)] mix-blend-multiply" />
          <p className="absolute bottom-5 left-5 text-[0.62rem] font-semibold tracking-[0.32em] text-cyan-50/80 sm:left-7">
            KAITO OSHIDA
          </p>
        </div>

        <div className="relative z-10 -mt-12 text-center lg:order-1 lg:mt-0 lg:text-left">
          <div className="mx-auto max-w-5xl lg:mx-0">
            <HeroCopyMotion />
          </div>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
            <a
              href="#coaching"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-100 px-6 text-sm font-semibold tracking-[0.16em] text-[#031226] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              体験コーチングに申し込む
            </a>
            <a
              href="#flow"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/[0.03] px-6 text-sm font-semibold tracking-[0.16em] text-white transition-colors duration-200 hover:border-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              無料動画を受け取る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
