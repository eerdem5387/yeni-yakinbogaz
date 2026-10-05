import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "./globals.css";

const body = Figtree({
  variable: "--font-body-family",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Yakın Boğaz — Teknoloji Ekosistemi",
    template: "%s — Yakın Boğaz",
  },
  description:
    "Yakın Boğaz; kapalı devre yapay zekâ ve dijital ürünleri tek bir teknoloji ekosisteminde geliştirir.",
  openGraph: {
    title: "Yakın Boğaz — Teknoloji Ekosistemi",
    description:
      "Akıllı ürünler, tek altyapı. YakınBoğazAI kurum verisini dışarı çıkarmadan konuşulur hâle getirir.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-body text-paper">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
