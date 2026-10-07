"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type MotionValue,
  type UseScrollOptions,
} from "framer-motion";
import { createContext, useEffect, useRef, useState, type ReactNode } from "react";

const Progress = createContext<MotionValue<number> | null>(null);

const spring = { stiffness: 140, damping: 28, mass: 0.28, restDelta: 0.001 };

type Offset = NonNullable<UseScrollOptions["offset"]>;

export function ScrollStage({
  children,
  className,
  id,
  offset = ["start start", "end start"],
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  offset?: Offset;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const progress = useSpring(scrollYProgress, spring);

  return (
    <Progress.Provider value={progress}>
      <section ref={ref} id={id} className={className}>
        {children}
      </section>
    </Progress.Provider>
  );
}

export function Drift({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  shift?: number;
  axis?: "down" | "right";
  arrive?: boolean;
  delay?: number;
  as?: "div" | "li";
}) {
  if (as === "li") return <li className={className}>{children}</li>;
  if (!className) return children;
  return <div className={className}>{children}</div>;
}

const checkerSteps = [1, 2, 2, 1, 0, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2];

const passingSquares = [
  { col: 1, delay: 0.02 },
  { col: 4, delay: 0.14 },
  { col: 7, delay: 0.05 },
  { col: 9, delay: 0.22 },
  { col: 12, delay: 0.1 },
  { col: 14, delay: 0.28 },
  { col: 3, delay: 0.34 },
  { col: 6, delay: 0.18 },
];

const fallEase = [0.45, 0.05, 0.2, 1] as const;

const fallColumns = checkerSteps
  .map((count, index) => ({
    index,
    delay:
      count > 0
        ? index * 0.025
        : (passingSquares.find((square) => square.col === index)?.delay ?? 0.2),
  }))
  .filter(
    (column) =>
      checkerSteps[column.index] > 0 ||
      passingSquares.some((square) => square.col === column.index),
  );

export function ScrollChecker() {
  return (
    <>
      <HeaderFall />
      <div className="relative z-[36] overflow-hidden bg-bg" data-fall-band aria-hidden>
        {passingSquares.map((square) => (
          <motion.div
            key={square.col}
            className="fall-passer absolute bottom-0 aspect-square bg-paper"
            style={{
              left: `${(square.col / checkerSteps.length) * 100}%`,
              width: `${100 / checkerSteps.length}%`,
            }}
            initial={{ y: "-100vh" }}
            animate={{ y: "160%" }}
            transition={{ duration: 1.25, delay: square.delay, ease: fallEase }}
          />
        ))}
        <div className="relative flex items-end">
          {checkerSteps.map((count, index) => (
            <div key={index} className="flex flex-1 flex-col justify-end">
              {Array.from({ length: count }).map((_, cell) => (
                <LandedSquare key={cell} index={index} cell={cell} count={count} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function fallTiming(index: number, cell: number) {
  const delaySlot = (index * 17 + cell * 11) % 29;
  const durationSlot = (index * 7 + cell * 13) % 17;
  return {
    delay: (delaySlot / 29) * 1.05,
    duration: 0.92 + (durationSlot / 17) * 0.7,
  };
}

function previousBandBottom(band: HTMLElement) {
  const section = band.closest("section");
  const previous = section?.previousElementSibling;
  const source =
    previous?.getAttribute("data-fall-band") != null
      ? previous
      : previous?.querySelector("[data-fall-band]");
  return (source ?? band).getBoundingClientRect().bottom;
}

export function SectionFall({ tone, depth }: { tone: "light" | "dark"; depth: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [drop, setDrop] = useState<{ id: number; offsets: number[] } | null>(null);
  const square = tone === "light" ? "bg-ink" : "bg-paper";

  useEffect(() => {
    const band = ref.current;
    const section = band?.closest("section");
    if (!band || !section) return;

    const cells = () => [...band.querySelectorAll<HTMLElement>("[data-fall-cell]")];
    const offsetsFor = (landed: boolean) =>
      cells().map((cell) => {
        if (landed) return 0;
        const box = cell.getBoundingClientRect();
        return previousBandBottom(band) - box.bottom - 1;
      });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = section.getBoundingClientRect().top;
    if (reduced || top < window.innerHeight * 0.72) {
      setDrop({ id: 1, offsets: offsetsFor(true) });
    }

    let lastY = window.scrollY;
    let armed = top > window.innerHeight * 0.72;

    const onScroll = () => {
      const y = window.scrollY;
      const down = y > lastY + 0.5;
      lastY = y;
      const seam = section.getBoundingClientRect().top;
      if (!down) {
        if (seam > window.innerHeight * 0.9) armed = true;
        return;
      }
      if (armed && seam <= window.innerHeight * 0.82) {
        armed = false;
        setDrop((current) => ({
          id: (current?.id ?? 0) + 1,
          offsets: offsetsFor(false),
        }));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let cellIndex = 0;

  return (
    <div
      ref={ref}
      className="pointer-events-none relative"
      style={{ zIndex: depth }}
      data-fall-band
      aria-hidden
    >
      <div className="flex items-end">
        {checkerSteps.map((count, index) => (
          <div key={index} className="flex flex-1 flex-col justify-end">
            {Array.from({ length: count }).map((_, cell) => {
              const slot = cellIndex;
              cellIndex += 1;
              const from = drop?.offsets[slot] ?? 0;
              const timing = fallTiming(index, cell);
              return (
                <div key={cell} className="relative aspect-square" data-fall-cell>
                  {drop ? (
                    <FallSquare
                      key={drop.id}
                      from={from}
                      delay={from === 0 ? 0 : timing.delay}
                      duration={timing.duration}
                      color={square}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function FallSquare({
  from,
  delay,
  duration,
  color,
}: {
  from: number;
  delay: number;
  duration: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() === true;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || from === 0) return;
    const anim = el.animate(
      [{ transform: `translateY(${from}px)` }, { transform: "translateY(0px)" }],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: "cubic-bezier(0.45, 0.05, 0.2, 1)",
        fill: "both",
      },
    );
    return () => anim.cancel();
  }, [from, delay, duration, reduce]);

  return (
    <div
      ref={ref}
      className={`fall-square absolute inset-0 ${color}`}
      style={reduce || from === 0 ? undefined : { transform: `translateY(${from}px)` }}
    />
  );
}

function HeaderFall() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-[4.25rem] overflow-hidden" aria-hidden>
      {fallColumns.map((column) => (
        <motion.div
          key={column.index}
          className="fall-passer absolute top-0 aspect-square bg-paper"
          style={{
            left: `${(column.index / checkerSteps.length) * 100}%`,
            width: `${100 / checkerSteps.length}%`,
          }}
          initial={{ y: "-120%" }}
          animate={{ y: "100vh" }}
          transition={{ duration: 1.25, delay: column.delay, ease: fallEase }}
        />
      ))}
    </div>
  );
}

function LandedSquare({ index, cell, count }: { index: number; cell: number; count: number }) {
  return (
    <motion.div
      className="fall-square aspect-square bg-paper"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.25,
        delay: index * 0.025 + (count - 1 - cell) * 0.05,
        ease: fallEase,
      }}
    />
  );
}
