import type { Metadata } from "next";
import { MetaRow } from "@/components/site/Chrome";
import { ContactForm } from "@/components/site/ContactForm";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Yakın Boğaz ile Recep Tayyip Erdoğan Üniversitesi Teknopark, Rize üzerinden iletişime geçin.",
};

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${contact.map.lng - 0.012}%2C${contact.map.lat - 0.008}%2C${contact.map.lng + 0.012}%2C${contact.map.lat + 0.008}&layer=mapnik&marker=${contact.map.lat}%2C${contact.map.lng}`;
const mapLink = `https://www.openstreetmap.org/?mlat=${contact.map.lat}&mlon=${contact.map.lng}#map=16/${contact.map.lat}/${contact.map.lng}`;

export default function ContactPage() {
  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="container">
        <MetaRow index="01" label="İletişim" />
        <h1 className="mt-12 max-w-4xl text-[clamp(2.3rem,5.4vw,4.6rem)] leading-[1.02] font-medium tracking-[-0.045em]">
          Bir sonraki adımı <span className="ghost">birlikte çizelim.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
          Kısa bir not yeter. YakınBoğazAI kurulumu, veri kaynakları ve kapalı devre çalışma
          düzenini birlikte netleştiririz.
        </p>

        <div className="mt-14 grid gap-14 border-t border-white/12 pt-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="kicker mb-6">Mesaj</p>
            <ContactForm />
          </div>

          <div className="grid content-start gap-8">
            <div>
              <p className="kicker mb-3">Adres</p>
              <p className="text-xl font-medium tracking-[-0.03em]">{contact.campus}</p>
              <p className="mt-2 text-paper/70">{contact.site}</p>
              {contact.address.map((line) => (
                <p key={line} className="text-paper/80">
                  {line}
                </p>
              ))}
            </div>
            <div>
              <p className="kicker mb-3">Telefon</p>
              <a
                href={contact.phoneHref}
                className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium tracking-[-0.03em] underline decoration-1 underline-offset-8"
              >
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="kicker mb-3">E-posta</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-medium underline decoration-1 underline-offset-8"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <p className="kicker">Harita</p>
            <a href={mapLink} target="_blank" rel="noreferrer" className="text-sm text-paper/70 underline underline-offset-4">
              Haritada aç
            </a>
          </div>
          <div className="overflow-hidden border border-white/12">
            <iframe
              title="Recep Tayyip Erdoğan Üniversitesi Teknopark, Rize"
              src={mapSrc}
              className="h-[840px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
