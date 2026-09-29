import type { ReactNode } from "react";

/**
 * CSS-based reveal. Content animates in on load and ALWAYS ends visible —
 * no JS/IntersectionObserver dependency, so sections can never render blank.
 * Respects prefers-reduced-motion via globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  dir?: string;
  once?: boolean;
}) {
  return (
    <div
      className={`reveal ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string; gap?: number }) {
  return <div className={`stagger ${className ?? ""}`}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  dir?: string;
}) {
  return <div className={`reveal ${className ?? ""}`}>{children}</div>;
}
