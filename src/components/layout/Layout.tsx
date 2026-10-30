import type { ReactNode } from "react";
import Link from "next/link";

import { Navigation } from "./Navigation";

type SiteLayoutProps = { children: ReactNode };

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-[#041225] text-slate-50">
      <Navigation />
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#030d1b] px-5 py-8 text-sm text-slate-300 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/privacy-policy/" className="inline-flex min-h-12 items-center justify-center gap-3 self-start border border-[#d6ae64]/60 px-5 py-3 text-sm font-semibold text-[#e8c980] transition-colors hover:bg-[#d6ae64] hover:text-[#031226] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            プライバシーポリシー<span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
