import { existsSync } from "node:fs";
import { join } from "node:path";

export type SiteImage = {
  src: string;
  alt: string;
  caption?: string;
};

const publicDirectory = join(process.cwd(), "public");

function hasPublicImage(src: string) {
  return existsSync(join(publicDirectory, src.replace(/^\//, "")));
}

export function getHeroImage(): SiteImage {
  const preferred = {
    src: "/images/oshida-hero.jpg",
    alt: "本番で実力を発揮させるスポーツメンタルコーチ押田海斗のポートレート",
  };

  if (hasPublicImage(preferred.src)) {
    return preferred;
  }

  return {
    src: "/images/S__3153971_0.jpg",
    alt: "本番で実力を発揮させるスポーツメンタルコーチ押田海斗のポートレート",
  };
}

export function getStoryProofImage(): SiteImage {
  const preferred = {
    src: "/images/award-certificate.jpg",
    alt: "押田海斗が国体個人4位や関東選手権2位など、あと一歩で日本一を逃し続けた競技実績を示す表彰状の写真。",
    caption:
      "実績資料｜国体個人4位、関東選手権2位など、1番を逃し続けた経験を示す一次情報。",
  };

  if (hasPublicImage(preferred.src)) {
    return preferred;
  }

  return {
    src: "/images/S__3153971_0.jpg",
    alt: "押田海斗が国体個人4位や関東選手権2位などの経験をもとに、勝ちきれない選手へ伴走するNARERUのプロフィール写真。",
    caption:
      "押田海斗｜国体個人4位、関東選手権2位など、あと一歩で頂点を逃した経験をコーチングの原点にしている。",
  };
}

export function getPerformanceCoreImage(): SiteImage | null {
  const image = {
    src: "/images/performance-core.png",
    alt: "NARERUが提唱する心技体の統合モデル図。心・技・体が重なり、中央の緑色の核がパフォーマンス最大化を表している。",
  };

  if (hasPublicImage(image.src)) {
    return image;
  }

  return null;
}
