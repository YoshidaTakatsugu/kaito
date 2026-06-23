import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

const futureBenefits = [
  "試合前の不安を、集中へ切り替えられる",
  "勝ちたい場面で、練習してきた動きを出し切れる",
  "結果だけに縛られず、競技そのものを楽しめる",
] as const;

export function FutureSection() {
  return (
    <section className="bg-[#061a33] px-5 py-24 text-white sm:px-8">
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            FUTURE
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            試合を楽しみ、能力を出し切れる姿へ。
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-300">
            NARERUが目指すのは、根性で不安を押し込める状態ではありません。あなたが積み上げてきた技術と身体を、試合本番で自然に結果へつなげられる状態です。
          </p>

          <div className="mt-8 grid gap-3">
            {futureBenefits.map((benefit) => (
              <p
                key={benefit}
                className="border-l border-cyan-100/35 bg-white/[0.045] px-5 py-4 font-semibold leading-8 text-slate-100"
              >
                {benefit}
              </p>
            ))}
          </div>
        </div>

        <figure className="border border-cyan-100/15 bg-white/[0.045] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#001f3f] sm:aspect-[5/4]">
            <Image
              src="/images/S__3153968_0.jpg"
              alt="試合で能力を出し切り、結果につながる未来を象徴する押田海斗の前向きなポーズ"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover object-[50%_center]"
            />
          </div>
        </figure>
      </SectionReveal>
    </section>
  );
}
