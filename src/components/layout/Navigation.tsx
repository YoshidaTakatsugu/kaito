import Link from "next/link";
import Image from "next/image";
import { navigationItems, site } from "@/lib/brand";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,18,38,0.86)] backdrop-blur-xl">
      <nav
        aria-label="グローバルナビゲーション"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/#hero" className="group inline-flex items-center gap-2.5">
          <span className="grid h-9 w-24 shrink-0 place-items-center overflow-hidden rounded-sm border border-white/15 bg-white/95 px-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/logo2.png"
              alt="NARERU 結果に相応しい自分になれるスポーツメンタルコーチングのロゴ"
              width={120}
              height={63}
              className="max-h-7 w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.34em] text-white">
              {site.name}
            </span>
            <span className="mt-1 hidden text-[0.62rem] tracking-[0.22em] text-cyan-100/60 sm:block">
              MENTAL COACHING
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-xs font-medium tracking-[0.18em] text-slate-200/70 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#coaching"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-100/30 px-4 text-xs font-semibold tracking-[0.18em] text-white transition-colors duration-200 hover:border-cyan-100/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
        >
          体験予約
        </Link>
      </nav>
    </header>
  );
}
