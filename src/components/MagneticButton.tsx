import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({ children, href, onClick, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handle = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const reset = () => { x.set(0); y.set(0); };

  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors ${styles} ${className}`}
      data-hover
    >
      {children}
    </motion.div>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return <button onClick={onClick}>{inner}</button>;
}
