import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.random() * 14 + 6;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 400);
      }
      setPct(Math.floor(n));
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-background"
        >
          <div className="grid-bg absolute inset-0 opacity-30 mask-fade-b" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative font-display text-[12vw] font-semibold leading-none tracking-tight sm:text-[5vw]"
          >
            <span className="shimmer-text">Puskar</span>
          </motion.div>
          <div className="relative mt-10 flex w-64 items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <div className="relative h-px flex-1 overflow-hidden bg-foreground/10">
              <motion.div
                animate={{ width: `${pct}%` }}
                transition={{ ease: "linear" }}
                className="absolute inset-y-0 left-0 bg-foreground"
              />
            </div>
            <span className="tabular-nums">{pct.toString().padStart(3, "0")}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
