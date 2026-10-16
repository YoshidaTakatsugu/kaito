import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "NARERUへの取材・講演・その他のお問い合わせはこちらからお送りください。",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="bg-[#041225] px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">CONTACT</p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl">お問い合わせ</h1>
        <p className="mt-6 text-sm leading-7 text-slate-300">取材・講演・その他のご相談をお送りください。内容を確認し、メールでご連絡します。</p>
        <Link href="/trial/apply/" className="mt-4 inline-flex min-h-11 items-center text-sm text-[#e8c980] underline underline-offset-4">体験コーチングのお申し込みはこちら →</Link>
        <InquiryForm />
      </div>
    </section>
  );
}
