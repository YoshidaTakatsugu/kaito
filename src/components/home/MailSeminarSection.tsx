import Image from "next/image";

import { coach } from "@/lib/brand";
import { seminarContent, seminarHref } from "@/lib/seminar";

export function MailSeminarSection() {
  return (
    <section
      id={seminarContent.id}
      aria-labelledby="seminar-heading"
      className="border-y border-white/10 bg-[#071a32] px-5 py-12 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-16">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[#d6ae64]">
            {seminarContent.name}
          </p>
          <h2
            id="seminar-heading"
            className="mt-5 font-serif text-2xl leading-[1.55] sm:text-4xl sm:leading-[1.45]"
          >
            {seminarContent.heading.map((line, index) => (
              <span key={line} className={`block ${index === 0 ? "mb-2 text-lg sm:text-2xl" : index === 2 ? "text-[#e8c980]" : ""}`}>{line}</span>
            ))}
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">
            {seminarContent.introduction}
          </p>

        </div>

        <div
          aria-labelledby="seminar-registration-heading"
          className="min-w-0 rounded-lg border border-[#d6ae64]/30 bg-[#0c223d] p-6 sm:p-9 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded border border-[#d6ae64]/45 px-3 py-1 text-xs font-semibold text-[#e8c980]">
              登録・購読無料
            </span>
            <span className="text-xs text-slate-300">メールでお届け</span>
          </div>
          <h3 id="seminar-registration-heading" className="mt-6 text-xl font-semibold leading-8 sm:text-2xl">
            {seminarContent.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            お申し込みページで、お名前とメールアドレスをご入力ください。
          </p>
          <a
            href={seminarHref}
            className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded bg-[#d6ae64] px-4 py-3 text-center text-sm font-semibold leading-6 text-[#031226] transition-colors hover:bg-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {seminarContent.ctaLabel}<span aria-hidden="true">→</span>
          </a>
          <p className="mt-4 text-xs leading-6 text-slate-300">
            リザストの登録フォームへ移動します。登録・購読は無料です。配信はメール内のリンクからいつでも停止できます。
          </p>
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <ul aria-label="こんな方におすすめです" className="space-y-3">
            {seminarContent.audience.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-100 sm:text-[15px] sm:leading-7">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#d6ae64]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
            <Image
              src="/images/oshida-hero.jpg"
              alt="無料メールセミナーをお届けするスポーツメンタルコーチ押田海斗"
              width={64}
              height={64}
              sizes="64px"
              className="size-16 shrink-0 rounded-full object-cover object-top"
            />
            <p className="text-xs leading-6 text-slate-300">
              {coach.role}
              <span className="block text-base font-semibold text-white">{coach.name}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
