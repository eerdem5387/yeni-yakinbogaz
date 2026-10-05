export const ybai = {
  name: "YakınBoğazAI",
  kicker: "Kapalı devre",
  category: "Kurumsal yapay zekâ ve veri analiz platformu",
  headline: "Verinizi dışarı çıkarmadan konuşan kurumsal yapay zekâ",
  lead: "Kurum verisini tek akışta toplar, analiz eder ve çalışanların bu veriyle doğal dilde konuşmasını sağlar — tamamen kurumun kendi altyapısında.",
  promises: ["Kapalı devre", "Kurumsal veriyle soru-cevap", "Analiz ve tahmin"],
  problem: {
    title: "Kurumlar veri üretiyor, ama bu veriyi kullanamıyor",
    text: "Bugün her kurum ciddi miktarda veri üretiyor. Bu verinin değeri çok yüksek; ancak çoğu kurumda karar süreçlerine dönüşmüyor.",
    sources: [
      "Operasyon kayıtları",
      "Müşteri ve hasta dosyaları",
      "Ölçüm ve sensör verileri",
      "Raporlar",
      "Prosedürler",
      "Sözleşmeler",
      "Yazışmalar",
    ],
    closer: "Veri var, cevap yok. Üç temel engel bu verinin kullanılmasını engelliyor.",
    reasons: [
      {
        n: "01",
        title: "Veri dağınık ve farklı formatlarda",
        text: "Bir kısmı veri ambarında, bir kısmı Excel ve CSV dosyalarında, bir kısmı PDF ve Word dokümanlarında, bir kısmı da başka sistemlerin API’lerinde duruyor. Bir soruya cevap bulmak için birkaç sistemi elle taramak, dosyaları birleştirmek ve bir uzmanın saatlerini harcamak gerekiyor.",
      },
      {
        n: "02",
        title: "Sayılar tek başına bir şey söylemiyor",
        text: "Raporlar ortalamaları, grafikleri ve tabloları gösteriyor ama “Bu değer neden yükseldi?”, “Bu normal mi?”, “Önümüzdeki dönem ne bekleyelim?” sorularını cevaplamıyor. Bu yorumu yapabilecek analist sayısı sınırlı, karar ise gecikiyor.",
      },
      {
        n: "03",
        title: "Hazır yapay zekâ servisleri hassas veri için kullanılamıyor",
        text: "Bulut yapay zekâ servisleri güçlü; ancak kişisel veri, ticari sır veya regülasyona tabi bilgi kurum dışındaki bir sunucuya gönderilemez. KVKK, sektör regülasyonları ve güvenlik politikaları buna izin vermez. Kurumlar ya yapay zekâdan vazgeçiyor ya da veri güvenliğini riske atıyor.",
      },
    ],
  },
  solution: {
    title: "YakınBoğazAI bu üç sorunu birlikte çözer",
    text: "Kurumun tüm verisini tek bir akışta toplar, anlamlı hâle getirir, sayısal analizini yapar ve çalışanların bu veriyle doğal dilde konuşmasını sağlar.",
    pairs: [
      {
        from: "Veri dağınık",
        to: "Tüm veri tek akışta toplanır ve yapay zekânın anlayacağı biçime dönüştürülür.",
      },
      {
        from: "Sayılar konuşmuyor",
        to: "Sayısal analiz otomatik yapılır; sonuçlar doğal dilde yorumlanır.",
      },
      {
        from: "Bulut yapay zekâ kullanılamıyor",
        to: "Dil modeli, bilgi tabanı ve analiz motoru kurum içinde, kapalı devre çalışır.",
      },
    ],
    promise: "Verinin tek bir satırı bile dışarıdaki bir yapay zekâ servisine gönderilmez.",
  },
  modulesIntro: {
    title: "Birbiriyle konuşan uzman modüller",
    text: "Her modül tek bir işi üstlenir; verinin yolculuğu uçtan uca izlenebilir.",
  },
  modules: [
    {
      id: "veri-toplama",
      n: "01",
      name: "Veri toplama",
      title: "Verinin olduğu yere bağlanırız",
      lead: "Kurumun mevcut sistemlerini değiştirmesi gerekmez; veri bulunduğu yerden alınır.",
      points: [
        {
          title: "Veri ambarı",
          text: "Kurumsal veri ambarındaki tablolara doğrudan bağlanır, kayıtları düzenli olarak çeker.",
        },
        {
          title: "Klasör izleme",
          text: "Klasörlere bırakılan JSON, CSV ve doküman dosyalarını otomatik fark eder ve işler.",
        },
        {
          title: "API ve anlık akış",
          text: "Diğer sistemlerin API’lerini belirli aralıklarla sorgular, canlı akışları dinler.",
        },
        {
          title: "Doğrudan gönderim",
          text: "Diğer uygulamalar veriyi JSON veya CSV olarak doğrudan YakınBoğazAI’a iletir.",
        },
        {
          title: "Doküman yükleme",
          text: "PDF, Word, PowerPoint, metin ve CSV dosyaları arayüzden yüklenir.",
        },
      ],
      note: "Sistem her kaydın bir parmak izini tutar. Sonraki senkronizasyonda yalnızca yeni eklenen veya değişen kayıtlar yeniden işlenir. İlk yükleme bir kez yapılır; sonraki güncellemeler dakikalar içinde tamamlanır.",
    },
    {
      id: "donusturme",
      n: "02",
      name: "Dönüştürme",
      title: "Dağınık veriyi anlamlı dokümanlara çeviririz",
      lead: "Ham tablolar ve dosyalar yapay zekânın doğrudan anlayabileceği biçimde değildir. Farklı kaynaklardan gelen veri ortak bir doküman formatına çevrilir.",
      points: [
        {
          title: "Ortak doküman formatı",
          text: "Her kaynak aynı yapıya dönüştürülür; kayıtlar ilgili kişi veya varlık altında birleştirilir.",
        },
        {
          title: "Özet profil",
          text: "Kişi veya varlığın tüm geçmişinin okunabilir özeti.",
        },
        {
          title: "Dönemsel raporlar",
          text: "Her dönem için ne olduğunu anlatan raporlar.",
        },
      ],
      note: "Böylece yapay zekâ tek tek satırlara değil, bağlamı olan, okunabilir bilgiye erişir.",
      sources: ["Veri ambarı tablo satırları", "CSV ve JSON dosyaları", "API ve akış kayıtları", "Dokümanlar"],
    },
    {
      id: "bilgi-tabani",
      n: "03",
      name: "Kurumsal bilgi tabanı",
      title: "Veriyi anlamına göre aranabilir hâle getiririz",
      lead: "Dönüştürülen dokümanlar eğitim ve bilgi tabanı modülüne aktarılır.",
      points: [
        {
          title: "Parçalama",
          text: "Dokümanlar anlamlı parçalara bölünür.",
        },
        {
          title: "Vektörleme",
          text: "Her parça, anlamını temsil eden sayısal bir vektöre çevrilir. Bu işlem de kurum içinde çalışan bir modelle yapılır.",
        },
        {
          title: "Saklama",
          text: "Vektörler kurum içindeki vektör veritabanında, konu bazlı koleksiyonlar hâlinde saklanır.",
        },
      ],
      note: "Arama kelime eşleşmesine göre değil, anlamına göredir. “Geçen yıl böbrek fonksiyonu bozulan hastalar” gibi bir soru, dokümanda bu ifade birebir geçmese bile ilgili kayıtları bulur.",
    },
    {
      id: "sayisal-analiz",
      n: "04",
      name: "Sayısal analiz",
      title: "Sayıları konuşturuyoruz",
      lead: "Ölçüm, sensör, satış veya operasyon verisi zaman serisi veritabanına kaydedilir ve analiz edilir. Sonuçlar raporlanır, saklanır ve panel üzerinden izlenir.",
      points: [
        {
          title: "İstatistiksel analiz",
          text: "Temel istatistikler, dağılım, korelasyon ve hipotez testleri.",
        },
        {
          title: "Zaman serisi analizi",
          text: "Trend, mevsimsellik ve kırılma noktası tespiti.",
        },
        {
          title: "Anomali tespiti",
          text: "Z-skoru, IQR, Isolation Forest ve DBSCAN ile olağandışı değerler bulunur, önem derecesine göre sınıflandırılır.",
        },
        {
          title: "Tahminleme",
          text: "ARIMA, üstel düzeltme (Holt-Winters) ve hareketli ortalama ile gelecek dönem öngörüsü.",
        },
      ],
    },
    {
      id: "yapay-zeka",
      n: "05",
      name: "Yapay zekâ ile yorumlama",
      title: "Verinizle konuşun",
      lead: "YakınBoğazAI’ın kalbinde, kurum sunucularında çalışan büyük bir dil modeli vardır.",
      points: [
        {
          title: "Bilgi tabanında ara",
          text: "Soru önce kurumsal bilgi tabanında aranır; en ilgili bilgi parçaları bulunur.",
        },
        {
          title: "Modele ver",
          text: "Bu parçalar soruyla birlikte dil modeline verilir.",
        },
        {
          title: "Kaynaklı yanıt üret",
          text: "Model, kurumun kendi verisine dayanarak doğal dilde cevap üretir ve kaynaklarını gösterir.",
        },
        {
          title: "Gerekirse genel bilgiye düş",
          text: "Bilgi tabanında ilgili bilgi yoksa model genel bilgisiyle yanıt verir.",
        },
      ],
      extras: [
        {
          title: "Analiz sonuçlarını yorumlar",
          text: "Anomali bulunduğunda olası nedenlerini, tahmin üretildiğinde ne anlama geldiğini sade bir dille açıklar.",
        },
        {
          title: "Kurumun dilini konuşur",
          text: "Terim tanımları, hassasiyet toleransı ve konu kuralları kod yazmadan arayüzden girilir. Onaylı sohbetler bilgi tabanına geri kazandırılır; sistem kullanıldıkça zenginleşir.",
        },
      ],
    },
    {
      id: "arayuzler",
      n: "06",
      name: "Arayüzler",
      title: "Web ve mobilden erişim",
      lead: "Web panelinin temel işlevleri — sohbet, analiz, kayıt detayları, doküman yükleme ve izleme — sahadaki yöneticiler ve çalışanlar için iOS ve Android uygulamasında da vardır.",
      points: [
        { title: "Panel", text: "Sistem durumu ve özet göstergeler." },
        { title: "Sayısal analiz", text: "Analiz ekranı, zaman serisi grafikleri, kişi ve varlık detayı." },
        { title: "Sohbet", text: "Kayıtlı geçmişiyle yapay zekâ sohbeti." },
        { title: "Bilgi tabanı", text: "Doküman yükleme ve bilgi tabanı yönetimi." },
        { title: "Canlı izleme", text: "Veri aktarımının izlendiği log ekranı ve model ayarları." },
      ],
      pipeline: ["Kaynaktan çekme", "Dönüştürme", "Bilgi tabanına yazma", "Vektör veritabanına kayıt"],
    },
    {
      id: "guvenlik",
      n: "07",
      name: "Güvenlik ve altyapı",
      title: "Veri egemenliği kurumda kalır",
      lead: "Metin, kayıtlar ve tüm modüller kurum altyapısında, kapalı devre çalışır.",
      points: [
        {
          title: "Kapalı devre çalışma",
          text: "Dil modeli, vektör veritabanı, analiz motoru ve tüm veritabanları kurum altyapısında çalışır.",
        },
        {
          title: "Tek giriş noktası",
          text: "Tüm istekler kimlik doğrulayan merkezi API geçidinden geçer. JWT oturum kullanılır; çıkışta oturum geçersiz kılınır; şifreler bcrypt ile saklanır.",
        },
        {
          title: "Şifreli iletişim",
          text: "Dış erişim HTTPS üzerinden, ters vekil sunucu arkasından sağlanır.",
        },
        {
          title: "Sağlık kontrolü",
          text: "Tüm servislerin ve veritabanlarının durumu merkezi olarak izlenir.",
        },
        {
          title: "Esnek kurulum",
          text: "Konteyner tabanlıdır. Kurumun kendi sunucularına veya kuruma ayrılmış özel bulut ortamına kurulur. Yapay zekâ işleri GPU’lu sunucuda, uygulama ve veritabanları ayrı sunucuda ölçeklenir.",
        },
      ],
    },
  ],
  scenario: {
    title: "Veri ambarından yöneticinin cebine",
    setup:
      "Bir kurumun veri ambarında on binlerce müşteri, yılları kapsayan işlem ve ölçüm kayıtları; ayrıca yüzlerce sayfa prosedür dokümanı var.",
    question:
      "Son altı ayda değerleri sürekli yükselen müşteriler kimler ve prosedüre göre ne yapmamız gerekiyor?",
    steps: [
      {
        title: "Bağlan ve dönüştür",
        text: "Veri ambarına bağlanır; kayıtları özet profil ve dönemsel raporlara çevirir, prosedürlerle birlikte bilgi tabanına yazar.",
      },
      {
        title: "Analiz et",
        text: "Sayısal ölçümler analiz motoruna akar; olağandışı değerler otomatik işaretlenir.",
      },
      {
        title: "Sor",
        text: "Bir yönetici mobil uygulamadan soru sorar.",
      },
      {
        title: "Yanıtla",
        text: "Sistem ilgili kayıtları ve prosedürü bulur; dil modeli kaynaklarıyla birlikte cevap verir.",
      },
      {
        title: "Güncel kal",
        text: "Ertesi gün yalnızca değişen kayıtlar yeniden işlenir; bilgi tabanı güncel kalır.",
      },
    ],
    closer: "Bu süreçte verinin hiçbir parçası kurum dışına çıkmaz.",
  },
  outcomes: [
    {
      title: "Tek bilgi kaynağı",
      text: "Dağınık veri tek akışta toplanır ve anlamına göre aranabilir hâle gelir.",
    },
    {
      title: "Anlamlandırılmış sayılar",
      text: "Analiz otomatik yapılır; sonuçlar doğal dilde, saniyeler içinde yorumlanır.",
    },
    {
      title: "Veri egemenliği",
      text: "Her şey kurum altyapısında, kapalı devre çalışır; veri dışarı çıkmaz.",
    },
  ],
  closing: {
    title: "Dağınık veriden tek bir akıllı bilgi kaynağına",
    text: "YakınBoğazAI, kurumların elindeki dağınık veriyi tek bir akıllı bilgi kaynağına dönüştürür; yapay zekânın gücünden vazgeçmeden veri egemenliğini tamamen kurumda tutar.",
  },
};
