import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";
import { documentsByHref } from "@/content/docs";
import { projects } from "@/content/site";
import { ybai } from "@/content/yakin-bogaz-ai";

export const metadata: Metadata = {
  title: "Dokümantasyon",
  description: "Yakın Boğaz ürünlerinin paylaşılmış dokümanları.",
};

export default function DocsPage() {
  return (
    <section className="bg-paper pt-28 pb-20 text-ink md:pt-32 md:pb-28">
      <div className="container">
        <MetaRow index="01" label="Dokümantasyon" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h1 className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.045em]">
            Ürün <span className="ghost">dokümantasyonu</span>
          </h1>
          <p className="leading-relaxed text-ink/70">
            Her ürünün paylaşılmış dokümanları kendi alanında durur. Kartlar yeni sekmede açılır.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((project) => {
            const documents = documentsByHref[project.href] ?? [];

            return (
              <section key={project.href}>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line-ink pb-4">
                  <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.04em]">
                    {project.name}
                  </h2>
                  <Link href={project.href} className="link-arrow text-sm">
                    Ürün sayfası
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                {documents.length > 0 ? (
                  <ul className="mt-6 flex gap-4 overflow-x-auto pb-1">
                    {documents.map((document) => (
                      <li key={document.href} className="w-[min(100%,22rem)] shrink-0">
                        <a
                          href={document.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full min-h-44 flex-col border border-line-ink p-6 transition-colors hover:border-ink"
                        >
                          <span className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] text-ink/40 uppercase">
                            {document.format}
                            <ArrowUpRight
                              size={16}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                          <span className="mt-8 block text-xl font-medium tracking-[-0.03em]">
                            {document.title}
                          </span>
                          <span className="mt-2 block text-sm leading-relaxed text-ink/60">
                            {document.description}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 border border-dashed border-line-ink px-6 py-8 text-ink/55">
                    Bu ürün için henüz dokümantasyon paylaşılmamıştır.
                  </p>
                )}

                {project.href === "/projeler/yakin-bogaz-ai" ? (
                  <div className="mt-10">
                    <h3 className="text-sm font-semibold tracking-[0.16em] text-ink/40 uppercase">
                      Modül haritası
                    </h3>
                    <ul className="mt-4 divide-y divide-line-ink border-y border-line-ink">
                      <li>
                        <Link
                          href="/projeler/yakin-bogaz-ai"
                          className="grid gap-2 py-5 md:grid-cols-[6rem_1fr] md:items-baseline"
                        >
                          <span className="text-sm tracking-[0.16em] text-ink/40">00</span>
                          <span>
                            <span className="block text-xl font-medium tracking-[-0.03em]">
                              Platform özeti
                            </span>
                            <span className="mt-1 block text-ink/60">{ybai.lead}</span>
                          </span>
                        </Link>
                      </li>
                      {ybai.modules.map((module) => (
                        <li key={module.id}>
                          <Link
                            href={`/projeler/yakin-bogaz-ai#${module.id}`}
                            className="grid gap-2 py-5 md:grid-cols-[6rem_1fr] md:items-baseline"
                          >
                            <span className="text-sm tracking-[0.16em] text-ink/40">{module.n}</span>
                            <span>
                              <span className="block text-xl font-medium tracking-[-0.03em]">
                                {module.name}
                              </span>
                              <span className="mt-1 block text-ink/60">{module.title}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
