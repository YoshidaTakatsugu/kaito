import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/pages/PagePlaceholder";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "NARERUへのお問い合わせページです。",
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="CONTACT"
      title="お問い合わせ"
      description="体験コーチング、継続サポート、取材・講演に関するお問い合わせ窓口を準備しています。体験コーチングをご検討の方は、現在の案内をご確認ください。"
      referenceHref="/#trial"
      referenceLabel="体験コーチング案内を見る"
    />
  );
}
