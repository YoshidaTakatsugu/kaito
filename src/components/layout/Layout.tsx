import type { ReactNode } from "react";

import { coach, site } from "@/lib/brand";
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
          <p className="max-w-xl text-slate-400">{coach.name} / {coach.role}。{site.concept}</p>
        </div>
      </footer>
    </div>
  );
}
