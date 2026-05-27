import { useState, type FormEvent } from "react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

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
    <section id="contact" className="relative px-6 py-32 sm:py-40">
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.04] blur-3xl pulse-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">05 — Contact</p>
          <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            Let's build <span className="italic font-light text-muted-foreground">something.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-balance text-muted-foreground">
            Have a project, a question, or just want to say hi? My inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass mx-auto mt-14 grid gap-5 rounded-3xl p-8 text-left glow-ring sm:p-10">
            <Field name="name" label="Name" placeholder="Your name" required />
            <Field name="email" label="Email" placeholder="you@domain.com" type="email" required />
            <Field name="message" label="Message" placeholder="Tell me about your idea…" textarea required />

            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {sent ? "Opening your mail client…" : "Encrypted · Personal"}
              </p>
              <MagneticButton>Send message <span aria-hidden>→</span></MagneticButton>
            </div>
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
  return (
    <label className="group block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors group-focus-within:text-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          className="w-full resize-none border-0 border-b border-foreground/15 bg-transparent pb-3 text-lg outline-none placeholder:text-foreground/25 focus:border-foreground"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full border-0 border-b border-foreground/15 bg-transparent pb-3 text-lg outline-none placeholder:text-foreground/25 focus:border-foreground"
        />
      )}
    </label>
  );
}
