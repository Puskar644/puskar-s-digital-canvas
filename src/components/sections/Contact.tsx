import { useState, type FormEvent } from "react";
import { Reveal } from "../Reveal";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:puskarthapamagar29@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 sm:py-40">
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.04] blur-3xl pulse-glow" />

      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
        {/* Left */}
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            Contact
          </p>
          <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Let's build something{" "}
            <span className="italic font-light text-muted-foreground">quiet</span>{" "}
            and beautiful.
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Open to collaborations, internships, and learning opportunities. Reach out — I respond within a day.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a
                href="mailto:puskarthapamagar29@gmail.com"
                className="group inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-foreground"
                data-hover
              >
                <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.6} />
                puskarthapamagar29@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-foreground/80">
              <MapPin className="h-4 w-4 text-muted-foreground" strokeWidth={1.6} />
              Kathmandu, Nepal
            </li>
          </ul>
        </Reveal>

        {/* Right form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="glass relative rounded-[28px] p-7 glow-ring sm:p-9"
          >
            <Field name="name" label="Name" placeholder="Your name" required />
            <Field name="email" label="Email" placeholder="you@domain.com" type="email" required />
            <Field name="message" label="Message" placeholder="Tell me about your idea…" textarea required />

            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-medium text-background transition-transform hover:scale-[1.01] active:scale-[0.99]"
              data-hover
            >
              {sent ? "Opening mail…" : "Send Message"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text", textarea = false, required,
}: {
  name: string; label: string; placeholder: string; type?: string; textarea?: boolean; required?: boolean;
}) {
  const base =
    "w-full rounded-2xl border border-foreground/12 bg-foreground/[0.02] px-5 py-4 text-base text-foreground outline-none placeholder:text-foreground/25 transition-all focus:border-foreground/40 focus:bg-foreground/[0.04]";
  return (
    <label className="group mb-5 block last:mb-0">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-focus-within:text-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={5} required={required} placeholder={placeholder} className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
