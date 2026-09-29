"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "none";

const offset: Record<Dir, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[dir] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  dir = "up",
}: {
  children: ReactNode;
  className?: string;
  dir?: Dir;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[dir] },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
