"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "framer-motion";
import { createContext, useContext, useRef, type ReactNode, type RefObject } from "react";

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
  shift = 36,
  axis = "right",
  arrive = false,
  delay = 0,
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
  const parent = useContext(Progress);
  const divRef = useRef<HTMLDivElement>(null);
  const liRef = useRef<HTMLLIElement>(null);
  const local = useScroll({
    target: parent ? undefined : ((as === "li" ? liRef : divRef) as RefObject<HTMLElement | null>),
    offset: ["start 0.92", "end 0.08"],
  });
  const raw = parent ?? local.scrollYProgress;
  const sprung = useSpring(raw, spring);
  const progress = parent ? raw : sprung;
  const along = useTransform(
    progress,
    arrive ? [0, 1] : [0, 0.38, 1],
    arrive ? [0, shift * 0.55] : [-shift, 0, shift * 0.4],
  );
  const scrollStyle = axis === "down" ? { y: along } : { x: along };
  const entrance = arrive
    ? {
        initial: axis === "down" ? { y: -shift } : { x: -shift },
        animate: axis === "down" ? { y: 0 } : { x: 0 },
        transition: { duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  if (as === "li") {
    return (
      <motion.li
        ref={parent ? undefined : liRef}
        className={`scroll-drift ${className ?? ""}`}
        style={scrollStyle}
        {...entrance}
      >
        {children}
      </motion.li>
    );
  }

  if (arrive) {
    return (
      <motion.div className={`scroll-drift ${className ?? ""}`} style={scrollStyle}>
        <motion.div className="scroll-drift" {...entrance}>
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={parent ? undefined : divRef}
      className={`scroll-drift ${className ?? ""}`}
      style={scrollStyle}
    >
      {children}
    </motion.div>
  );
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

export function ScrollChecker() {
  return (
    <>
      <HeaderFall />
      <div className="relative z-0 overflow-hidden bg-bg" aria-hidden>
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

function HeaderFall() {
  const columns = checkerSteps
    .map((count, index) => ({
      index,
      delay: count > 0 ? index * 0.025 : (passingSquares.find((square) => square.col === index)?.delay ?? 0),
    }))
    .filter((column) => checkerSteps[column.index] > 0 || passingSquares.some((square) => square.col === column.index));

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-[4.25rem] overflow-hidden" aria-hidden>
      {columns.map((column) => (
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
