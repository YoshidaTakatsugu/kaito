import type { ReactNode } from "react";
import Link from "next/link";
import { PressFeedback } from "@/components/ui/PressFeedback";

import { Navigation } from "./Navigation";

type SiteLayoutProps = { children: ReactNode };

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-[#041225] text-slate-50">
      <PressFeedback />
      <Navigation />
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#030d1b] px-5 py-8 text-sm text-slate-300 sm:px-8">
        <nav aria-label="フッターナビゲーション" className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-5 gap-y-1">
          {[
            { href: "/", label: "ホーム" },
            { href: "/privacy-policy/", label: "プライバシーポリシー" },
            { href: "/contact/", label: "お問い合わせ" },
            { href: "/faq/", label: "よくある質問" },
          ].map(item => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-12 items-center justify-center px-2 py-3 text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
