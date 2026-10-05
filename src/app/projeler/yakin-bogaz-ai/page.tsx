import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Checker, MetaRow } from "@/components/site/Chrome";
import { ybai } from "@/content/yakin-bogaz-ai";

export const metadata: Metadata = {
  title: "YakınBoğazAI",
  description: ybai.lead,
};

export default function YakinBogazAiPage() {
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
          <p className="kicker">{ybai.kicker}</p>
          <h1 className="metal mt-4 max-w-5xl text-[clamp(3.2rem,9vw,7.4rem)] leading-[0.9] font-semibold tracking-[-0.055em]">
            {ybai.name}
          </h1>
          <p className="mt-5 max-w-xl text-sm tracking-[0.14em] text-muted uppercase">
            {ybai.category}
          </p>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <h2 className="max-w-3xl text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.12] font-medium tracking-[-0.035em]">
              Verinizi <span className="underline decoration-1 underline-offset-[0.14em]">dışarı çıkarmadan</span>{" "}
              konuşan <span className="ghost">kurumsal yapay zekâ</span>
            </h2>
            <p className="max-w-md text-[1.02rem] leading-relaxed text-paper/75">{ybai.lead}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {ybai.promises.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-end justify-between gap-6">
            <a href="#sorun" className="link-arrow">
              Sistemi incele
              <ArrowUpRight size={16} />
            </a>
            <p className="max-w-xs text-right text-sm text-muted">
              Dil modeli, bilgi tabanı ve analiz motoru kurumun kendi altyapısında çalışır.
            </p>
          </div>
        </div>
      </section>

      <Checker />

      <section id="sorun" className="anchor bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="01" label="Sorun" />
          <h2 className="mt-12 max-w-4xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Kurumlar veri üretiyor, <span className="ghost">ama bu veriyi kullanamıyor</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{ybai.problem.text}</p>
          <ul className="mt-10 flex flex-wrap gap-2">
            {ybai.problem.sources.map((source) => (
              <li key={source} className="pill pill-ink">
                {source}
              </li>
            ))}
            <li className="pill pill-ink">ve daha fazlası</li>
          </ul>
          <p className="mt-8 text-sm tracking-[0.08em] text-ink/50 uppercase">{ybai.problem.closer}</p>

          <div className="mt-14 divide-y divide-line-ink border-y border-line-ink">
            {ybai.problem.reasons.map((reason) => (
              <article key={reason.n} className="grid gap-4 py-8 md:grid-cols-[5rem_1fr] md:gap-8 md:py-10">
                <p className="text-sm tracking-[0.16em] text-ink/45">{reason.n}</p>
                <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">{reason.title}</h3>
                  <p className="leading-relaxed text-ink/70">{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cozum" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="02" label="Çözüm" />
          <h2 className="mt-12 max-w-4xl text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            YakınBoğazAI <span className="ghost">bu üç sorunu birlikte çözer</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{ybai.solution.text}</p>
          <div className="mt-14 grid gap-px bg-white/12 md:grid-cols-3">
            {ybai.solution.pairs.map((pair) => (
              <article key={pair.from} className="bg-bg p-6 md:p-8">
                <p className="kicker">{pair.from}</p>
                <p className="mt-5 text-xl leading-snug font-medium tracking-[-0.03em]">{pair.to}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-[clamp(1.35rem,2.4vw,1.9rem)] leading-snug font-medium tracking-[-0.03em]">
            <span className="underline decoration-1 underline-offset-[0.16em]">
              Verinin tek bir satırı bile
            </span>{" "}
            <span className="ghost">dışarıdaki bir yapay zekâ servisine gönderilmez.</span>
          </p>
        </div>
      </section>

      <section id="moduller" className="anchor border-t border-white/10 bg-bg py-20 md:py-24">
        <div className="container">
          <MetaRow index="03" label="Nasıl çalışır" />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
              {ybai.modulesIntro.title}
            </h2>
            <p className="text-paper/70 lg:text-right">{ybai.modulesIntro.text}</p>
          </div>
          <ol className="mt-12 divide-y divide-white/12 border-y border-white/12">
            {ybai.modules.map((module) => (
              <li key={module.id}>
                <a
                  href={`#${module.id}`}
                  className="grid items-center gap-3 py-5 md:grid-cols-[4.5rem_0.7fr_1.3fr_auto] md:gap-6"
                >
                  <span className="text-sm tracking-[0.16em] text-muted">{module.n}</span>
                  <span className="text-xl font-medium tracking-[-0.03em]">{module.name}</span>
                  <span className="text-paper/60">{module.title}</span>
                  <ArrowUpRight size={16} className="hidden md:block" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {ybai.modules.map((module, index) => {
        const light = index % 2 === 0;
        return (
          <section
            key={module.id}
            id={module.id}
            className={`anchor py-16 md:py-24 ${light ? "bg-paper text-ink" : "bg-bg text-paper"}`}
          >
            <div className="container">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="kicker">
                    {module.n} · {module.name}
                  </p>
                  <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.08] font-medium tracking-[-0.04em]">
                    {module.title}
                  </h2>
                  <p className={`mt-5 leading-relaxed ${light ? "text-ink/70" : "text-paper/70"}`}>
                    {module.lead}
                  </p>
                </div>
                <div>
                  {"sources" in module && module.sources ? (
                    <ul className="mb-6 flex flex-wrap gap-2">
                      {module.sources.map((source) => (
                        <li key={source} className={light ? "pill pill-ink" : "pill"}>
                          {source}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <ol className={`divide-y ${light ? "divide-line-ink border-line-ink" : "divide-white/12 border-white/12"} border-y`}>
                    {module.points.map((point, pointIndex) => (
                      <li key={point.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4">
                        <span className="text-sm text-muted">
                          {String(pointIndex + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-medium tracking-[-0.02em]">{point.title}</h3>
                          <p className={`mt-1 text-sm leading-relaxed ${light ? "text-ink/65" : "text-paper/65"}`}>
                            {point.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  {"extras" in module && module.extras ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {module.extras.map((extra) => (
                        <article
                          key={extra.title}
                          className={`border p-4 ${light ? "border-line-ink" : "border-white/12"}`}
                        >
                          <h3 className="font-medium">{extra.title}</h3>
                          <p className={`mt-2 text-sm leading-relaxed ${light ? "text-ink/65" : "text-paper/65"}`}>
                            {extra.text}
                          </p>
                        </article>
                      ))}
                    </div>
                  ) : null}
                  {"pipeline" in module && module.pipeline ? (
                    <ol className="mt-6 grid gap-2 sm:grid-cols-4">
                      {module.pipeline.map((step, stepIndex) => (
                        <li
                          key={step}
                          className={`border p-3 text-sm ${light ? "border-line-ink" : "border-white/12"}`}
                        >
                          <span className="mb-2 block text-xs tracking-[0.14em] text-muted">
                            0{stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  ) : null}
                  {"note" in module && module.note ? (
                    <p
                      className={`mt-6 border-l px-4 text-sm leading-relaxed ${
                        light ? "border-ink text-ink/75" : "border-paper text-paper/75"
                      }`}
                    >
                      {module.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section id="senaryo" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="04" label="Senaryo" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.3rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {ybai.scenario.title}
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/70">{ybai.scenario.setup}</p>
          <blockquote className="mt-10 max-w-4xl border-y border-white/12 py-8 text-[clamp(1.4rem,2.8vw,2.15rem)] leading-snug font-medium tracking-[-0.03em]">
            “{ybai.scenario.question}”
          </blockquote>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ybai.scenario.steps.map((step, index) => (
              <li key={step.title} className="border border-white/12 p-4">
                <span className="text-xs tracking-[0.16em] text-muted">0{index + 1}</span>
                <h3 className="mt-3 font-medium tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-paper/80">{ybai.scenario.closer}</p>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="05" label="Sonuç" />
          <h2 className="mt-12 max-w-4xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Dağınık veriden <span className="ghost">tek bir akıllı bilgi kaynağına</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{ybai.closing.text}</p>
          <div className="mt-12 grid gap-px bg-line-ink md:grid-cols-3">
            {ybai.outcomes.map((outcome) => (
              <article key={outcome.title} className="bg-paper p-6 md:p-8">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{outcome.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/65">{outcome.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link href="/iletisim" className="pill border-ink bg-ink text-paper hover:bg-black">
              Projeyi konuşalım
            </Link>
            <Link href="/dokumantasyon" className="link-arrow">
              Dokümantasyon
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
