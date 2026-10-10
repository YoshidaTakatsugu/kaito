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
  name: "無料ステップメール",
  ctaLabel: "無料ステップメールを受け取る",
  heading: ["「ネガティブ思考」から抜け出し、", "試合で実力を発揮する", "6つの方法"],
  introduction:
    "本気で競技に向き合うあなたへ。試合で実力を発揮するための6つの方法を、スポーツメンタルコーチ押田海斗がメールでお届けします。",
  audience: [
    "練習で高めてきた力を、本番でも発揮したい",
    "プレッシャーや自分の思い込みと向き合いたい",
    "コーチングを受ける前に、考え方に触れてみたい",
  ],
  registrationUrl: "https://www.reservestock.jp/subscribe/369393",
};

export const seminarHref = `${seminarContent.registrationUrl}#customers_fields`;
