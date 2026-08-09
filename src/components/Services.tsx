import { Boxes, Layers3, PanelsTopLeft, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const services: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Ürün geliştirme",
    text: "Fikirden yayına: web ve mobil ürünleri uçtan uca tasarlar, inşa eder ve büyütürüz.",
    icon: Layers3,
  },
  {
    title: "Platform & API",
    text: "Ölçeklenebilir altyapılar, güvenli entegrasyonlar ve uzun ömürlü sistem mimarileri kurarız.",
    icon: Boxes,
  },
  {
    title: "Arayüz & deneyim",
    text: "Markanıza uygun, akıcı ve erişilebilir arayüzler ile kullanıcıyı merkeze alırız.",
    icon: PanelsTopLeft,
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="relative bg-bg-soft py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="section-label mb-4">Hizmetler</p>
          <h2 className="display max-w-2xl text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1]">
            Net ihtiyaçlara, net çözümler.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Karmaşık süreçleri sadeleştirir; yazılımı işinize yakın, sürdürülebilir
            ve ölçülebilir hale getiririz.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-0 border-t border-line md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-water-deep/8 text-water-mid">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="display mb-3 text-2xl font-semibold">{service.title}</h3>
                  <p className="leading-relaxed text-ink-soft">{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
