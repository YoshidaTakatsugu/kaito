"use client";

import Link from "next/link";
import { useState } from "react";

type MobileNavigationProps = {
  items: readonly {
    label: string;
    href: string;
  }[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-global-navigation"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setIsOpen((current) => !current)}
        className="grid size-11 place-items-center border border-cyan-100/25 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
      >
        <span aria-hidden="true" className="grid w-5 gap-[5px]">
          <span
            className={`h-px w-5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform duration-200 ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        id="mobile-global-navigation"
        hidden={!isOpen}
        className="fixed inset-x-0 top-16 border-y border-cyan-100/15 bg-[#031226] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl">
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-14 items-center justify-between border-b border-cyan-100/10 text-sm font-semibold tracking-[0.06em] text-slate-100 transition-colors last:border-b-0 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
            >
              <span>{item.label}</span>
              <span aria-hidden="true" className="text-[#67d5ae]">
                0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
