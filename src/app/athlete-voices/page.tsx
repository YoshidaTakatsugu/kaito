import type { Metadata } from "next";

import { VoiceSection } from "@/components/home/VoiceSection";
import { featuredAthleteVoice, site } from "@/lib/brand";

const description = "スポーツメンタルコーチングを受けたアスリートと保護者の声。高めてきた能力が本番の結果につながり始めた変化をご紹介します。";

export const metadata: Metadata = {
  title: "アスリートの声",
  description,
  alternates: { canonical: "/athlete-voices/" },
  openGraph: {
    title: `アスリートの声 | ${site.name}`,
    description,
    url: `${site.url}/athlete-voices/`,
  },
};

export default function AthleteVoicesPage() {
  const pageUrl = `${site.url}/athlete-voices/`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "アスリートの声",
        description,
        inLanguage: "ja",
        about: { "@id": `${site.url}/#service` },
        hasPart: {
          "@type": "WebPageElement",
          "@id": `${pageUrl}#voice`,
          name: featuredAthleteVoice.title,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: site.url },
          { "@type": "ListItem", position: 2, name: "アスリートの声", item: pageUrl },
        ],
      },
    ],
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <VoiceSection />
    </>
  );
}
