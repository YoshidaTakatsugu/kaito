import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "送信完了", robots: { index: false, follow: true } };

export default function ThanksPage() {
  return <section className="px-5 py-20 text-white sm:px-8">
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">THANK YOU</p>
      <h1 className="mt-5 font-serif text-3xl leading-relaxed sm:text-4xl">送信手続きが完了しました</h1>
      <p className="mt-6 text-sm leading-7 text-slate-300">内容を確認し、担当者からメールでご連絡します。体験コーチングの予約は、日程調整後に確定します。</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center border border-white/30 px-6 text-sm">トップページへ戻る →</Link>
    </div>
  </section>;
}
