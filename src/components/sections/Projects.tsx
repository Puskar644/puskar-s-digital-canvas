import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { motion } from "framer-motion";

const featured = [
  {
    no: "01",
    title: "Ecommerce Website",
    desc: "A modern online storefront with cart interactions, product grid, and clean checkout flow.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://puskar29.github.io/ecommerce-website/",
    code: "https://github.com/puskar29/ecommerce-website",
  },
  {
    no: "02",
    title: "Weather App",
    desc: "Real-time weather lookup with location search, dynamic states and a minimal forecast UI.",
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
    title: "To-Do List App",
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
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">04 — Selected Work</p>
          <h2 className="mb-16 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            Things I've <span className="italic font-light text-muted-foreground">shipped.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <StaggerItem key={p.no}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 glow-ring transition-colors hover:bg-foreground/[0.04]"
                data-hover
              >
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-foreground/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="mb-8 flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{p.no} / 04</span>
                  <div className="flex gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-foreground/15 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* faux preview */}
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] to-transparent">
                  <div className="grid-bg absolute inset-0 opacity-50" />
                  <div className="absolute inset-x-6 bottom-6 font-display text-3xl font-semibold tracking-tight text-foreground/80">
                    {p.title.split(" ")[0]}
                    <div className="text-sm font-mono font-normal text-muted-foreground mt-1">{new URL(p.live).hostname}</div>
                  </div>
                  <div className="absolute right-4 top-4 flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-foreground/30" />
                    <div className="h-2 w-2 rounded-full bg-foreground/20" />
                    <div className="h-2 w-2 rounded-full bg-foreground/10" />
                  </div>
                </div>

                <h3 className="font-display text-3xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-pretty text-muted-foreground">{p.desc}</p>

                <div className="mt-auto flex items-center gap-3 pt-8">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
                    data-hover
                  >
                    Live Demo
                    <span className="transition-transform group-hover/btn:translate-x-0.5">↗</span>
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/5"
                    data-hover
                  >
                    GitHub
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
