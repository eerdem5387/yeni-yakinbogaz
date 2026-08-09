import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-family",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body-family",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yakın Boğaz — Yazılım Stüdyosu",
  description:
    "Yakın Boğaz; ürün, platform ve dijital deneyimleri sakin bir ustalıkla tasarlayan yazılım stüdyosu.",
  openGraph: {
    title: "Yakın Boğaz — Yazılım Stüdyosu",
    description:
      "Ürün, platform ve dijital deneyimleri sakin bir ustalıkla tasarlayıp geliştiriyoruz.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
