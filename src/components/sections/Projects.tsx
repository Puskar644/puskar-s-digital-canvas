import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const featured = [
  {
    no: "01",
    title: "Ecommerce Website",
    desc: "A responsive multi-page ecommerce experience with product grids, cart UI, and checkout flow.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://puskar29.github.io/ecommerce-website/",
    code: "https://github.com/puskar29/ecommerce-website",
  },
  {
    no: "02",
    title: "Weather App",
    desc: "Real-time weather lookup with clean iconography, dynamic states, and a calm interface.",
    tags: ["JavaScript", "API", "CSS"],
    live: "https://puskar29.github.io/my-weather-app/",
    code: "https://github.com/puskar29/my-weather-app",
  },
  {
    no: "03",
    title: "Currency Converter",
    desc: "Live FX rates between major currencies with instant calculation and a frictionless UI.",
    tags: ["JavaScript", "API"],
    live: "https://puskar29.github.io/currency-converter/",
    code: "https://github.com/puskar29/currency-converter",
  },
  {
    no: "04",
    title: "To-do List App",
    desc: "A fast, distraction-free task manager with local persistence and crisp micro-interactions.",
    tags: ["JavaScript", "LocalStorage"],
    live: "https://puskar29.github.io/to-do-list-app/",
    code: "https://github.com/puskar29/to-do-list-app",
  },
];

const secondary = [
  { title: "Rock Paper Scissors", desc: "Classic game, animated reveal." },
  { title: "Tic Tac Toe", desc: "Two-player grid, win detection." },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            Selected Work
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            Featured <span className="italic font-light text-muted-foreground">projects.</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-muted-foreground">
            A handful of things I've built while learning. Small in scope, but each one taught me something.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <StaggerItem key={p.no}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.015] p-8 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.035] sm:p-10"
                data-hover
              >
                <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-foreground/[0.06] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="mb-12 flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                    {p.no.split("").join(" ")}
                  </span>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    data-hover
                  >
                    <ArrowUpRight className="h-5 w-5" strokeWidth={1.4} />
                  </a>
                </div>

                <h3 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-5 max-w-md text-pretty text-muted-foreground">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/15 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-10">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
                    data-hover
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" strokeWidth={2} />
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
                    data-hover
                  >
                    <Github className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Code
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-20">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Side experiments</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {secondary.map((s) => (
              <div key={s.title} className="glass flex items-center justify-between rounded-2xl p-6 transition-colors hover:bg-foreground/[0.04]" data-hover>
                <div>
                  <h4 className="font-display text-xl font-medium">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">→</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
