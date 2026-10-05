import type { Metadata } from "next";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Biz Kimiz",
  description:
    "Yakın Boğaz, yapay zekâ ve dijital ürünleri tek bir teknoloji ekosisteminde geliştiren stüdyo.",
};

export default function AboutPage() {
  return (
    <section className="bg-paper pt-28 pb-20 text-ink md:pt-32 md:pb-28">
      <div className="container">
        <MetaRow index="01" label="Biz kimiz" />
        <h1 className="mt-12 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] font-medium tracking-[-0.045em]">
          Teknolojiyi yan yana kuruyoruz.{" "}
          <span className="ghost">Ürünler ayrı durmaz; aynı altyapıda konuşur.</span>
        </h1>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-ink/75">
            Yakın Boğaz, yazılımı işin yakınına getiren bir stüdyo. Platformları, yapay zekâ
            katmanlarını ve dijital ürünleri birbirinden kopuk projeler olarak değil, tek bir
            ekosistemin parçaları olarak tasarlıyoruz.
          </p>
          <p className="leading-relaxed text-ink/70">
            Aynı marka, aynı dil, aynı disiplin. Büyük başlıkta duran söz, en küçük ekranda da
            geçerlidir: sakin, açık ve mühendislik disipliniyle kurulmuş.
          </p>
        </div>
        <ul className="mt-16 divide-y divide-line-ink border-y border-line-ink">
          {projects.map((project) => (
            <li key={project.href} className="flex flex-wrap items-baseline justify-between gap-3 py-5">
              <Link href={project.href} className="text-2xl font-medium tracking-[-0.03em]">
                {project.name}
              </Link>
              <span className="text-sm text-ink/55">{project.summary}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
