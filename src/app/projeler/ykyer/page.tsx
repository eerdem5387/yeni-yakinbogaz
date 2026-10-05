import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Checker, MetaRow } from "@/components/site/Chrome";
import { ykyer } from "@/content/ykyer";

export const metadata: Metadata = {
  title: "YKYer",
  description: ykyer.lead,
};

export default function YkyerPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse at 70% 40%, black 10%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="container relative">
          <p className="kicker">{ykyer.kicker}</p>
          <h1 className="metal mt-4 text-[clamp(3.4rem,10vw,8rem)] leading-[0.88] font-semibold tracking-[-0.06em]">
            {ykyer.name}
          </h1>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.7fr]">
            <div>
              <h2 className="max-w-xl text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.12] font-medium tracking-[-0.035em]">
                Kapalı alanlarda konum, <span className="ghost">yönlendirme ve operasyon.</span>
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-paper/75">{ykyer.lead}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {ykyer.chips.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-white/12 p-6">
              <svg viewBox="0 0 168 120" className="h-28 w-full" aria-hidden>
                <line x1="18" y1="18" x2="18" y2="78" stroke="rgba(255,255,255,0.45)" strokeWidth="3" />
                <line x1="18" y1="78" x2="132" y2="78" stroke="white" strokeWidth="3" />
                <circle cx="18" cy="78" r="7" fill="white" />
                <rect x="124" y="66" width="22" height="22" fill="none" stroke="white" strokeWidth="3" />
              </svg>
              <ul className="mt-4 space-y-2 text-sm text-paper/75">
                {ykyer.legend.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    {item.mark === "dot" ? (
                      <span className="size-2.5 rounded-full bg-paper" />
                    ) : (
                      <span className="size-2.5 border border-paper" />
                    )}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="#sorun" className="link-arrow mt-12">
            Sistemi incele
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <Checker />

      <section id="sorun" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="01" label="Sorun" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            GPS, <span className="ghost">kapının içinde biter</span>
          </h2>
          <div className="mt-14 divide-y divide-line-ink border-y border-line-ink">
            {ykyer.problem.reasons.map((reason) => (
              <article key={reason.n} className="grid gap-4 py-8 md:grid-cols-[5rem_1fr] md:gap-8">
                <p className="text-sm tracking-[0.16em] text-ink/45">{reason.n}</p>
                <div className="grid gap-3 md:grid-cols-[0.7fr_1.3fr] md:gap-10">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">{reason.title}</h3>
                  <p className="leading-relaxed text-ink/70">{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="02" label="Platform" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {ykyer.platform.title}
          </h2>
          <p className="mt-8 max-w-3xl text-[clamp(1.25rem,2.2vw,1.7rem)] leading-snug font-medium tracking-[-0.03em]">
            <span className="underline decoration-1 underline-offset-[0.16em]">YKYer</span>{" "}
            <span className="text-paper/75 font-normal">
              Bluetooth vericilerle kişinin bulunduğu katı ve noktayı bulur. Harita ya da kamera
              üstündeki oklarla hedefe götürür. Ziyaretçi, personel ve yönetim aynı sistemde
              buluşur.
            </span>
          </p>
        </div>
      </section>

      <section id="isler" className="anchor border-t border-white/10 bg-bg pb-20 md:pb-28">
        <div className="container">
          <MetaRow index="03" label="Ne işe yarar" />
          <h2 className="mt-12 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Dört iş, <span className="ghost">tek sistem</span>
          </h2>
          <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {ykyer.jobs.map((job) => (
              <article key={job.n} className="bg-bg p-6">
                <p className="text-sm tracking-[0.16em] text-muted">{job.n}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{job.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{job.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="alanlar" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="04" label="Kullanım alanları" />
          <h2 className="mt-12 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Nerede durur
          </h2>
          <div className="mt-12 grid gap-px bg-line-ink sm:grid-cols-2">
            {ykyer.places.map((place) => (
              <article key={place.title} className="bg-paper p-6 md:p-8">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{place.title}</h3>
                <p className="mt-2 text-ink/65">{place.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-ink/70">{ykyer.placesNote}</p>
        </div>
      </section>

      <section id="kullanim" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="05" label="Kullanım" />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
              {ykyer.flow.title}
            </h2>
            <p className="text-paper/70 lg:text-right">{ykyer.flow.lead}</p>
          </div>
          <ol className="mt-12 divide-y divide-white/12 border-y border-white/12">
            {ykyer.flow.steps.map((step) => (
              <li key={step.n} className="grid gap-3 py-6 md:grid-cols-[4.5rem_0.6fr_1.4fr] md:items-baseline">
                <span className="text-sm tracking-[0.16em] text-muted">{step.n}</span>
                <h3 className="text-xl font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="text-paper/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="roller" className="anchor border-t border-white/10 bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="06" label="Roller" />
          <h2 className="mt-12 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Kim ne görür
          </h2>
          <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {ykyer.roles.map((role) => (
              <article key={role.title} className="bg-bg p-6">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{role.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-paper/75">{ykyer.rolesNote}</p>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="07" label="YKYer" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.08] font-medium tracking-[-0.04em]">
            Ziyaretçi yolunu bulur.
            <br />
            Personel işine gider.
            <br />
            <span className="ghost">Yönetim görür.</span>
          </h2>
          <p className="mt-8 text-lg text-ink/70">{ykyer.closing.pilot}</p>
          <Link href="/iletisim" className="pill mt-10 border-ink bg-ink text-paper hover:bg-black">
            Pilotu konuşalım
          </Link>
        </div>
      </section>
    </>
  );
}
