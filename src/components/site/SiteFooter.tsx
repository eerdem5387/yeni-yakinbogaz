import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { contact, nav, projects } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bg">
      <div className="container relative z-10 grid gap-12 py-16 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
        <div>
          <p className="kicker mb-3">İletişim</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.04em]"
          >
            {contact.email}
          </a>
          <p className="mt-4 text-muted">{contact.place}</p>
          <Link href="/iletisim" className="link-arrow mt-8">
            Yazın
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div>
          <p className="kicker mb-4">Menü</p>
          <ul className="space-y-2 text-lg">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kicker mb-4">Projeler</p>
          <ul className="space-y-2 text-lg">
            {projects.map((project) => (
              <li key={project.href}>
                <Link href={project.href} className="text-paper/80 hover:text-paper">
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none px-4 pb-2 text-center text-[clamp(3.2rem,14vw,9rem)] leading-none font-semibold tracking-[-0.06em] text-white/[0.06]"
      >
        YAKIN BOĞAZ
      </p>
      <div className="container flex justify-between border-t border-white/10 py-4 text-xs tracking-[0.12em] text-muted uppercase">
        <span>© {new Date().getFullYear()} Yakın Boğaz</span>
        <span>Teknoloji ekosistemi</span>
      </div>
    </footer>
  );
}
