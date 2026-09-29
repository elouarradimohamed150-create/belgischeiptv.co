"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate(v) {
        node.textContent = prefix + Math.round(v).toLocaleString("nl-BE") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
