import { coach, site } from "./brand";
import { documentColumns } from "./column-documents";

export type ColumnFaq = { question: string; answer: string };
export type ColumnBlock = {
  type: "paragraph" | "heading" | "list-item";
  text: string;
};

export type ColumnArticle = {
  slug: string;
  title: string;
  answerFirst: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  body: string[];
  blocks?: ColumnBlock[];
  faqs: ColumnFaq[];
};

export async function getColumns() {
  return documentColumns;
}

export async function getColumnBySlug(slug: string) {
  return documentColumns.find((article) => article.slug === slug) ?? null;
}

export function buildColumnJsonLd(article: ColumnArticle) {
  const articleUrl = `${site.url}/columns/${article.slug}/`;
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
        image: `${site.url}/images/columns-stadium.webp`,
        author: { "@type": "Person", "@id": `${site.url}/profile/#person`, name: coach.name },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
        articleSection: article.category,
      },
      ...(article.faqs.length ? [{
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }] : []),
    ],
  };
}
