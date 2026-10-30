import Link from "next/link";

import { trialContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              SERVICE
            </p>
            <h2 className="mt-5 font-serif text-2xl leading-[1.5] sm:text-4xl">
              体験コーチング
            </h2>
          </div>
          <p className="font-serif text-[17px] leading-[1.8] text-cyan-50 sm:text-xl">
            <span className="block whitespace-nowrap">今の自分から変わっていく、</span>
            <span className="block whitespace-nowrap">最初の一歩を一緒に見つけます。</span>
          </p>
        </header>

        <article className="mt-7 grid overflow-hidden border border-[#d6ae64]/50 bg-[#031226] sm:mt-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between border-b border-[#d6ae64]/25 bg-[#d6ae64] p-5 text-[#031226] sm:p-8 lg:border-b-0 lg:border-r">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#031226]/65">
                TRIAL COACHING
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-[1.5] sm:text-2xl">
                体験コーチング
              </h3>
            </div>
            <p className="mt-5 font-sans text-xl font-semibold leading-[1.5] sm:text-3xl">
              {trialContent.details[0].value}
            </p>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <p className="text-pretty text-sm leading-[1.85] text-slate-300 sm:text-base">
              {trialContent.overview}
            </p>

            <dl className="mt-6 border-y border-cyan-100/15">
              {trialContent.details.slice(1).map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-2 border-b border-cyan-100/10 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="text-xs font-semibold tracking-[0.16em] text-[#67d5ae]">
                    {detail.label}
                  </dt>
                  <dd className="text-sm font-semibold leading-[1.85] text-white sm:text-base">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/trial/"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center border border-[#d6ae64] px-4 py-3 text-center text-sm font-semibold leading-[1.6] text-[#d6ae64] transition-colors hover:bg-[#d6ae64] hover:text-[#031226] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <span><span className="block sm:inline">体験コーチング</span><span className="block sm:inline">詳細・お申込み</span></span>
              <span aria-hidden="true" className="ml-3 shrink-0">
                →
              </span>
            </Link>
          </div>
        </article>
      </SectionReveal>
    </section>
  );
}
