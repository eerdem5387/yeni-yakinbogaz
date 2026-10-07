import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Checker, MetaRow } from "@/components/site/Chrome";
import { StoreBadges } from "@/components/site/StoreBadges";
import { tafys } from "@/content/tafys";

export const metadata: Metadata = {
  title: "TAFYS",
  description: `${tafys.headline} ${tafys.lead}`,
};

function Shot({ src, alt, light = false }: { src: string; alt: string; light?: boolean }) {
  return (
    <figure className="mt-14">
      <img
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={`w-full ${light ? "border border-line-ink" : "border border-white/10"}`}
      />
      <figcaption
        className={`mt-3 text-[0.7rem] tracking-[0.14em] uppercase ${light ? "text-ink/45" : "text-muted"}`}
      >
        {alt}
      </figcaption>
    </figure>
  );
}

function DataTable({
  headers,
  rows,
  light = false,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  light?: boolean;
}) {
  const line = light ? "border-line-ink" : "border-white/12";
  const soft = light ? "text-ink/70" : "text-paper/70";

  return (
    <div className={`mt-10 overflow-x-auto border-y ${line}`}>
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead>
          <tr className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            {headers.map((header) => (
              <th key={header} className="py-3 pr-6 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")} className={`border-t ${line}`}>
              {row.map((cell, index) => (
                <td key={cell} className={`py-4 pr-6 align-top ${index === 0 ? "font-medium" : soft}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TafysPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 10%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="container relative">
          <img
            src="/tafys/logo.png"
            alt="TAFYS"
            className="mb-8 h-14 w-auto brightness-0 invert"
          />
          <p className="kicker">{tafys.kicker}</p>
          <h1 className="metal mt-4 text-[clamp(3.4rem,10vw,8rem)] leading-[0.88] font-semibold tracking-[-0.06em]">
            {tafys.name}
          </h1>
          <h2 className="mt-8 max-w-3xl text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.04em]">
            {tafys.headline} <span className="ghost">{tafys.lead}</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {tafys.chips.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <a href="#platform" className="link-arrow mt-12">
            Platformu incele
            <ArrowUpRight size={16} />
          </a>
          <Shot src="/tafys/shots/01-kapak.png" alt="Kurumsal panel özeti" />
        </div>
      </section>

      <Checker />

      <section id="platform" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="01" label="Platform" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.surfaces.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">{tafys.surfaces.text}</p>
          <div className="mt-12 grid gap-px bg-line-ink md:grid-cols-3">
            {tafys.surfaces.items.map((item) => (
              <article key={item.title} className="bg-paper p-6 md:p-8">
                <p className="kicker">{item.tag}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{item.text}</p>
                <StoreBadges
                  name={`TAFYS ${item.title}`}
                  appStore={item.appStore}
                  playStore={item.playStore}
                />
              </article>
            ))}
          </div>
          <Shot src="/tafys/shots/02-uc-yuzey.png" alt="Kurumsal canlı takip" light />
        </div>
      </section>

      <section id="karar" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="02" label="Karar verici" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.audience.title}
          </h2>
          <DataTable headers={tafys.audience.headers} rows={tafys.audience.rows} />
          <p className="kicker mt-10">İş kolları</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tafys.audience.lines.map((line) => (
              <li key={line} className="pill">
                {line}
              </li>
            ))}
          </ul>
          <Shot src="/tafys/shots/03-is-kollari.png" alt="Yetkililer ve sürücüler" />
        </div>
      </section>

      <section id="cekirdek" className="anchor border-t border-white/10 bg-bg pb-20 md:pb-28">
        <div className="container">
          <MetaRow index="03" label="Kurumsal" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.core.title}
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-paper/70">{tafys.core.text}</p>
          <DataTable headers={tafys.core.headers} rows={tafys.core.rows} />
          <Shot src="/tafys/shots/04-kurumsal.png" alt="Araç yönetimi" />
        </div>
      </section>

      <section id="alanlar" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="04" label="İş alanları" />
          <h2 className="mt-12 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Öne çıkan iş alanları
          </h2>
          <div className="mt-12 grid gap-px bg-line-ink sm:grid-cols-2">
            {tafys.areas.map((area) => (
              <article key={area.title} className="bg-paper p-6 md:p-8">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{area.text}</p>
              </article>
            ))}
          </div>
          <Shot src="/tafys/shots/05-is-alanlari.png" alt="Operasyon yönetimi" light />
        </div>
      </section>

      <section id="roller" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="05" label="Roller" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Roller ve vitrinden araç temini
          </h2>
          <DataTable headers={tafys.roles.headers} rows={tafys.roles.rows} />
          <h3 className="mt-14 text-2xl font-medium tracking-[-0.03em]">{tafys.showcase.title}</h3>
          <ol className="mt-6 divide-y divide-white/12 border-y border-white/12">
            {tafys.showcase.steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[3rem_1fr] gap-4 py-4">
                <span className="text-sm tracking-[0.14em] text-muted">0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <Shot src="/tafys/shots/06-vitrin.png" alt="Vitrin" />
        </div>
      </section>

      <section id="surucu" className="anchor border-t border-white/10 bg-bg pb-20 md:pb-28">
        <div className="container">
          <MetaRow index="06" label="Sürücü" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.driver.title}
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-paper/70">{tafys.driver.text}</p>
          <DataTable headers={tafys.driver.headers} rows={tafys.driver.rows} />
          <Shot src="/tafys/shots/07-surucu.png" alt="Okul servisi sürücüleri" />
          <h3 className="mt-16 text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.03em]">
            {tafys.driver.flowTitle}
          </h3>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tafys.driver.flow.map((step, index) => (
              <li key={step.title} className="border border-white/12 p-5">
                <span className="text-xs tracking-[0.16em] text-muted">0{index + 1}</span>
                <h4 className="mt-3 font-medium">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-paper/75">{tafys.driver.flowNote}</p>
          <Shot src="/tafys/shots/08-okul-akisi.png" alt="Okul servisi rotaları" />
        </div>
      </section>

      <section id="yolcu" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="07" label="Yolcu" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.passenger.title}
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">{tafys.passenger.text}</p>
          <DataTable headers={tafys.passenger.headers} rows={tafys.passenger.rows} light />
          <Shot src="/tafys/shots/09-yolcu.png" alt="Müşteri yönetimi" light />
          <h3 className="mt-16 text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.03em]">
            {tafys.passenger.whoTitle}
          </h3>
          <DataTable headers={tafys.passenger.whoHeaders} rows={tafys.passenger.whoRows} light />
          <p className="mt-8 max-w-3xl text-ink/70">{tafys.passenger.note}</p>
          <Shot src="/tafys/shots/10-kim-ne-gorur.png" alt="Okul servisi velileri" light />
        </div>
      </section>

      <section id="uctan-uca" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="08" label="Uçtan uca" />
          <h2 className="mt-12 text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.journey.title}
          </h2>
          <DataTable headers={tafys.journey.headers} rows={tafys.journey.rows} />
          <Shot src="/tafys/shots/11-akis.png" alt="Personel servisi yönetimi" />
        </div>
      </section>

      <section id="moduller" className="anchor border-t border-white/10 bg-bg pb-20 md:pb-28">
        <div className="container">
          <MetaRow index="09" label="Modüller" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.modules.title}
          </h2>
          <p className="mt-6 max-w-2xl text-paper/70">{tafys.modules.text}</p>
          <ul className="mt-10 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {tafys.modules.items.map(([title, text]) => (
              <li key={title} className="bg-bg p-5">
                <h3 className="font-medium tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{text}</p>
              </li>
            ))}
          </ul>
          <Shot src="/tafys/shots/12-moduller.png" alt="Tur ve acente yönetimi" />
        </div>
      </section>

      <section id="altyapi" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="10" label="Altyapı" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {tafys.stack.title}
          </h2>
          <DataTable headers={tafys.stack.headers} rows={tafys.stack.rows} light />
          <p className="mt-8 text-ink/70">{tafys.stack.note}</p>
          <Shot src="/tafys/shots/13-entegrasyon.png" alt="Entegrasyon ayarları" light />
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {tafys.stack.close.map((step, index) => (
              <li key={step.title} className="border border-line-ink p-5">
                <span className="text-xs tracking-[0.16em] text-ink/45">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
              </li>
            ))}
          </ol>
          <Link href="/iletisim" className="pill mt-12 border-ink bg-ink text-paper hover:bg-black">
            Platformu konuşalım
          </Link>
        </div>
      </section>
    </>
  );
}
