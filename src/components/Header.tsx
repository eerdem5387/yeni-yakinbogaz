"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yaklasim", label: "Yaklaşım" },
  { href: "#isler", label: "İşler" },
  { href: "#iletisim", label: "İletişim" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setCompact(value > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      animate={{
        backgroundColor: compact ? "rgba(231, 238, 241, 0.82)" : "rgba(231, 238, 241, 0)",
        backdropFilter: compact ? "blur(14px)" : "blur(0px)",
        borderBottomColor: compact ? "rgba(16, 34, 39, 0.1)" : "rgba(16, 34, 39, 0)",
      }}
      transition={{ duration: 0.35 }}
      style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
    >
      <div className="container flex items-center justify-between py-3.5">
        <a href="#ust" className="flex items-center gap-3">
          <Logo height={34} priority />
          <span className="display text-[1.1rem] font-semibold tracking-[-0.04em]">
            Yakın Boğaz
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#iletisim" className="btn btn-primary text-sm">
          Projeyi konuşalım
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </a>
      </div>
    </motion.header>
  );
}
