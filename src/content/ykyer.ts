export const ykyer = {
  name: "YKYer",
  kicker: "Kapalı alan",
  category: "Konum, yönlendirme ve operasyon",
  headline: "Kapalı alanlarda konum, yönlendirme ve operasyon.",
  lead: "Tavana yerleştirilen Bluetooth vericiler yerini bulur. Harita veya artırılmış gerçeklik hedefe götürür.",
  legend: [
    { mark: "dot" as const, label: "Bulunan konum" },
    { mark: "square" as const, label: "Gidilecek hedef" },
  ],
  chips: ["Konum tespiti", "Yol tarifi", "Operasyon"],
  problem: {
    title: "GPS, kapının içinde biter",
    reasons: [
      {
        n: "01",
        title: "Ziyaretçi kaybolur",
        text: "Tabela yetmez. Resepsiyon kuyruğu uzar; oda, poliklinik ve salon kaçırılır.",
      },
      {
        n: "02",
        title: "Personel geç ulaşır",
        text: "Görev yeri sözle tarif edilir. Haritada bir nokta olmadığı için süre uzar.",
      },
      {
        n: "03",
        title: "Yönetim göremez",
        text: "Hangi kat yoğun, hangi görev nerede kaldı: bunlar tek ekranda toplanmaz.",
      },
    ],
  },
  platform: {
    title: "Binanın içine konum",
    text: "YKYer, Bluetooth vericilerle kişinin bulunduğu katı ve noktayı bulur. Harita ya da kamera üstündeki oklarla hedefe götürür. Ziyaretçi, personel ve yönetim aynı sistemde buluşur.",
  },
  jobs: [
    {
      n: "01",
      title: "Konum",
      text: "Telefon, yakındaki vericilerden kat planı üzerindeki yeri hesaplar.",
    },
    {
      n: "02",
      title: "Yön",
      text: "Hedef seçilir veya QR okutulur. Plan ya da kamera yolu çizer.",
    },
    {
      n: "03",
      title: "Tesis",
      text: "Bina, blok, kat ve oda plana işlenir. Vericiler koordinata bağlanır.",
    },
    {
      n: "04",
      title: "Operasyon",
      text: "Görev, bildirim, ziyaretçi, destek ve yoğunluk aynı panelden izlenir.",
    },
  ],
  places: [
    {
      title: "Hastane, kampüs, kamu",
      text: "Poliklinik, oda, laboratuvar, birim",
    },
    {
      title: "AVM, havalimanı, fuar",
      text: "Mağaza, kapı, otopark, çıkış",
    },
    {
      title: "Ofis, fabrika, depo",
      text: "Görev noktası ve ziyaretçi karşılama",
    },
    {
      title: "Otel ve müze",
      text: "Oda, salon, eser rotası",
    },
  ],
  placesNote: "Aynı sistem birden fazla tesis ve binayı ayrı tutar.",
  flow: {
    title: "Nasıl çalışır",
    lead: "Web paneli yönetimi taşır. Mobil uygulama yolu tarif eder.",
    steps: [
      {
        n: "01",
        title: "Kurulum",
        text: "Vericiler yerleştirilir, kimlikleri tanımlanır ve kat planındaki yerine bağlanır.",
      },
      {
        n: "02",
        title: "Yönetici",
        text: "Kullanıcı açar, rota ve görev tanımlar. Batarya ile yoğunluğu izler.",
      },
      {
        n: "03",
        title: "Ziyaretçi",
        text: "Hedef seçer veya QR okutur. Yolu görür, gerekirse destek ister.",
      },
      {
        n: "04",
        title: "Personel",
        text: "Konuma bağlı görevi açar, navigasyonla oraya gider, tamamlar.",
      },
    ],
  },
  roles: [
    { title: "Yönetici", text: "Tesis, verici, kullanıcı ve rapor" },
    { title: "Müdür", text: "Bölüm, görev ve ekip" },
    { title: "Personel", text: "Görev listesi ve yol tarifi" },
    { title: "Ziyaretçi", text: "Hedef arama, harita ve destek" },
  ],
  rolesNote:
    "Herkes kendi ekranını görür. Giriş güvenli oturumla yapılır; iki adımlı doğrulama isteğe bağlıdır.",
  closing: {
    lines: ["Ziyaretçi yolunu bulur.", "Personel işine gider.", "Yönetim görür."],
    pilot: "Pilot için bir kat, bir rota ve bir ekip yeter.",
  },
};
