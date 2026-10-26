import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";

export const metadata: Metadata = {
  title: "ARKANS Gizlilik Politikası",
  description:
    "ARKANS Android uygulamasının hangi verilere eriştiğini, bu verilerin neden işlendiğini ve hangi cihaz izinlerinin istendiğini açıklar.",
};

const dataItems = [
  {
    title: "Hesap bilgisi",
    text: "Ad, e-posta, rol ve kuruma ait kullanıcı kaydı işlenir. Giriş parolası sunucuda saklanır; uygulama parolayı cihaz ekranında tutmaz.",
  },
  {
    title: "Bina içi konum",
    text: "Kat planı üzerindeki konum, kat, doğruluk, en yakın beacon kimliği, sinyal gücü ve zaman işlenir. Bu hesap, cihazdaki beacon ölçümü ve adım sayımıyla üretilir. Personel hesabıyla uygulama açıkken üretilen bina içi konum, kurumun ARKANS sunucusuna iletilir. Ziyaretçi navigasyonu öncelikle cihazda çalışır.",
  },
  {
    title: "Beacon ve sensör verisi",
    text: "Bluetooth ile okunan beacon kimliği ve sinyal gücü, pusula yönü, jiroskop ve ivmeölçer kullanılır. Bunlar konumu ve yürüyüş yönünü hesaplamak içindir.",
  },
  {
    title: "Adım sayımı ve yürüyüş yönü",
    text: "Okunan ivmeölçer, jiroskop ve pusula ölçümleri, konum hesabını beacon güncellemeleri arasında kararlı tutar. Ham sensör akışı reklam veya profil oluşturma amacıyla paylaşılmaz.",
  },
  {
    title: "Kamera görüntüsü",
    text: "Artırılmış gerçeklik yönlendirmesi ve karekod okuma sırasında kameradan görüntü alınır. Bu görüntü reklam için saklanmaz.",
  },
  {
    title: "Bildirim belirteci",
    text: "Görev ve duyuru bildirimleri açıksa, bildirimi iletebilmek için cihazın bildirim belirteci sunucuya kaydedilebilir.",
  },
  {
    title: "Destek kaydı",
    text: "Uygulama içinden bildirilen sorun metni ve ilgili hesap bilgisi destek kaydı olarak işlenebilir.",
  },
];

const permissions = [
  {
    names: ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"],
    title: "Kesin ve yaklaşık konum",
    text: "Bina içindeki konumu hesaplamak ve Android’in Bluetooth beacon taramasına izin vermesi için istenir. Konum, açık hava takibi veya reklam profili oluşturmak için kullanılmaz.",
  },
  {
    names: ["BLUETOOTH", "BLUETOOTH_ADMIN", "BLUETOOTH_SCAN", "BLUETOOTH_CONNECT"],
    title: "Bluetooth",
    text: "Yakındaki konum beacon’larını taramak için istenir. Beacon’lara bağlanıp kişisel veri toplanmaz; sinyal gücü mesafe tahmini için okunur.",
  },
  {
    names: ["CAMERA"],
    title: "Kamera",
    text: "Artırılmış gerçeklik yönlendirmesini göstermek ve karekod okumak için istenir.",
  },
  {
    names: ["POST_NOTIFICATIONS"],
    title: "Bildirim",
    text: "Görev, duyuru ve navigasyon uyarılarını göstermek için istenir. Bildirimler ayarlardan kapatılabilir.",
  },
  {
    names: ["USE_BIOMETRIC", "USE_FINGERPRINT"],
    title: "Biyometrik doğrulama",
    text: "İstenirse sonraki girişlerde parmak izi veya yüz doğrulaması kullanmak içindir. Biyometrik şablon yalnızca cihazın kendi güvenli alanında kalır; bize veya sunucumuza gönderilmez. Bu özelliği açmak zorunlu değildir.",
  },
  {
    names: ["INTERNET"],
    title: "İnternet",
    text: "Hesap, bina planı, rota ve personel konumu için ARKANS sunucusuyla iletişim kurmak içindir.",
  },
  {
    names: ["READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"],
    title: "Depolama",
    text: "Eski Android sürümlerinde harita veya dosya seçimini tamamlamak içindir. Güncel Android sürümlerinde sistemin kendi dosya seçicisi kullanılır.",
  },
  {
    names: ["VIBRATE", "WAKE_LOCK"],
    title: "Titreşim ve uyanık kalma",
    text: "Bildirim ve yönlendirme uyarılarında titreşim vermek ve işlem sürerken cihazın hemen uykuya geçmesini engellemek içindir.",
  },
  {
    names: ["RECEIVE_BOOT_COMPLETED"],
    title: "Yeniden başlatma",
    text: "Cihaz yeniden başladığında açık olan bildirimlerin zamanlamasını korumak içindir.",
  },
];

function Perm({ name }: { name: string }) {
  return (
    <code className="bg-ink/6 px-1.5 py-0.5 text-[0.78rem] tracking-[0.01em]">{name}</code>
  );
}

