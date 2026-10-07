"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { contact, nav, projects } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-bg/80 backdrop-blur-md">
        <div className="container flex h-[4.25rem] items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Logo height={28} priority />
            <span className="min-w-0">
              <span className="block text-[0.95rem] font-semibold tracking-[-0.03em]">
                Yakın Boğaz
              </span>
              <span className="hidden text-[0.68rem] tracking-[0.08em] text-muted sm:block">
                Teknoloji ekosistemi
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
            {nav.map((item) =>
              item.href === "/projeler" ? (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    className={`pill border-transparent px-3 ${
                      isCurrent(pathname, "/projeler") ? "text-paper" : "text-muted"
                    }`}
                    aria-expanded={projectsOpen}
                    onClick={() => setProjectsOpen((open) => !open)}
                  >
                    Projeler
                    <ChevronDown size={14} strokeWidth={1.75} />
                  </button>
                  {projectsOpen ? (
                    <div className="absolute top-[calc(100%+0.4rem)] left-0 min-w-56 border border-white/12 bg-bg p-2 shadow-2xl">
                      {projects.map((project) => (
                        <Link
                          key={project.href}
                          href={project.href}
                          className="block px-3 py-2.5 text-sm text-paper/80 transition-colors hover:bg-white/6 hover:text-paper"
                        >
                          {project.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`pill border-transparent px-3 ${
                    isCurrent(pathname, item.href) ? "text-paper" : "text-muted"
                  }`}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="sr-only">Menüyü aç</span>
              <span className="flex w-4 flex-col gap-1.5" aria-hidden>
                <span className="h-px bg-paper" />
                <span className="h-px bg-paper" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          className="fixed inset-0 z-50 overflow-y-auto bg-bg text-paper"
        >
          <div className="container flex min-h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Logo height={28} />
                <span>
                  <span className="block font-semibold tracking-[-0.03em]">Yakın Boğaz</span>
                  <span className="text-xs text-muted">Akıllı ürünler, tek ekosistem</span>
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/25"
                onClick={() => setMenuOpen(false)}
              >
                <span className="sr-only">Menüyü kapat</span>
                <span className="relative block size-4" aria-hidden>
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 rotate-45 bg-paper" />
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 -rotate-45 bg-paper" />
                </span>
              </button>
            </div>

            <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="kicker mb-6">Ekosistem</p>
                <ul>
                  {projects.map((project) => {
                    const active = isCurrent(pathname, project.href);
                    return (
                      <li key={project.href}>
                        <Link
                          href={project.href}
                          className={`group flex items-center justify-between gap-4 py-2 text-[clamp(2.1rem,5vw,4.2rem)] leading-none font-medium tracking-[-0.045em] ${
                            active ? "bg-paper px-4 text-ink" : "text-paper/55 hover:text-paper"
                          }`}
                        >
                          {project.name}
                          <ArrowUpRight
                            className={active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                            size={28}
                            strokeWidth={1.4}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="kicker mb-6">Menü</p>
                <ul className="space-y-3 text-[clamp(1.6rem,3vw,2.4rem)] tracking-[-0.04em]">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={
                          isCurrent(pathname, item.href)
                            ? "underline decoration-1 underline-offset-8"
                            : "text-paper/55 hover:text-paper"
                        }
                        aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 border-t border-white/12 pt-6 text-sm sm:grid-cols-3">
              <div>
                <p className="kicker mb-2">E-posta</p>
                <a className="text-lg" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="kicker mb-2">Konum</p>
                <p className="text-lg">{contact.place}</p>
              </div>
              <div className="sm:text-right">
                <Link href="/projeler/yakin-bogaz-ai" className="link-arrow">
                  YakınBoğazAI’ı incele
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
