import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata: Metadata = {
  title: "体験コーチングのお申し込み",
  description: "60分11,000円（税込）の体験コーチング。ご希望の形式と日時をお知らせください。",
  alternates: { canonical: "/trial/apply/" },
};

export default function TrialApplyPage() {
  return <section className="bg-[#041225] px-5 py-8 text-white sm:px-8 sm:py-12">
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.24em] text-[#67d5ae]">TRIAL COACHING</p>
      <h1 className="mt-4 font-serif text-[26px] leading-[1.4] sm:text-4xl">体験コーチングの<br className="sm:hidden" />お申し込み</h1>
      <p className="mt-4 text-lg font-semibold text-[#e8c980]">60分｜11,000円（税込）</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">ご希望の形式と日程をお知らせください。日程を確認し、メールでご連絡します。</p>
      <InquiryForm trial />
    </div>
  </section>;
}
