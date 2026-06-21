import { coach, site } from "./brand";

export type ColumnFaq = {
  question: string;
  answer: string;
};

export type ColumnArticle = {
  slug: string;
  title: string;
  answerFirst: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  body: string[];
  faqs: ColumnFaq[];
};

type MicroCmsColumn = {
  id?: string;
  slug?: string;
  title?: string;
  question?: string;
  answerFirst?: string;
  lead?: string;
  answer?: string;
  category?: string;
  publishedAt?: string;
  updatedAt?: string;
  revisedAt?: string;
  body?: string | string[];
  content?: string | string[];
  faqs?: ColumnFaq[];
};

type MicroCmsListResponse = {
  contents?: MicroCmsColumn[];
};

const fallbackColumns: ColumnArticle[] = [
  {
    slug: "why-not-weak-mental",
    title: "本番で力を出せないのは、メンタルが弱いからですか？",
    answerFirst:
      "本番で力を出せないのは、メンタルが弱いからではありません。過去の経験から作られた思い込みが、試合前や勝負所で無意識のブレーキになっている可能性があります。NARERUでは、そのブレーキを責めるのではなく、心技体の因果関係として整理し、本来の力が自然に出る状態を作ります。",
    category: "本番発揮",
    publishedAt: "2026-06-21",
    body: [
      "練習でできることが試合で出ない時、多くの選手は自分を責めます。しかし問題は弱さではなく、心が身体と判断に影響する仕組みをまだ扱えていないことです。",
      "過去の失敗、周囲の言葉、ライバルとの比較は、知らないうちに「また失敗するかもしれない」という前提を作ります。その前提が呼吸を浅くし、視野を狭め、いつもの動きを小さくします。",
      "NARERUは、思い込み、行動、結果のつながりを言語化し、心技体の正のサイクルへ戻すためのコーチングを行います。",
    ],
    faqs: [
      {
        question: "本番に弱い選手でも変われますか？",
        answer:
          "変われます。弱さとして扱うのではなく、思い込みと行動のパターンを整理することで、本番で使える心の状態を作れます。",
      },
      {
        question: "技術練習とメンタルコーチングは両立できますか？",
        answer:
          "両立できます。NARERUでは技術や身体を否定せず、それらを本番で発揮するための心の土台を整えます。",
      },
    ],
  },
  {
    slug: "pressure-as-proof",
    title: "プレッシャーを感じるのは悪いことですか？",
    answerFirst:
      "プレッシャーを感じること自体は悪いことではありません。むしろ、あなたが結果を本気で望み、積み重ねてきた証拠です。大切なのは、プレッシャーを消すことではなく、身体が固まる方向ではなく集中へ変換できる心の器を作ることです。",
    category: "プレッシャー",
    publishedAt: "2026-06-21",
    body: [
      "プレッシャーは、勝ちたい気持ちや失いたくないものがある時に生まれます。だからこそ、それを単純に敵として扱うと、競技そのものが苦しくなってしまいます。",
      "必要なのは、プレッシャーを感じた瞬間に何が起きているかを理解することです。思考、呼吸、視線、身体の緊張を分けて扱えるようになると、試合中の選択肢が戻ります。",
      "心技体が重なると、プレッシャーは萎縮ではなく集中の入り口になります。",
    ],
    faqs: [
      {
        question: "プレッシャーはなくすべきですか？",
        answer:
          "なくす必要はありません。プレッシャーを集中へ変える扱い方を身につけることが重要です。",
      },
      {
        question: "試合直前の不安にも対応できますか？",
        answer:
          "対応できます。不安を否定せず、身体反応と行動を整える準備を一緒に作ります。",
      },
    ],
  },
  {
    slug: "what-is-shingitai",
    title: "心技体を整えるとは、具体的に何をすることですか？",
    answerFirst:
      "心技体を整えるとは、技術、身体、メンタルを別々に鍛えることではなく、本番で同時に機能する状態へ統合することです。NARERUでは、思い込みが行動を狭める負のサイクルをほどき、ワクワク、集中、実力発揮、結果の正のサイクルへ戻します。",
    category: "心技体",
    publishedAt: "2026-06-21",
    body: [
      "技術が高く、身体も鍛えているのに結果が安定しない時、最後に残るのは心のピースです。",
      "心の状態は、判断の速さ、身体の出力、試合中の修正力に影響します。だから心を根性論で片付けるのではなく、競技パフォーマンスの一部として扱う必要があります。",
      "NARERUのコーチングは、心、技、体が重なる中心に強い核を作るための介入です。",
    ],
    faqs: [
      {
        question: "心技体のうち、心だけを扱うのですか？",
        answer:
          "心だけを切り離しません。技術と身体が本番で発揮されるように、心とのつながりを整えます。",
      },
      {
        question: "トップレベルの選手にも必要ですか？",
        answer:
          "必要です。技術差が小さいレベルほど、最後の一歩を決める心の状態が結果に影響します。",
      },
    ],
  },
];

