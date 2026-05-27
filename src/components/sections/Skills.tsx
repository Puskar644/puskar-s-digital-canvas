import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 92, tag: "Markup" },
  { name: "CSS", level: 88, tag: "Styling" },
  { name: "JavaScript", level: 78, tag: "Language" },
  { name: "React", level: 70, tag: "Framework" },
  { name: "Tailwind CSS", level: 82, tag: "Styling" },
  { name: "Java", level: 65, tag: "Language" },
  { name: "C", level: 60, tag: "Language" },
];

const stack = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Java", "C", "Git", "GitHub", "VS Code", "Figma", "Vite"];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 sm:py-40">
      <div className="absolute left-1/2 top-1/2 -z-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">02 — Capabilities</p>
          <h2 className="mb-16 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            Tools of the <span className="italic font-light text-muted-foreground">trade.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <StaggerItem key={s.name}>
              <div className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-foreground/[0.05] glow-ring" data-hover>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-medium">{s.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.tag}</span>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-px flex-1 overflow-hidden bg-foreground/10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: s.level / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      className="absolute inset-0 origin-left bg-foreground"
                    />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">{s.level}</span>
                </div>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-foreground/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-20">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">03 — Stack</p>
          <div className="flex flex-wrap gap-3">
            {stack.map((t) => (
              <motion.span
                key={t}
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="glass cursor-default rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-colors hover:bg-foreground hover:text-background"
                data-hover
              >
                {t}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
