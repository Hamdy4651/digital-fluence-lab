import { clients } from "./data";
import { Counter, LogoBadge, Reveal, SectionHeading } from "./primitives";

const stats = [
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "M+", label: "Organic Views" },
  { value: 4.6, suffix: "M", decimals: 1, label: "Monthly Reach" },
  { value: 320, suffix: "+", label: "Successful Campaigns" },
];

export function Proof() {
  return (
    <section className="relative px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass grid grid-cols-2 gap-6 rounded-[2rem] p-8 md:grid-cols-4 md:p-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="text-3xl font-extrabold text-gradient md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-sm md:tracking-[0.14em]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <SectionHeading eyebrow="Our Clients" title="Brands That Grow With Us" />
      </div>

      <div className="relative mx-auto max-w-7xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-5">
          {[...clients, ...clients].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="glass glass-hover flex w-56 shrink-0 flex-col items-center gap-3 rounded-[1.75rem] px-5 py-7 text-center"
            >
              <LogoBadge name={c.name} size={64} />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{c.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
