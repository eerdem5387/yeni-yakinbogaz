import { LayoutDashboard, Network, UsersRound, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const works: {
  name: string;
  meta: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Operasyon paneli",
    meta: "SaaS · Next.js",
    text: "Canlı veri, rol bazlı erişim ve sade operasyon akışları.",
    icon: LayoutDashboard,
  },
  {
    name: "Müşteri portalı",
    meta: "B2B · React",
    text: "Başvuru, takip ve bildirimleri tek bir deneyimde birleştiren arayüz.",
    icon: UsersRound,
  },
  {
    name: "Entegrasyon omurgası",
    meta: "API · Node",
    text: "Dağıtık sistemler arasında güvenilir ve izlenebilir veri köprüleri.",
    icon: Network,
  },
];

export function Work() {
  return (
    <section id="isler" className="bg-water-deep py-24 text-[#e8f1f3] md:py-32">
      <div className="container">
        <Reveal>
          <p className="section-label mb-4 text-[#9ec2c9]">Seçili işler</p>
          <h2 className="display max-w-2xl text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1]">
            Sessizce çalışan, görünür sonuç üreten ürünler.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-white/15 border-y border-white/15">
          {works.map((work, index) => {
            const Icon = work.icon;

            return (
              <Reveal key={work.name} delay={index * 0.08}>
                <article className="grid gap-4 py-8 md:grid-cols-[auto_1.1fr_0.8fr_1.2fr] md:items-center md:gap-8 md:py-10">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-white/8 text-[#9ec2c9]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="display text-2xl font-semibold md:text-[1.7rem]">
                    {work.name}
                  </h3>
                  <p className="text-sm tracking-wide text-[#9ec2c9]">{work.meta}</p>
                  <p className="text-[#c7dce0] md:text-right">{work.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
