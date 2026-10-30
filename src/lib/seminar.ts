type SeminarContent = {
  id: string;
  name: string;
  ctaLabel: string;
  heading: readonly string[];
  introduction: string;
  audience: readonly string[];
  registrationUrl: string;
};

export const seminarContent: SeminarContent = {
  id: "seminar",
  name: "無料メールセミナー",
  ctaLabel: "無料メールセミナーを受け取る",
  heading: ["「ネガティブ思考」から抜け出し、", "試合で実力を発揮する", "6つの方法"],
  introduction:
    "スポーツメンタルコーチ押田海斗が現役復帰し、自ら実践！試合で実力を発揮するために、特に効果を感じた6つの方法をメールでご紹介します。",
  audience: [
    "練習で高めてきた力を、本番でも発揮したい",
    "プレッシャーや自分の思い込みと向き合いたい",
    "コーチングを受ける前に、考え方に触れてみたい",
  ],
  registrationUrl: "https://www.reservestock.jp/subscribe/369393",
};

export const seminarHref = `${seminarContent.registrationUrl}#customers_fields`;
