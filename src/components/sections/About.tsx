import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";

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

        <div className="grid gap-16 md:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground">4th-semester BCA student</span> at Tribhuvan University, deeply curious about the craft behind beautifully engineered software. I'm currently focused on the JVM ecosystem and the modern frontend — learning Java in depth while building responsive, animated interfaces with React and Tailwind.
            </p>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              My goal is simple: ship products that feel inevitable. Quiet, fast, considered — the kind you notice only because something feels right.
            </p>
          </Reveal>

          <StaggerGroup className="relative space-y-4">
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
      </div>
    </section>
  );
}
