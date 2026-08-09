import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.84v1.98h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V23h-4V8.5z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="iletisim" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(243, 247, 248, 0.2), rgba(127, 180, 191, 0.16) 55%, rgba(231, 238, 241, 1))",
        }}
        aria-hidden
      />

      <div className="container relative">
        <Reveal>
          <p className="section-label mb-4">İletişim</p>
          <h2 className="display max-w-2xl text-[clamp(1.9rem,3.8vw,3rem)] font-semibold leading-[1.08]">
            Bir sonraki adımı birlikte çizelim.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            Kısa bir brieften başlarız. İhtiyacınızı dinler, kapsamı netleştirir
            ve size uygun bir yol haritası öneririz.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="mailto:info@yakinbogaz.com.tr" className="btn btn-primary">
              <Mail size={18} strokeWidth={1.75} />
              info@yakinbogaz.com.tr
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
