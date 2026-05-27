const socials = [
  { label: "GitHub", href: "https://github.com/puskar29" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:puskarthapamagar29@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 px-6 pt-20 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Puskar Thapa Magar</p>
            <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Designing the <br />
              <span className="italic font-light text-muted-foreground">next interface.</span>
            </h3>
          </div>
          <ul className="flex flex-col gap-3 md:items-end">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-display text-lg text-muted-foreground transition-colors hover:text-foreground"
                  data-hover
                >
                  <span className="relative">
                    {s.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Puskar Thapa Magar</span>
          <span>Crafted in Kathmandu · Built with React & Motion</span>
          <span>v1.0 · 2026</span>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 select-none">
        <div className="font-display text-[28vw] font-bold leading-none tracking-tighter text-foreground/[0.04]">
          PUSKAR
        </div>
      </div>
    </footer>
  );
}