export default function ArkansPrivacyPage() {
  return (
    <article className="bg-paper pt-28 pb-20 text-ink md:pt-32 md:pb-28">
      <div className="container">
        <MetaRow index="01" label="ARKANS" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h1 className="max-w-3xl text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.98] font-medium tracking-[-0.045em]">
            Gizlilik politikası
          </h1>
          <p className="max-w-md leading-relaxed text-ink/70">
            Bu politika, Yakın Boğaz Bilgisayar tarafından sunulan ARKANS uygulamasının Android
            sürümünde hangi verilere erişildiğini, bu verilerin neden işlendiğini ve hangi cihaz
            izinlerinin istendiğini açıklar.
          </p>
        </div>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink/75">
          Uygulama, binaların içinde beacon sinyali ve adım sayımı ile yol tarifi vermek için
          kullanılır.
        </p>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-medium tracking-[-0.03em]">Veri sorumlusu</h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Veri sorumlusu Yakın Boğaz Bilgisayar’dır. Başvuru ve sorular için{" "}
            <a className="link-arrow" href="mailto:info@yakinbogaz.com">
              info@yakinbogaz.com
            </a>{" "}
            adresine yazabilirsiniz.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-medium tracking-[-0.04em]">
            İşlenen veriler
          </h2>
          <ol className="mt-8 divide-y divide-line-ink border-y border-line-ink">
            {dataItems.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-6 md:grid-cols-[4.5rem_16rem_1fr] md:gap-8">
                <span className="text-sm tracking-[0.16em] text-ink/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-medium tracking-[-0.02em]">{item.title}</h3>
                <p className="leading-relaxed text-ink/75">{item.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl leading-relaxed text-ink/75">
            Uygulama reklam göstermez, verileri reklam ağlarına satmaz ve kullanıcıların rehberine,
            SMS’lerine veya arama kayıtlarına erişmez.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-medium tracking-[-0.04em]">
            Android izinleri
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/70">
            Uygulamanın çalışması için istediği izinler ve gerekçeleri.
          </p>
          <ol className="mt-8 divide-y divide-line-ink border-y border-line-ink">
            {permissions.map((item, index) => (
              <li key={item.title} className="grid gap-4 py-6 md:grid-cols-[4.5rem_1fr] md:gap-8">
                <span className="text-sm tracking-[0.16em] text-ink/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-medium tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-3 flex flex-wrap gap-2">
                    {item.names.map((name) => (
                      <Perm key={name} name={name} />
                    ))}
                  </p>
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Sesli yönlendirme</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Sesli yönlendirme, kayıtlı sesi hoparlörden çalar. Uygulama mikrofonla konuşma
              kaydetmez ve ses kaydını sunucuya göndermez. Kamera bileşeninin bildirdiği mikrofon
              izni bu amaçla kullanılmaz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Aktarım ve kim görür</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Hesap, bina verisi, rota ve personel konumu kurumun ARKANS sunucusuna iletilir.
              Uygulamanın kurulumu, güncellenmesi ve bildirim iletimi Google Play ve Android sistem
              hizmetleri üzerinden, bu hizmetlerin kendi koşulları kapsamında yürür. Aynı kurumdaki
              görev, destek kaydı ve personel konumu, yetkili kurum personeline, kullanıcının
              rolünün izin verdiği kadar gösterilir. Veriler satılmaz. Yurt dışındaki bir reklam
              ortağına aktarılmaz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Saklama</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Hesap verisi, hesap kurum tarafından silinene veya kullanıcı silme talebi sonuçlanana
              kadar saklanır. Personel konum kayıtları, işletmenin iç mekân takibi için gerekli süre
              boyunca tutulur. Cihazdaki önbellek, uygulama ayarlarından veya uygulamayı silerek
              temizlenebilir. Biyometrik doğrulama kapalıysa cihazda bu özellikle ilgili bir kayıt
              tutulmaz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Güvenlik</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Erişim, hesap rolüne göre sınırlanır. Sunucu iletişimi HTTPS üzerinden yapılır. Hiçbir
              yöntem mutlak güvenlik sağlamaz. Yetkisiz erişim şüphesinde{" "}
              <a className="link-arrow" href="mailto:info@yakinbogaz.com">
                info@yakinbogaz.com
              </a>{" "}
              adresine bildirim yapılmalıdır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Haklarınız</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verinizin işlenip
              işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme, işleme itiraz etme ve
              şikâyette bulunma haklarınız vardır. Taleplerinizi{" "}
              <a className="link-arrow" href="mailto:info@yakinbogaz.com">
                info@yakinbogaz.com
              </a>{" "}
              adresine iletebilirsiniz. Yanıt, yasal süre içinde verilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Çocuklar</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              ARKANS, çocuklara yönelik bir uygulama değildir. Bilerek 13 yaşın altındaki
              çocuklardan hesap verisi toplanmaz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-[-0.03em]">Güncellemeler</h2>
            <p className="mt-4 leading-relaxed text-ink/75">
              Bu metin güncellenebilir. Yeni metin bu sayfada yayımlandığı tarihte yürürlüğe girer.
              Önemli bir değişiklik olursa uygulama veya kurum duyurusu ile ayrıca bildirilebilir.
            </p>
          </div>
        </section>

        <footer className="mt-16 grid gap-8 border-t border-line-ink pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-ink/45 uppercase">İletişim</p>
            <p className="mt-3 text-xl font-medium tracking-[-0.03em]">Yakın Boğaz Bilgisayar</p>
            <a className="mt-2 inline-block text-ink/75" href="mailto:info@yakinbogaz.com">
              info@yakinbogaz.com
            </a>
          </div>
          <Link href="/projeler/arkans" className="link-arrow">
            ARKANS
            <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </article>
  );
}
