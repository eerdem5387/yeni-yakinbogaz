"use client";

import { Code2, MessageSquareText, PenLine, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Dinle & çerçevele",
    text: "Hedefi, kısıtları ve başarı ölçütünü birlikte netleştiririz.",
    icon: MessageSquareText,
  },
  {
    title: "Tasarla & doğrula",
    text: "Akışları hızlı prototiple test eder, yönü erken kilitleriz.",
    icon: PenLine,
  },
  {
    title: "İnşa et & rafine et",
    text: "Kaliteli kod, düzenli teslimat ve sürekli iyileştirme ile ilerleriz.",
    icon: Code2,
  },
];

export function Approach() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="yaklasim" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(112, 141, 145, 0.22), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="section-label mb-4">Yaklaşım</p>
            <h2 className="display max-w-md text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1]">
              Boğaz gibi: iki yakayı birleştiren bir süreç.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Strateji ile mühendisliği birbirinden ayırmadan çalışırız. Her adım,
              bir sonrakini daha güvenli kılar.
            </p>
          </Reveal>

          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.1}>
                  <motion.div
                    className="group grid grid-cols-[auto_1fr] gap-5 border-t border-line py-7"
                    whileHover={reduceMotion ? undefined : { x: 6 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-water-deep/8 text-water-mid transition-colors group-hover:bg-water-deep group-hover:text-[#e8f1f3]">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="display mb-2 text-xl font-semibold">{step.title}</h3>
                      <p className="text-ink-soft">{step.text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
