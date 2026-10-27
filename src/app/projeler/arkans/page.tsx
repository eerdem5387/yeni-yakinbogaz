import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Checker, MetaRow } from "@/components/site/Chrome";
import { arkans } from "@/content/arkans";

export const metadata: Metadata = {
  title: "ARKANS",
  description: arkans.lead,
};

export default function ArkansPage() {
  return (
    <div className="bg-bg" style={{ "--bg": "#0a1222" } as React.CSSProperties}>
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
          <p className="kicker">{arkans.kicker}</p>
          <h1 className="metal mt-4 text-[clamp(3.4rem,10vw,8rem)] leading-[0.88] font-semibold tracking-[-0.06em]">
            {arkans.name}
          </h1>
          <div className="mt-10 max-w-xl">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.12] font-medium tracking-[-0.035em]">
              {arkans.headline}
            </h2>
            <p className="mt-5 leading-relaxed text-paper/75">{arkans.lead}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {arkans.chips.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 border border-white/12 p-3 sm:p-4">
            <svg
              viewBox="0 0 1000 400"
              className="h-auto w-full"
              role="img"
              aria-label="Hastane ikinci kat planı. Koridordaki noktadan ameliyathane girişine giden yol."
            >
              <path
                d="M20 108 H408 V78 H520 V108 H498 V16 H548 V36 H780 V56 H548 V108 H980 V368 H20 Z"
                fill="rgba(255,255,255,0.035)"
              />
              <rect x="20" y="108" width="288" height="164" fill="rgba(255,255,255,0.03)" />
              <rect x="332" y="108" width="216" height="164" fill="rgba(255,255,255,0.018)" />
              <rect x="776" y="154" width="204" height="118" fill="rgba(255,255,255,0.04)" />
              <rect x="20" y="296" width="960" height="26" fill="rgba(255,255,255,0.055)" />

              <path
                d="M20 230 V108 H408 V78 H520 V108 H498 V16 H548 V36 H780 V56 H548 V108 H980 V368 H20 V322"
                fill="none"
                stroke="rgba(255,255,255,0.82)"
                strokeWidth="1.2"
              />
              <path d="M498 16 V56 M548 16 V36 M612 36 V56 M676 36 V56 M740 36 V56 M466 78 V108" stroke="rgba(255,255,255,0.45)" strokeWidth="0.9" />

              <path
                d="M76 108 V230 M132 108 V272 M188 108 V272 M244 108 V230 M308 108 V272 M20 136 H244 M20 164 H308 M20 192 H244 M20 230 H76 M108 230 H244 M20 248 H308 M20 272 H960"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.85"
              />
              <path
                d="M332 108 V272 M386 108 V230 M440 108 V272 M494 108 V230 M548 108 V272 M332 150 H548 M332 192 H494 M332 234 H548"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.85"
              />
              <path
                d="M572 108 V154 M622 108 V154 M672 108 V154 M722 108 V154 M776 108 V368 M826 108 V154 M876 108 V154 M926 108 V154 M572 154 H776 M628 154 V272 M686 154 V234 M744 154 V272 M572 196 H628 M572 234 H776 M826 196 V368 M876 196 V328 M926 196 V368 M776 196 H980 M776 236 H980 M776 276 H980 M20 296 H162 M274 296 H960 M20 322 H980 M76 322 V368 M132 322 V368 M188 322 V368 M244 322 V368 M308 322 V368 M386 322 V368 M464 322 V368 M542 322 V368 M620 322 V368 M698 322 V368 M826 328 V368 M876 328 V368 M926 328 V368"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.85"
              />
              <path d="M162 296 H274 V322 H162 Z" fill="none" stroke="rgba(255,255,255,0.58)" strokeWidth="1" />
              <path d="M218 296 V322" stroke="rgba(255,255,255,0.4)" strokeWidth="0.85" />

              <g stroke="rgba(255,255,255,0.42)" strokeWidth="0.9" fill="none">
                <path d="M354 138 h9 M354 142 h9" />
                <path d="M458 180 h9 M458 184 h9" />
                <path d="M700 172 h9 M700 176 h9" />
                <path d="M128 282 l7 7 M132 282 l7 7" />
              </g>

              <g fill="rgba(255,255,255,0.42)" fontSize="7.5" fontFamily="inherit" textAnchor="middle">
                <text x="464" y="96">WC</text>
                <text x="218" y="313">WC</text>
                <text x="94" y="154">POLİ</text>
                <text x="218" y="154">LAB</text>
                <text x="440" y="176">OFİS</text>
                <text x="674" y="136">DEPO</text>
                <text x="878" y="216">AMELİYAT</text>
                <text x="878" y="350">POSTOP</text>
              </g>
              <text
                x="560"
                y="290"
                fill="rgba(255,255,255,0.5)"
                fontSize="8"
                fontFamily="inherit"
                letterSpacing="0.7"
                textAnchor="end"
              >
                AMELİYATHANE GİRİŞİ
              </text>

              <path
                d="M66 230 H396 V308 H660"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path d="M176 230 l-6.5-4 v8 z M286 230 l-6.5-4 v8 z M396 272 l4-6.5 h-8 z M516 308 l-6.5-4 v8 z" fill="white" />
              <circle cx="66" cy="230" r="11" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
              <circle cx="66" cy="230" r="4.6" fill="white" />
              <rect x="650" y="298" width="16" height="16" fill="none" stroke="white" strokeWidth="1.6" />
              <path d="M658 302.4 v7 M654.5 306 h7" stroke="white" strokeWidth="1.2" />
            </svg>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              {arkans.legend.map((item) => (
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
            {arkans.problem.title}
          </h2>
          <div className="mt-14 divide-y divide-line-ink border-y border-line-ink">
            {arkans.problem.reasons.map((reason) => (
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
            {arkans.platform.title}
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/75">
            <span className="font-medium text-paper underline decoration-1 underline-offset-[0.16em]">
              {arkans.name}
            </span>{" "}
            {arkans.platform.text}
          </p>
        </div>
      </section>

      <section id="isler" className="anchor border-t border-white/10 bg-bg pb-20 md:pb-28">
        <div className="container">
          <MetaRow index="03" label="Ne işe yarar" />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {arkans.jobsTitle}
          </h2>
          <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {arkans.jobs.map((job) => (
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
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {arkans.placesTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">{arkans.placesLead}</p>
          <div className="mt-12 grid gap-px bg-line-ink sm:grid-cols-2">
            {arkans.places.map((place) => (
              <article key={place.title} className="bg-paper p-6 md:p-8">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{place.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{place.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-ink/70">{arkans.placesNote}</p>
        </div>
      </section>

      <section id="kullanim" className="anchor bg-bg py-20 md:py-28">
        <div className="container">
          <MetaRow index="05" label="Kullanım" />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
              {arkans.flow.title}
            </h2>
            <p className="text-paper/70 lg:text-right">{arkans.flow.lead}</p>
          </div>
          <ol className="mt-12 divide-y divide-white/12 border-y border-white/12">
            {arkans.flow.steps.map((step) => (
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
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            {arkans.rolesTitle}
          </h2>
          <div className="mt-12 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {arkans.roles.map((role) => (
              <article key={role.title} className="bg-bg p-6">
                <h3 className="text-xl font-medium tracking-[-0.03em]">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{role.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-paper/75">{arkans.rolesNote}</p>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="container">
          <MetaRow index="07" label={arkans.name} />
          <h2 className="mt-12 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] font-medium tracking-[-0.04em]">
            {arkans.closing.title}
          </h2>
          <div className="mt-8 max-w-3xl space-y-3 text-lg leading-relaxed text-ink/70">
            {arkans.closing.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-8 text-lg text-ink/70">{arkans.closing.pilot}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/iletisim" className="pill border-ink bg-ink text-paper hover:bg-black">
              Pilotu konuşalım
            </Link>
            <Link href="/projeler/arkans/gizlilik-politikasi" className="link-arrow">
              Gizlilik politikası
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
