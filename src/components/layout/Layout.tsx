import type { ReactNode } from "react";
import { coach, faqs, site } from "@/lib/brand";
import { Navigation } from "./Navigation";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-[#041225] text-slate-50">
      <Navigation />
      <main>{children}</main>
      <section id="faq" className="bg-[#061a33] px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              FAQ
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              よくある質問
            </h2>
          </div>
          <dl className="grid gap-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-t border-white/10 pt-5">
                <dt className="text-base font-semibold text-white">
                  {faq.question}
                </dt>
                <dd className="mt-3 leading-8 text-slate-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-[#030d1b] px-5 py-8 text-sm text-slate-300 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold tracking-[0.28em] text-white">
            {site.name}
          </p>
          <p className="max-w-xl text-slate-400">
            {coach.name} / {coach.role}。結果に相応しい自分になれる心の土台を、競技者とともに整える。
          </p>
        </div>
      </footer>
    </div>
  );
}
