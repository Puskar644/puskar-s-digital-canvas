import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[120] flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-strong glow-ring" : "border border-transparent"
        }`}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 text-sm font-medium tracking-tight" data-hover>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-foreground/30 font-display text-[11px]">P</span>
          <span className="hidden sm:inline">Puskar</span>
          <span className="text-muted-foreground hidden sm:inline">/ Magar</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                data-hover
                className="relative rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${active === l.id ? "text-foreground" : ""}`}>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          data-hover
          className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Let's talk
        </button>

        <button onClick={() => setOpen((s) => !s)} className="md:hidden" aria-label="Menu" data-hover>
          <div className="flex flex-col gap-1.5">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block h-px w-6 bg-foreground" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-px w-6 bg-foreground" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block h-px w-6 bg-foreground" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute left-4 right-4 top-20 rounded-3xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left font-display text-2xl ${
                      active === l.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
