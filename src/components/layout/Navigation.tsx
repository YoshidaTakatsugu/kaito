import Image from "next/image";
import Link from "next/link";

import {
  mobileNavigationItems,
  navigationItems,
  trialNavigationItem,
} from "@/lib/brand";
import { MobileNavigation } from "./MobileNavigation";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(3,13,29,0.9)] backdrop-blur-xl">
      <nav
        aria-label="グローバルナビゲーション"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/#hero"
          aria-label="NARERU ホームへ"
          className="relative block h-12 w-28 shrink-0 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
        >
          <Image
            src="/images/logo2.png"
            alt="NARERUのロゴ"
            fill
            sizes="112px"
            loading="eager"
            className="scale-[2] object-contain brightness-0 invert"
          />
        </Link>

        <div className="hidden items-center gap-5 text-[0.7rem] font-semibold tracking-[0.05em] text-slate-200/80 xl:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={trialNavigationItem.href}
            className="inline-flex min-h-11 items-center justify-center border border-[#d6ae64]/70 bg-[#d6ae64] px-3 text-[0.68rem] font-semibold tracking-[0.06em] text-[#031226] transition-colors duration-200 hover:bg-[#e8c980] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-4 sm:text-xs sm:tracking-[0.08em]"
          >
            <span className="sm:hidden">体験予約</span>
            <span className="hidden sm:inline">{trialNavigationItem.label}</span>
          </Link>
          <MobileNavigation items={mobileNavigationItems} />
        </div>
      </nav>
    </header>
  );
}
