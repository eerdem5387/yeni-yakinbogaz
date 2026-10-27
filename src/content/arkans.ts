export const arkans = {
  name: "ARKANS",
  kicker: "Kapalı alan",
  category: "Büyük binalarda yol ve günlük iş",
  headline: "Büyük bir binada yolu bulmak, hâlâ çoğunlukla birine sormak anlamına geliyor.",
  lead: "ARKANS, kapalı alanda kişinin nerede olduğunu ve nereye gideceğini telefonda gösteriyor. Ziyaretçi resepsiyona yığılmadan odasına ulaşabiliyor, personel görev yerini sözle tarif beklerken vakit kaybetmiyor, yönetim de binada ne olduğunu parça parça aramak zorunda kalmıyor.",
  legend: [
    { mark: "dot" as const, label: "Şu an olunan nokta" },
    { mark: "square" as const, label: "Varılmak istenen yer" },
  ],
  chips: ["Konum", "Yol", "Operasyon"],
  problem: {
    title: "Dışarıdaki harita, kapıda susuyor",
    reasons: [
      {
        n: "01",
        title: "Ziyaretçi içeride kayboluyor",
        text: "Doğru kapıdan girmek çoğu zaman yetmiyor. Poliklinik, oda, salon ya da daire içeride birbirine benziyor; tabela da her koridorda aynı ciddiyetle duruyor ama aynı açıklığı vermiyor. Sorular resepsiyona birikiyor, asıl iş de gecikiyor.",
      },
      {
        n: "02",
        title: "Personel yerini sözle öğreniyor",
        text: "Görev belli olabiliyor, binadaki karşılığı her zaman belli olmuyor. Özellikle binayı yeni tanıyan biri, ‘şu koridordan sağa’ tarifiyle ilerliyor. Kaybolan süre kısa görünüyor; gün içinde aynı tarif birkaç kişiye birden verilince birikiyor.",
      },
      {
        n: "03",
        title: "Yönetim binayı parça parça duyuyor",
        text: "Hangi katın sıkıştığı, hangi işin yerinde kaldığı çoğu zaman telefonla, ayrı ayrı öğreniliyor. Bilgi var ama aynı anda önünde durmuyor. Bu yüzden müdahale de, plan da geç kalabiliyor.",
      },
    ],
  },
  platform: {
    title: "ARKANS bu boşluğu dolduruyor",
    text: "kişinin bina içindeki yerini buluyor, gitmek istediği noktaya giden yolu da haritada ya da telefon kamerasının üzerinde gösteriyor. Ziyaretçi, personel ve yönetim ayrı araçlar taşımıyor; aynı binayı, her biri kendi işine göre görüyor.",
  },
  jobsTitle: "Dört işi bir arada topluyoruz",
  jobs: [
    {
      n: "01",
      title: "Konum",
      text: "Telefon, kişinin hangi katta ve hangi noktada olduğunu binanın planı üzerinde gösteriyor. İlk kez gelen de, her gün gelen de yerini birine sormadan anlayabiliyor.",
    },
    {
      n: "02",
      title: "Yön",
      text: "Gidilecek yer seçildiğinde ya da kapıdaki karekod okutulduğunda yol telefonda beliriyor. İstenirse haritada, istenirse kameranın gördüğü koridorun üzerinde ilerliyor.",
    },
    {
      n: "03",
      title: "Tesis",
      text: "Bina, blok, kat ve odalar kendi adlarıyla sisteme giriyor. Birden fazla bina varsa her biri ayrı kalıyor; yönetim yine de hepsini aynı ekrandan takip edebiliyor.",
    },
    {
      n: "04",
      title: "Operasyon",
      text: "Günün görevleri, ziyaretçi çağrıları ve kalabalıklaşan katlar tek panelde toplanıyor. Yönetim, aksayan yeri görmek için binayı kat kat dolaşmak zorunda kalmıyor.",
    },
  ],
  placesTitle: "Hangi binalarda karşımıza çıkıyor",
  placesLead:
    "ARKANS’ı, içeri girer girmez yol sormanın işin bir parçası haline geldiği binalar için düşünüyoruz. Ortak nokta tabela eksikliği değil; tabelanın yetmediği ölçek.",
  places: [
    {
      title: "Hastane, kampüs ve kamu",
      text: "Ziyaretçi çoğu zaman doğru bloğa giriyor, asıl aradığı birimi içeride kaybediyor. Poliklinik, laboratuvar, oda ya da dairenin yerini sormak resepsiyonu meşgul ediyor; randevu ya da işlem de bu arada bekliyor. ARKANS bu yolu kişinin telefonunda açınca hem ziyaretçi hem karşılayan ekip rahatlıyor.",
    },
    {
      title: "AVM, havalimanı ve fuar",
      text: "Tabela bol, insan da kalabalık. Mağazayı, kapıyı, otoparkı ya da çıkışı arayan biri için kısa bir yönlendirme, soru sormadan ilerlemeyi kolaylaştırıyor. Fuar ve havalimanında yanlış kat, yetişilmesi gereken işi doğrudan geciktiriyor.",
    },
    {
      title: "Ofis, fabrika ve depo",
      text: "Burada mesele vitrin değil, işin doğru noktada yapılması. Ziyaretçi karşılama ile saha görevi aynı binada yürüyebiliyor; ikisi de yerini net bilmezse hem süre hem güvenlik zorlanıyor. ARKANS, görev noktasını ve ziyaretçinin gideceği yeri aynı düzende tutuyor.",
    },
    {
      title: "Otel ve müze",
      text: "Misafir odasını, salonu ya da görmek istediği yerin yolunu resepsiyona sorarak aramak zorunda kalmıyor. Müzede bu, eserler arasında kurulan bir geziye dönüşebiliyor; otelde ise katlar arasındaki karışıklık azalıyor.",
    },
  ],
  placesNote:
    "Aynı kurumun birden fazla binası olabiliyor. ARKANS bunları birbirine karıştırmadan, yine de tek bir yönetim ekranından izlemeye imkân veriyor.",
  flow: {
    title: "Gün içinde neler oluyor",
    lead: "Hazırlık bir kez yapılıyor. Sonrasında yönetim kendi ekranından, binanın içindeki insanlar da telefonlarından devam ediyor.",
    steps: [
      {
        n: "01",
        title: "Kurulum",
        text: "Önce bina sisteme tanıtılıyor. Katlar, odalar ve yönlendirmeyi sağlayan cihazlar yerlerine bağlanıyor. Bu emek her ziyarette yeniden harcanmıyor.",
      },
      {
        n: "02",
        title: "Yönetici",
        text: "Yönetici buradan kişileri tanımlıyor, görev ve güzergâhları açıyor, gün içinde binanın nerede sıkıştığını izliyor. Ayrı tablolar ve dağınık telefon trafiği yerine tek ekran yetiyor.",
      },
      {
        n: "03",
        title: "Ziyaretçi",
        text: "Ziyaretçi gideceği yeri seçiyor ya da kapıdaki karekodu okutuyor. Yol telefonda görünüyor; şaşırdığı yerde aynı uygulamadan yardım da isteyebiliyor.",
      },
      {
        n: "04",
        title: "Personel",
        text: "Personele düşen görev, binadaki yeriyle birlikte geliyor. Kişi listeye bakıp sözlü tarif beklemeden ilgili noktaya gidiyor ve işi tamamladığını belirtebiliyor.",
      },
    ],
  },
  rolesTitle: "Herkes aynı binayı, kendi işine göre görüyor",
  roles: [
    {
      title: "Yönetici",
      text: "Tesisin tamamını, ekibi ve günün özetini görüyor. Hangi binada ne olduğunu tek tek sormak zorunda kalmıyor.",
    },
    {
      title: "Müdür",
      text: "Kendi bölümündeki işlere ve ekibe bakıyor. Bütün tesisin kalabalığı arasında yalnızca sorumluluğundaki alanı takip ediyor.",
    },
    {
      title: "Personel",
      text: "O günkü görevlerini ve her birinin bina içindeki yolunu görüyor. Binayı ezbere bilmeyen biri de işine gidebiliyor.",
    },
    {
      title: "Ziyaretçi",
      text: "Aradığı yeri, haritayı ve gerektiğinde yardım isteyeceği kanalı görüyor. Resepsiyon kuyruğuna girmeden ilerleyebiliyor.",
    },
  ],
  rolesNote:
    "Ekranlar birbirine karışmıyor; herkes kendi yetkisi kadarını görüyor. Giriş kişiye özel tutuluyor, istenirse bir doğrulama adımı daha eklenebiliyor.",
  closing: {
    title: "İçeri giren insanın yolunu görebilmesi için kuruluyor.",
    lines: [
      "Ziyaretçi yolunu sorarak değil, görerek ilerleyebiliyor.",
      "Personel işinin başına tarif beklemeden geçebiliyor.",
      "Yönetim de binayı telefonla parça parça aramak zorunda kalmıyor.",
    ],
    pilot:
      "Denemeye bir kat, bir güzergâh ve küçük bir ekiple başlanabiliyor. Bina ve ekip büyüdükçe aynı düzen de büyüyebiliyor.",
  },
};
