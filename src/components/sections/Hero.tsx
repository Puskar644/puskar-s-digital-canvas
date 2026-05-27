import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = "Puskar".split("");
  const title2 = "Thapa Magar".split("");

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32">
      {/* background */}
      <div className="grid-bg absolute inset-0 opacity-60 mask-fade-b" />
      <div className="absolute left-1/2 top-1/3 -z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-foreground/[0.05] blur-3xl pulse-glow" />
      <div className="float-slow absolute right-10 top-40 h-40 w-40 rounded-full border border-foreground/10" />
      <div className="float-slow absolute bottom-32 left-10 h-24 w-24 rounded-full bg-foreground/[0.04] blur-xl" />

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="glass mb-8 flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          Available for collaboration — 2026
        </motion.div>

        <h1 className="font-display text-[16vw] font-bold leading-[0.85] tracking-tighter sm:text-[10vw] lg:text-[9rem]">
          <span className="block overflow-hidden">
            {title.map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1 + i * 0.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden italic font-light text-muted-foreground">
            {title2.map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.35 + i * 0.04, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.9 }}
          className="mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          BCA Student · Aspiring Software Developer · Java Enthusiast — crafting cinematic, minimal interfaces from Kathmandu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute inset-x-0 bottom-8 flex items-end justify-between px-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:px-12"
      >
        <span className="hidden sm:block">N 27.7172° · E 85.3240°</span>
        <span className="flex items-center gap-2">
          Scroll
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>↓</motion.span>
        </span>
        <span className="hidden sm:block">v1 · 2026</span>
      </motion.div>
    </section>
  );
}
