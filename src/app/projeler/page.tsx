import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MetaRow } from "@/components/site/Chrome";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projeler",
  description: "Yakın Boğaz teknoloji ekosistemindeki ürünler.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container">
        <MetaRow index="01" label="Projeler" />
        <h1 className="mt-12 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.045em]">
          Tek ekosistem, <span className="ghost">ayrı ürünler.</span>
        </h1>
        <ul className="mt-14">
          {projects.map((project) => (
            <li key={project.href} className="border-t border-white/12 last:border-b">
              <Link
                href={project.href}
                className="group grid items-center gap-4 py-8 md:grid-cols-[1fr_1.2fr_auto]"
              >
                <span className="text-[clamp(1.8rem,3vw,2.8rem)] font-medium tracking-[-0.04em]">
                  {project.name}
                </span>
                <span className="text-paper/65">{project.summary}</span>
                <ArrowUpRight className="transition-transform group-hover:translate-x-1" size={20} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
