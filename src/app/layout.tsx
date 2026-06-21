import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/Layout";
import { site, structuredData } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | スポーツメンタルコーチング`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | スポーツメンタルコーチング`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
