import logo from "@/assets/logo.jpg.asset.json";
import { services, testimonials } from "./data";
import { CtaButton, LogoBadge, Particles, Reveal, SectionHeading } from "./primitives";

export function Services() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Handle"
          title={<>Everything Your <span className="text-gradient">Social Media Needs</span></>}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 5) * 70}>
              <div className="glass glass-hover h-full rounded-[1.25rem] p-5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted By Businesses <span className="text-gradient">That Want To Grow</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote className="glass glass-hover h-full rounded-[1.75rem] p-7">
                <div className="flex items-center gap-3">
                  <LogoBadge name={t.company} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="m12 17.3 6.2 3.7-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.8-1.6 7z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="surface-glow relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border p-10 text-center md:p-16">
        <Particles />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
          style={{ background: "var(--gradient-brand)" }}
        />
        <Reveal className="relative">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.12] sm:text-4xl md:text-5xl">
            Your Next Viral Video Could Be The Beginning Of Your{" "}
            <span className="text-gradient">Next Growth Story.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Let's build a social media presence that gets attention, builds trust and generates
            customers.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <CtaButton href="#contact">Book A Free Strategy Call</CtaButton>
            <CtaButton href="#work" variant="ghost">
              See Our Work
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="IT-TrendCo logo"
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-white/20"
          />
          <span className="truncate text-sm font-semibold">IT-TrendCo · Social Media</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} IT-TrendCo</p>
      </div>
    </footer>
  );
}
