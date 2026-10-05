import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";
import { Drift, ScrollChecker, ScrollStage } from "@/components/site/ScrollMotion";
import { StoreBadges } from "@/components/site/StoreBadges";
import { projects } from "@/content/site";
import { tafys } from "@/content/tafys";
import { ybai } from "@/content/yakin-bogaz-ai";
import { ykyer } from "@/content/ykyer";

export default function Home() {
  return (
    <>
      <ScrollStage className="relative z-20 overflow-hidden bg-bg pt-28 pb-16 md:min-h-[calc(100svh-4.25rem)] md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
            maskImage: "radial-gradient(ellipse at 70% 30%, black 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div className="container relative flex h-full flex-col">
          <Drift shift={20} arrive delay={0.05}>
            <p className="kicker">Teknoloji ekosistemi</p>
          </Drift>
          <Drift axis="down" shift={92} arrive delay={0.1}>
            <p className="metal mt-5 text-[clamp(3.4rem,11vw,8.4rem)] leading-[0.86] font-semibold tracking-[-0.06em]">
              YAKIN
              <br />
              BOĞAZ
            </p>
          </Drift>
          <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Drift axis="down" shift={44} arrive delay={0.16}>
              <h1 className="max-w-xl text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.12] font-medium tracking-[-0.035em]">
                Bağlı teknoloji <span className="ghost">ekosistemi</span>
              </h1>
            </Drift>
            <Drift shift={52} arrive delay={0.2}>
              <p className="max-w-md leading-relaxed text-paper/75">
                Üç ürün, tek ekosistem. YakınBoğazAI kurum verisini dışarı çıkarmadan konuşturur.
                YKYer kapalı alanda konum ve yön verir. TAFYS ulaşımda planlar, uygular ve izler.
              </p>
            </Drift>
          </div>
          <Drift shift={28} arrive delay={0.24} className="mt-12">
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#ekosistem" className="link-arrow">
                Ürünleri gör
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/projeler" className="text-sm tracking-[0.14em] text-muted uppercase">
                Tüm projeler
              </Link>
            </div>
          </Drift>
        </div>
      </ScrollStage>

      <ScrollChecker />

      <section id="ekosistem" className="anchor overflow-x-clip bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <Drift shift={22}>
            <MetaRow index="01" label="Ekosistem" />
          </Drift>
          <Drift axis="down" shift={64}>
            <h2 className="mt-12 max-w-4xl text-[clamp(1.9rem,4vw,3.3rem)] leading-[1.08] font-medium tracking-[-0.04em]">
              Yakın Boğaz, dağınık ürünleri{" "}
              <span className="underline decoration-1 underline-offset-[0.14em]">tek sistem</span>{" "}
              olarak kurar.
            </h2>
          </Drift>
          <div className="mt-14 divide-y divide-line-ink border-y border-line-ink">
            {projects.map((project, index) => (
              <Drift key={project.href} shift={30 + index * 8}>
                <Link
                  href={project.href}
                  className="grid items-center gap-3 py-6 md:grid-cols-[4rem_0.7fr_1.3fr_auto] md:gap-6"
                >
                  <span className="text-sm tracking-[0.16em] text-ink/40">0{index + 1}</span>
                  <span className="text-2xl font-medium tracking-[-0.03em]">{project.name}</span>
                  <span className="text-ink/60">{project.summary}</span>
                  <ArrowUpRight size={18} />
                </Link>
              </Drift>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-bg py-20 md:py-28">
        <div className="container">
          <Drift shift={20}>
            <MetaRow index="02" label={ybai.name} />
          </Drift>
          <Drift shift={26}>
            <p className="kicker mt-10">{ybai.category}</p>
          </Drift>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Drift axis="down" shift={68}>
              <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.06] font-medium tracking-[-0.04em]">
                {ybai.headline}
              </h2>
            </Drift>
            <Drift shift={42}>
              <p className="leading-relaxed text-paper/70">{ybai.lead}</p>
            </Drift>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {ybai.solution.pairs.map((pair, index) => (
              <Drift
                as="li"
                key={pair.from}
                shift={36 + index * 16}
                className="border border-white/10 bg-bg p-6"
              >
                <p className="text-sm tracking-[0.14em] text-muted uppercase">{pair.from}</p>
                <p className="mt-4 leading-relaxed text-paper/80">{pair.to}</p>
              </Drift>
            ))}
          </ul>
          <Drift shift={24}>
            <p className="mt-8 max-w-2xl text-paper/70">{ybai.solution.promise}</p>
          </Drift>
          <ul className="mt-8 flex flex-wrap gap-2">
            {ybai.modules.map((module, index) => (
              <Drift as="li" key={module.id} shift={16 + (index % 3) * 6}>
                <span className="pill">{module.name}</span>
              </Drift>
            ))}
          </ul>
          <Drift shift={20}>
            <Link href="/projeler/yakin-bogaz-ai" className="link-arrow mt-10">
              Platformu aç
              <ArrowUpRight size={16} />
            </Link>
          </Drift>
        </div>
      </section>

      <section className="overflow-x-clip bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <Drift shift={20}>
            <MetaRow index="03" label={ykyer.name} />
          </Drift>
          <Drift shift={24}>
            <p className="mt-10 text-sm tracking-[0.16em] text-ink/45 uppercase">{ykyer.category}</p>
          </Drift>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Drift axis="down" shift={66}>
              <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.06] font-medium tracking-[-0.04em]">
                {ykyer.headline}
              </h2>
            </Drift>
            <Drift shift={40}>
              <p className="leading-relaxed text-ink/65">{ykyer.lead}</p>
            </Drift>
          </div>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ykyer.jobs.map((job, index) => (
              <Drift as="li" key={job.n} shift={28 + index * 12} className="border border-ink/10 p-5">
                <p className="text-sm tracking-[0.16em] text-ink/40">{job.n}</p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">{job.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{job.text}</p>
              </Drift>
            ))}
          </ul>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ykyer.places.map((place, index) => (
              <Drift as="li" key={place.title} shift={32 + index * 10} className="bg-paper p-5">
                <h3 className="font-medium tracking-[-0.02em]">{place.title}</h3>
                <p className="mt-2 text-sm text-ink/55">{place.text}</p>
              </Drift>
            ))}
          </ul>
          <Drift shift={32}>
            <p className="mt-8 text-lg leading-snug font-medium tracking-[-0.03em]">
              {ykyer.closing.lines.join(" ")}
            </p>
          </Drift>
          <Drift shift={18}>
            <Link href="/projeler/ykyer" className="link-arrow mt-8">
              YKYer’i aç
              <ArrowUpRight size={16} />
            </Link>
          </Drift>
        </div>
      </section>

      <section className="overflow-x-clip bg-bg py-20 md:py-28">
        <div className="container">
          <Drift shift={20}>
            <img
              src="/tafys/logo.png"
              alt="TAFYS"
              className="mb-8 h-12 w-auto brightness-0 invert"
            />
            <MetaRow index="04" label={tafys.name} />
          </Drift>
          <Drift shift={24}>
            <p className="kicker mt-10">{tafys.kicker}</p>
          </Drift>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Drift axis="down" shift={70}>
              <h2 className="text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.06] font-medium tracking-[-0.04em]">
                {tafys.headline} <span className="ghost">{tafys.lead}</span>
              </h2>
            </Drift>
            <Drift shift={40}>
              <p className="leading-relaxed text-paper/70">{tafys.surfaces.text}</p>
            </Drift>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {tafys.surfaces.items.map((item, index) => (
              <Drift
                as="li"
                key={item.title}
                shift={34 + index * 16}
                className="border border-white/10 p-6"
              >
                <p className="text-sm tracking-[0.14em] text-muted uppercase">{item.tag}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{item.text}</p>
                <StoreBadges
                  name={`TAFYS ${item.title}`}
                  appStore={item.appStore}
                  playStore={item.playStore}
                  onDark
                />
              </Drift>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {tafys.audience.lines.map((line, index) => (
              <Drift as="li" key={line} shift={14 + (index % 4) * 5}>
                <span className="pill">{line}</span>
              </Drift>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tafys.chips.map((chip, index) => (
              <Drift as="li" key={chip} shift={18 + index * 6}>
                <span className="pill pill-solid">{chip}</span>
              </Drift>
            ))}
          </ul>
          <Drift shift={20}>
            <Link href="/projeler/tafys" className="link-arrow mt-10">
              Platformu aç
              <ArrowUpRight size={16} />
            </Link>
          </Drift>
        </div>
      </section>
    </>
  );
}
