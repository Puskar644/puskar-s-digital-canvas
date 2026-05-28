import { Github, Linkedin, Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/puskar29", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/9779800000000", Icon: MessageCircle },
  { label: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
  { label: "Email", href: "mailto:puskarthapamagar29@gmail.com", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-foreground/10 px-6 pt-20 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Puskar Thapa Magar</p>
            <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Still learning. <br />
              <span className="italic font-light text-muted-foreground">Still building.</span>
            </h3>
          </div>

          <div className="md:text-right">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Elsewhere</p>
            <ul className="flex flex-wrap gap-3 md:justify-end">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground hover:text-background"
                    data-hover
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
