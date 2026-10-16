import Image from "next/image";
import Link from "next/link";
import { featuredAthleteVoice as voice } from "@/lib/brand";

export function VoiceSection() {
  return (
    <article className="voices-page bg-[#041225] text-white">
      <header className="voices-hero relative isolate overflow-hidden">
        <div className="voices-hero-photo absolute inset-0 -z-20">
          <Image
            src="/images/voices-baseball.webp"
            alt="野球場でバットを持ち、グラウンドを見つめる選手（イメージ写真）"
            fill
            sizes="(max-width: 639px) 100vw, 65vw"
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="voices-hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8ed9e7]">
            ATHLETE VOICES
          </p>
          <h1 className="mt-4 font-serif">アスリートの声</h1>
        </div>
        <p className="absolute bottom-3 right-5 text-[10px] text-slate-200 sm:right-8">
          イメージ写真
        </p>
      </header>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="voices-introduction font-serif text-cyan-50">
          高めてきた能力が、本番の結果へつながり始めた変化。
        </p>
        <nav className="voices-nav" aria-label="アスリートの声の目次">
          <a href="#voice">選手の変化</a>
          <a href="#interview">インタビュー</a>
          <a href="#parent-voice">保護者の声</a>
        </nav>

        <section
          id="voice"
          className="voices-section"
          aria-labelledby="featured-athlete-voice-title"
        >
          <header>
            <p className="voices-eyebrow">{voice.label}</p>
            <h2
              id="featured-athlete-voice-title"
              className="voices-feature-title"
            >
              {voice.title}
            </h2>
            <p className="voices-profile">{voice.profile}</p>
          </header>

          <dl className="voices-change">
            <div>
              <dt>コーチング前</dt>
              <dd>
                自分の力を<span>30％</span>しか発揮できなかった
              </dd>
            </div>
            <div>
              <dt>コーチング後</dt>
              <dd>
                <span>全国優勝</span>年間全試合スタメン出場
              </dd>
            </div>
          </dl>
        </section>

        <section
          id="interview"
          className="voices-section"
          aria-labelledby="voices-interview-title"
        >
          <header>
            <p className="voices-eyebrow">INTERVIEW</p>
            <h2 id="voices-interview-title" className="voices-section-title">
              選手に聞く、8つのこと
            </h2>
          </header>
          <div className="voices-questions">
            {voice.questions.map((item, index) => (
              <details key={item.question} open={index === 0} className="group">
                <summary>
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="voices-question-toggle transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="voices-prose voices-answer">
                  {item.answers.map((answer) => (
                    <p key={answer}>{answer}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          id="parent-voice"
          className="voices-section"
          aria-labelledby="voices-parent-title"
        >
          <header>
            <p className="voices-eyebrow">{voice.parentVoice.label}</p>
            <h2 id="voices-parent-title" className="voices-section-title">
              保護者から見た変化
            </h2>
          </header>
          <blockquote className="voices-parent">
            <p className="voices-parent-lead">{voice.parentVoice.title}</p>
            <div className="voices-prose">
              {voice.parentVoice.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <footer className="mt-4 text-xs font-semibold text-cyan-50">
              {voice.parentVoice.attribution}
            </footer>
          </blockquote>
        </section>

        <footer className="voices-page-footer">
          <p className="text-xs leading-[1.8] text-slate-300">
            現在、多くのアスリートが変化を体感中。順次公開予定です
          </p>
          <Link
            href="/trial/"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center bg-[#d6ae64] px-5 py-3 text-sm font-semibold text-[#031226] hover:bg-[#e8c980] sm:w-auto"
          >
            体験コーチングを見る
          </Link>
        </footer>
      </div>
    </article>
  );
}
