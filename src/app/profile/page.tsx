import type { Metadata } from "next";
import { coach, coachAchievements, site } from "@/lib/brand";

export const metadata: Metadata = {
  title: "押田海斗プロフィール",
  description:
    "NARERU代表・押田海斗の詳細プロフィール。日本一を逃し続けた経験、実績、ゴールドライセンス、スポーツメンタルコーチングの原点を掲載します。",
  openGraph: {
    title: `押田海斗プロフィール | ${site.name}`,
    description:
      "日本一を逃し続けた経験こそが、NARERUのコーチングの原点です。",
    url: `${site.url}/profile/`,
  },
};

export default function ProfilePage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/profile/#profile`,
    url: `${site.url}/profile/`,
    name: `${coach.name}プロフィール`,
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/profile/#person`,
      name: coach.name,
      jobTitle: coach.role,
      description:
        "日本一を逃し続けた経験を原点に、勝ちきれないトップアスリートの心技体を整えるスポーツメンタルコーチ。",
      award: coachAchievements.map(
        (achievement) =>
          `${achievement.event} ${achievement.result}（${achievement.stage}）`,
      ),
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "ゴールドライセンス",
        credentialCategory: "スポーツメンタルコーチング",
      },
    },
  };
  const jsonLd = JSON.stringify(profileJsonLd).replace(/</g, "\\u003c");

  return (
    <article className="bg-[#041225] px-5 py-24 text-white sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="mx-auto grid w-full max-w-7xl gap-16">
        <header className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              PROFILE
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
              {coach.name}
            </h1>
            <p className="mt-5 text-lg font-semibold text-slate-300">
              {coach.role} / ゴールドライセンス
            </p>
          </div>
          <p className="font-serif text-2xl leading-[1.85] text-cyan-50 sm:text-3xl">
            日本一を逃し続けた経験こそが、私のコーチングの原点である。
          </p>
        </header>

        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold">最後の壁を知っていること。</h2>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              技術も体も揃っていたのに、勝ちきれなかった。あと一歩で日本一に届かない経験を重ねたからこそ、結果を分ける最後の要素が心の器であることを実感しました。
            </p>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              NARERUでは、その痛みを単なる挫折で終わらせません。勝ちたいほど硬くなる選手、実力があるのに本番で出し切れない選手に、同じ競技者目線で伴走します。
            </p>
          </div>

          <div className="border-y border-cyan-100/15">
            {coachAchievements.map((achievement) => (
              <div
                key={`${achievement.event}-${achievement.result}`}
                className="grid gap-3 border-b border-cyan-100/10 py-5 last:border-b-0 sm:grid-cols-[0.36fr_1fr_0.34fr]"
              >
                <p className="text-sm font-semibold tracking-[0.16em] text-cyan-100">
                  {achievement.stage}
                </p>
                <p className="text-lg font-semibold">{achievement.event}</p>
                <p className="text-left text-lg font-semibold text-slate-300 sm:text-right">
                  {achievement.result}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            {
              label: "LICENSE",
              title: "ゴールドライセンス",
              text: "スポーツメンタルコーチングの専門性を示す資格情報として掲載しています。",
            },
            {
              label: "EXPERIENCE",
              title: "日本一を逃した経験",
              text: "勝ちきれない苦しさを、選手の内側から理解しています。",
            },
            {
              label: "PARTNER",
              title: "20代のプロコーチ",
              text: "指導者との壁を感じる選手にも、近い距離のパートナーとして伴走します。",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="border-t border-cyan-100/15 bg-white/[0.04] px-5 py-6"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-100">
                {item.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
            </article>
          ))}
        </section>
      </div>
    </article>
  );
}
