import {
  MediaActivityCards,
  type MediaActivityItem,
} from "./MediaActivityCards";

const mediaActivityItems = [
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
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-100">
              MEDIA & ACTIVITY
            </p>
            <h2
              aria-label="活動実績・トピックス"
              className="mt-6 font-serif text-[2rem] leading-[1.4] sm:text-5xl sm:leading-[1.3]"
            >
              <span aria-hidden="true" className="block sm:inline">活動実績</span>
              <span aria-hidden="true" className="block sm:ml-[0.35em] sm:inline">トピックス</span>
            </h2>
          </div>
          <p className="font-serif text-xl leading-[1.7] text-cyan-50 sm:text-2xl">
            <span className="block sm:inline">第三者メディアや協会で</span>
            <span className="block sm:inline">語られた押田海斗の活動を、</span>
            <span className="block sm:inline">信頼の証として掲載します。</span>
          </p>
        </div>

        <div className="mt-14">
          <MediaActivityCards items={mediaActivityItems} />
        </div>
      </div>
    </section>
  );
}
