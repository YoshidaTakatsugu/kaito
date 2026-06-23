import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

const worries = [
  "練習ではできるのに、試合本番になると体が動かない",
  "大事な場面ほど、勝ちたい気持ちが力みや迷いに変わる",
  "周囲の期待やライバルとの比較で、競技を楽しめなくなっている",
  "「メンタルが弱い」という言葉に、密かに傷ついている",
] as const;

export function EmpathySection() {
  return (
    <section
      id="problem"
      className="bg-[#041225] px-5 py-24 text-white sm:px-8"
    >
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
            EMPATHY
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            こんな想いを抱えていませんか？
          </h2>
          <p className="mt-8 text-lg leading-9 text-slate-300">
            本番で力を出せないのは、能力が足りないからとは限りません。高めてきた能力を守ろうとするほど、心が無意識にブレーキをかけることがあります。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div className="grid gap-3">
            {worries.map((worry, index) => (
              <article
                key={worry}
                className="grid gap-4 border border-cyan-100/15 bg-white/[0.045] p-5 sm:grid-cols-[3.5rem_1fr] sm:items-center"
              >
                <p className="font-serif text-4xl font-semibold text-cyan-100/50">
                  0{index + 1}
                </p>
                <p className="text-base font-semibold leading-8 text-slate-100">
                  {worry}
                </p>
              </article>
            ))}
          </div>

          <figure className="border border-cyan-100/15 bg-white/[0.04] p-3">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#001f3f]">
              <Image
                src="/images/S__3153966_0.jpg"
                alt="競技で本番の力を出せず悩む選手に寄り添うNARERUスポーツメンタルコーチ押田海斗の写真"
                fill
                sizes="(max-width: 1024px) 100vw, 28vw"
                className="object-cover object-[58%_center]"
              />
            </div>
          </figure>
        </div>

        <p className="border-l border-cyan-100/40 pl-5 font-serif text-2xl leading-[1.75] text-cyan-50 lg:col-span-2">
          次のステージへ進む鍵は、心技体の「心」にあるのかもしれません。
        </p>
      </SectionReveal>
    </section>
  );
}
