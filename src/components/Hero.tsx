"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroWaves } from "./HeroWaves";
import { Logo } from "./Logo";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="ust"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <HeroWaves />

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={item} className="mb-6">
            <Logo height={72} priority />
          </motion.div>

          <motion.p
            variants={item}
            className="display mb-4 text-[clamp(2.8rem,8vw,5.6rem)] font-semibold leading-[0.92] text-ink"
          >
            Yakın Boğaz
          </motion.p>

          <motion.h1
            variants={item}
            className="display mb-5 max-w-2xl text-[clamp(1.55rem,3.4vw,2.35rem)] font-medium leading-[1.15] text-ink"
          >
            Yazılımı yakına getiriyoruz.
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-9 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft md:text-[1.12rem]"
          >
            Ürün, platform ve dijital deneyimleri sakin bir ustalıkla tasarlayıp
            geliştiriyoruz.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href="#iletisim" className="btn btn-primary">
              Projeyi konuşalım
              <ArrowUpRight size={18} strokeWidth={1.75} />
            </a>
            <a href="#hizmetler" className="btn btn-ghost">
              Neler yapıyoruz
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
