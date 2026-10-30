import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredAthleteVoice as voice } from "@/lib/brand";

export const metadata: Metadata = {
  title: "アスリートの声",
  description: "スポーツメンタルコーチングを受けた選手と保護者の変化を、インタビューでご紹介します。",
  alternates: { canonical: "/athlete-voices/" },
};

export default function AthleteVoicesPage() {
  return (
    <div className="bg-[#041225] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <header>
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100">ATHLETE VOICES</p>
          <h1 className="mt-3 font-serif text-[28px] sm:text-4xl">アスリートの声</h1>
        </header>
        <div className="mt-7 grid gap-7 sm:grid-cols-2">
          <article>
            <Link href="/athlete-voices/baseball-interview/" className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6ae64]">
              <div className="relative aspect-video overflow-hidden rounded border border-white/15">
                <Image src="/images/nareru-voices-thumbnail.webp" alt="ネイビー背景のNARERUロゴ" fill sizes="(max-width: 639px) 100vw, 480px" className="bg-[#061a33] object-contain" />
              </div>
              <h2 className="mt-3 text-base font-semibold leading-[1.7] group-hover:text-[#e8c980] sm:text-lg">{voice.title}</h2>
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}
