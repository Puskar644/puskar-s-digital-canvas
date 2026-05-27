import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.3 });
  const [hover, setHover] = useState(false);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCoarse(window.matchMedia("(pointer: coarse)").matches);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (coarse) return null;
  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.4 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="h-2 w-2 rounded-full bg-foreground"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 1.6 : 1, opacity: hover ? 0.8 : 0.4 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="h-9 w-9 rounded-full border border-foreground/40"
        />
      </motion.div>
    </>
  );
}
