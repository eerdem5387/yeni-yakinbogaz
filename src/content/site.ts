export const projects = [
  {
    name: "YakınBoğazAI",
    href: "/projeler/yakin-bogaz-ai",
    summary:
      "Verinizi dışarı çıkarmadan konuşan kapalı devre kurumsal yapay zekâ ve veri analiz platformu.",
    ready: true,
  },
  {
    name: "YKYer",
    href: "/projeler/ykyer",
    summary:
      "Kapalı alanlarda konum, yönlendirme ve operasyon. Bluetooth vericiler katı ve noktayı bulur; harita hedefe götürür.",
    ready: true,
  },
  {
    name: "TAFYS",
    href: "/projeler/tafys",
    summary:
      "Ulaşım ve filo platformu. Kurumsal, sürücü ve yolcu aynı ekosistemde planlar, uygular ve izler.",
    ready: true,
  },
  {
    name: "AcarBOT",
    href: "/projeler/acarbot",
    summary: "Proje sayfası hazırlanıyor.",
    ready: false,
  },
] as const;

export const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/biz-kimiz", label: "Biz Kimiz" },
  { href: "/projeler", label: "Projeler" },
  { href: "/dokumantasyon", label: "Dokümantasyon" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const contact = {
  email: "info@yakinbogaz.com.tr",
  phone: "+90 216 987 34 53",
  phoneHref: "tel:+902169873453",
  place: "RTEÜ Teknopark, Rize",
  campus: "Recep Tayyip Erdoğan Üniversitesi Teknopark",
  site: "Dijitalpark Teknokent — Rize Yerleşkesi",
  address: ["Fener Mah. Atatürk Cad. No: 28/2-1", "53000 Merkez / Rize"],
  map: {
    lat: 41.036465,
    lng: 40.493561,
  },
};
