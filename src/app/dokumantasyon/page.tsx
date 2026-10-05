import type { Metadata } from "next";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";
import { ybai } from "@/content/yakin-bogaz-ai";

export const metadata: Metadata = {
  title: "Dokümantasyon",
  description: "YakınBoğazAI modüllerinin kısa başvuru haritası.",
};

export default function DocsPage() {
  return (
    <section className="bg-paper pt-28 pb-20 text-ink md:pt-32 md:pb-28">
      <div className="container">
        <MetaRow index="01" label="Dokümantasyon" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.045em]">
            YakınBoğazAI <span className="ghost">modül haritası</span>
          </h1>
          <p className="leading-relaxed text-ink/70">
            Platformun uçtan uca akışı: veri nereden alınır, nasıl dokümana döner, nerede aranır ve
            nasıl yanıt olur. Ayrıntı her modülün kendi bölümündedir.
          </p>
        </div>
        <ul className="mt-14 divide-y divide-line-ink border-y border-line-ink">
          <li>
            <Link
              href="/projeler/yakin-bogaz-ai"
              className="grid gap-2 py-6 md:grid-cols-[6rem_1fr] md:items-baseline"
            >
              <span className="text-sm tracking-[0.16em] text-ink/40">00</span>
              <span>
                <span className="block text-2xl font-medium tracking-[-0.03em]">Platform özeti</span>
                <span className="mt-1 block text-ink/60">{ybai.lead}</span>
              </span>
            </Link>
          </li>
          {ybai.modules.map((module) => (
            <li key={module.id}>
              <Link
                href={`/projeler/yakin-bogaz-ai#${module.id}`}
                className="grid gap-2 py-6 md:grid-cols-[6rem_1fr] md:items-baseline"
              >
                <span className="text-sm tracking-[0.16em] text-ink/40">{module.n}</span>
                <span>
                  <span className="block text-2xl font-medium tracking-[-0.03em]">{module.name}</span>
                  <span className="mt-1 block text-ink/60">{module.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
