import Link from "next/link";

import { trialContent } from "@/lib/brand";
import { SectionReveal } from "./SectionReveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <header className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              SERVICE
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              体験コーチング
            </h2>
          </div>
          <p className="font-serif text-2xl leading-[1.8] text-cyan-50 sm:text-3xl">
            今の自分から変わっていく、最初の一歩を一緒に見つけます。
          </p>
        </header>

        <article className="mt-14 grid overflow-hidden border border-[#d6ae64]/50 bg-[#031226] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between border-b border-[#d6ae64]/25 bg-[#d6ae64] p-7 text-[#031226] sm:p-10 lg:border-b-0 lg:border-r">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#031226]/65">
                TRIAL COACHING
              </p>
              <h3 className="mt-7 text-3xl font-semibold leading-[1.45] sm:text-4xl">
                体験コーチング
              </h3>
            </div>
            <p className="mt-12 font-sans text-2xl font-semibold sm:text-3xl">
              {trialContent.details[0].value}
            </p>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-base leading-9 text-slate-300 sm:text-lg">
              {trialContent.overview}
            </p>

            <dl className="mt-9 border-y border-cyan-100/15">
              {trialContent.details.slice(1).map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-2 border-b border-cyan-100/10 py-5 last:border-b-0 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="text-xs font-semibold tracking-[0.16em] text-[#67d5ae]">
                    {detail.label}
                  </dt>
                  <dd className="font-semibold leading-8 text-white">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/trial/"
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center border border-[#d6ae64] px-7 text-center text-sm font-semibold tracking-[0.08em] text-[#d6ae64] transition-colors hover:bg-[#d6ae64] hover:text-[#031226] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              体験コーチングの詳細・お申し込み
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>
          </div>
        </article>
      </SectionReveal>
    </section>
  );
}
