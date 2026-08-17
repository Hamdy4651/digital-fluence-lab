import { process } from "./data";
import { Reveal, SectionHeading } from "./primitives";

export function Process() {
  return (
    <section id="process" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How We Grow Your Social Media"
          title={<>How We Turn Social Media <span className="text-gradient">Into Growth</span></>}
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-0 md:top-9 md:h-px md:w-full md:bg-gradient-to-r"
          />
          <div className="grid gap-5 md:grid-cols-5 md:gap-4">
            {process.map((p, i) => (
              <Reveal key={p.no} delay={i * 90}>
                <div className="glass glass-hover h-full rounded-[1.5rem] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">
                      {p.no}
                    </span>
                    <h3 className="truncate text-sm font-bold uppercase tracking-[0.18em]">
                      {p.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
