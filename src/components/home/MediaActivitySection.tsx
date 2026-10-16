import {
  MediaActivityCards,
  type MediaActivityItem,
} from "./MediaActivityCards";

const mediaActivityItems = [
  {
    id: "youtube-3DBuIKDfX6U",
    type: "YouTube",
    source: "日本スポーツメンタルコーチ協会",
    title: "【スポーツメンタル】格上と戦わなければならない時のメンタルの整え方",
    url: "https://www.youtube.com/watch?v=3DBuIKDfX6U",
    thumbnailSrc: "https://i.ytimg.com/vi/3DBuIKDfX6U/hqdefault.jpg",
    publishedLabel: "YouTube公開中",
  },
  {
    id: "youtube-5ozDr0DKpDw",
    type: "YouTube",
    source: "日本スポーツメンタルコーチ協会",
    title: "「メンタルが弱い」と言われた人は、本当にメンタルが弱いのか【スポーツメンタル】",
    url: "https://www.youtube.com/watch?v=5ozDr0DKpDw",
    thumbnailSrc: "https://i.ytimg.com/vi/5ozDr0DKpDw/hqdefault.jpg",
    publishedLabel: "YouTube公開中",
  },
  {
    id: "youtube-VppK2vqadUs",
    type: "YouTube",
    source: "日本スポーツメンタルコーチ協会",
    title: "練習ではできるのに、試合でチカラを発揮できなくなる時のメンタル対処法【スポーツメンタル】",
    url: "https://www.youtube.com/watch?v=VppK2vqadUs",
    thumbnailSrc: "https://i.ytimg.com/vi/VppK2vqadUs/hqdefault.jpg",
    publishedLabel: "YouTube公開中",
  },
  {
    id: "youtube-Wair1TiBdJ4",
    type: "YouTube",
    source: "日本スポーツメンタルコーチ協会",
    title: "【親との関わり方】「親がうるさいな」と感じた時の、選手がとるべき対処法【スポーツメンタル】",
    url: "https://www.youtube.com/watch?v=Wair1TiBdJ4",
    thumbnailSrc: "https://i.ytimg.com/vi/Wair1TiBdJ4/hqdefault.jpg",
    publishedLabel: "YouTube公開中",
  },
  {
    id: "jsmc-special-interview-youtube",
    type: "YouTube",
    source: "日本スポーツメンタルコーチ協会",
    title: "日本スポーツメンタルコーチ協会による特別インタビュー",
    url: "https://www.youtube.com/watch?v=0eEMQgiypEs",
    description:
      "協会ゴールドライセンスコーチとして、自身の挫折経験とコーチングへの想いを語っています。",
    thumbnailSrc: "https://i.ytimg.com/vi/0eEMQgiypEs/hqdefault.jpg",
    publishedLabel: "YouTube公開中",
  },
  {
    id: "re-departure-interview-article",
    type: "Web Article",
    source: "Re Departure",
    title:
      "「逆境を乗り越えた経験が、人の気持ちに寄り添う『コーチング』に繋がっている。」",
    url: "https://re-departure.com/oshidakaito.aspx",
    description:
      "指導者には言えないアスリートの本音に寄り添う、押田海斗のルーツに迫るインタビュー記事。",
    thumbnailSrc: "/images/S__3153967_0.jpg",
    publishedLabel: "Web掲載中",
  },
] satisfies readonly MediaActivityItem[];

export function MediaActivitySection() {
  return (
    <section id="media" className="bg-[#061a33] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 sm:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              MEDIA & ACTIVITY
            </p>
            <h2
              aria-label="活動実績・トピックス"
              className="mt-5 whitespace-nowrap font-serif text-2xl leading-[1.4] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.3]"
            >
              活動実績・トピックス
            </h2>
          </div>
          <p className="font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">
            <span className="block sm:inline">第三者メディアや協会で</span>
            <span className="block sm:inline">語られた押田海斗の活動を、</span>
            <span className="block sm:inline">信頼の証として掲載します。</span>
          </p>
        </div>

        <div className="mt-8 sm:mt-14">
          <MediaActivityCards items={mediaActivityItems} />
        </div>
      </div>
    </section>
  );
}
