import Link from "next/link";
import Image from "next/image";
import type { ColumnArticle } from "@/lib/columns";

type ColumnCardProps = {
  article: ColumnArticle;
};

export function ColumnCard({ article }: ColumnCardProps) {
  return (
    <article>
      <Link
        href={`/columns/${article.slug}/`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100"
      >
        <div className="relative aspect-video overflow-hidden rounded border border-white/15">
          <Image src={article.slug === "athlete-interview-parent-voice" ? "/images/voices-baseball.webp" : "/images/columns-stadium.webp"} alt={article.slug === "athlete-interview-parent-voice" ? "野球場のイメージ写真" : "照明に照らされたスタジアム"} fill sizes="(max-width: 639px) 100vw, 480px" className="object-cover object-[center_70%]" />
        </div>
        <div>
          <h2 className="mt-3 text-base font-semibold leading-[1.7] text-white group-hover:text-[#e8c980] sm:text-lg">
            {article.title}
          </h2>
        </div>
      </Link>
    </article>
  );
}
