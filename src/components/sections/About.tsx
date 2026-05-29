import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { motion } from "framer-motion";
import portrait from "@/assets/puskar-portrait.png";

const timeline = [
  { year: "2024", title: "Started BCA", body: "Enrolled at Tribhuvan University. First lines of code in C and HTML." },
  { year: "2025", title: "Frontend Foundations", body: "Built static sites with HTML, CSS, JavaScript. Discovered the joy of interaction design." },
  { year: "2026", title: "Modern Web", body: "Diving into React, Tailwind, and Java — shipping projects with motion and depth." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">01 — About</p>
              <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
                A student today.<br />
                <span className="italic font-light text-muted-foreground">A craftsman tomorrow.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Portrait + intro */}
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16">
          <Reveal>
            <div className="group relative mx-auto w-full max-w-sm">
              {/* ambient glow */}
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-foreground/[0.06] blur-3xl pulse-glow" />
              {/* frame */}
              <div className="glass relative overflow-hidden rounded-[28px] glow-ring">
                <motion.img
                  src={portrait}
                  alt="Puskar Thapa Magar — BCA student and aspiring software developer"
                  loading="lazy"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* gradient veil */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                {/* corner tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                  <span>Puskar Thapa Magar</span>
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
                    </span>
                    KTM
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground">4th-semester BCA student</span> at Tribhuvan University, deeply curious about the craft behind beautifully engineered software. I'm currently focused on the JVM ecosystem and the modern frontend — learning Java in depth while building responsive, animated interfaces with React and Tailwind.
            </p>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              My goal is simple: ship products that feel inevitable. Quiet, fast, considered — the kind you notice only because something feels right.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className="font-display text-3xl font-semibold">4th</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Semester · BCA</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">Java</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Core Focus</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">React</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Frontend Craft</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <StaggerGroup className="relative mt-20 space-y-4">
          <div className="pointer-events-none absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
          {timeline.map((t) => (
            <StaggerItem key={t.year}>
              <div className="glass relative flex gap-5 rounded-2xl p-5 transition-colors hover:bg-foreground/[0.04]" data-hover>
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/30 bg-background font-mono text-[10px]">
                  {t.year.slice(2)}
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{t.year}</p>
                  <h3 className="mt-1 font-display text-xl font-medium">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
