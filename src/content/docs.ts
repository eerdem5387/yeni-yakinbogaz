export type ProductDocument = {
  title: string;
  description: string;
  href: string;
  format: string;
};

export const documentsByHref: Record<string, readonly ProductDocument[]> = {
  "/projeler/yakin-bogaz-ai": [
    {
      title: "Yatay sunum",
      description:
        "Platformun kurumlara anlatımı: veri akışı, modüller ve kapalı devre mimari.",
      href: "/dokumanlar/yakin-bogaz-ai-yatay-sunum.pdf",
      format: "PDF",
    },
  ],
};