function getMicroCmsConfig() {
  return {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    endpoint: process.env.MICROCMS_COLUMNS_ENDPOINT ?? "columns",
  };
}

function toParagraphs(value: MicroCmsColumn["body"]): string[] {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (!value) {
    return [];
  }

  return value
    .replace(/<[^>]*>/g, "\n")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeColumn(content: MicroCmsColumn): ColumnArticle {
  const title = content.question ?? content.title ?? "本番で力を出すには？";
  const answerFirst =
    content.answerFirst ?? content.lead ?? content.answer ?? fallbackColumns[0].answerFirst;
  const body = toParagraphs(content.body ?? content.content);

  return {
    slug: content.slug ?? content.id ?? title,
    title,
    answerFirst,
    category: content.category ?? "メンタル",
    publishedAt: content.publishedAt ?? "2026-06-21",
    updatedAt: content.updatedAt ?? content.revisedAt,
    body: body.length > 0 ? body : [answerFirst],
    faqs: content.faqs?.length ? content.faqs : [],
  };
}

async function fetchColumnsFromMicroCms(): Promise<ColumnArticle[] | null> {
  const { serviceDomain, apiKey, endpoint } = getMicroCmsConfig();

  if (!serviceDomain || !apiKey) {
    return null;
  }

  const url = new URL(`https://${serviceDomain}.microcms.io/api/v1/${endpoint}`);
  url.searchParams.set("limit", "100");
  url.searchParams.set("orders", "-publishedAt");

  try {
    const response = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": apiKey,
      },
      cache: "force-cache",
    });

    if (!response.ok) {
      console.warn(`microCMS columns fetch failed: ${response.status}`);
      return null;
    }

    const data = (await response.json()) as MicroCmsListResponse;
    return data.contents?.map(normalizeColumn) ?? null;
  } catch (error) {
    console.warn("microCMS columns fetch failed:", error);
    return null;
  }
}

export async function getColumns() {
  const columns = await fetchColumnsFromMicroCms();
  return columns?.length ? columns : fallbackColumns;
}

export async function getColumnBySlug(slug: string) {
  const columns = await getColumns();
  return columns.find((column) => column.slug === slug) ?? null;
}

export function buildColumnJsonLd(article: ColumnArticle) {
  const articleUrl = `${site.url}/columns/${article.slug}/`;
  const faqs = article.faqs.length
    ? article.faqs
    : [
        {
          question: article.title,
          answer: article.answerFirst,
        },
      ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.answerFirst,
        inLanguage: "ja",
        datePublished: article.publishedAt,
        dateModified: article.updatedAt ?? article.publishedAt,
        mainEntityOfPage: articleUrl,
        author: {
          "@type": "Person",
          "@id": `${site.url}/profile/#person`,
          name: coach.name,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        articleSection: article.category,
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
