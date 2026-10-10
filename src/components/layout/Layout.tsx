import type { ReactNode } from "react";
import Link from "next/link";

import { coach, site } from "@/lib/brand";
import { seminarContent, seminarHref } from "@/lib/seminar";
import { Navigation } from "./Navigation";

type SiteLayoutProps = { children: ReactNode };

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-[#041225] text-slate-50">
      <Navigation />
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#030d1b] px-5 py-8 text-sm text-slate-300 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold tracking-[0.28em] text-white">{site.name}</p>
          <Link href={seminarHref} className="inline-flex min-h-11 items-center gap-2 self-start text-sm text-[#e8c980] underline decoration-[#d6ae64]/40 underline-offset-4 hover:decoration-[#e8c980] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:self-auto">
            {seminarContent.name}<span aria-hidden="true">→</span>
          </Link>
          <p className="max-w-xl text-slate-400">{coach.name} / {coach.role}。{site.concept}</p>
        </div>
      </footer>
    </div>
  );
}
