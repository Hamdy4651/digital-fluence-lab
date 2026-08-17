import logo from "@/assets/logo.jpg.asset.json";
import { CtaButton, MediaPlaceholder, Particles, PlayButton, Reveal } from "./primitives";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="IT-TrendCo logo"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/20"
          />
          <span className="truncate text-sm font-bold tracking-tight sm:text-base">
            IT-TrendCo
          </span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
            <a className="transition-colors hover:text-foreground" href="#process">Process</a>
            <a className="transition-colors hover:text-foreground" href="#organic">Organic</a>
            <a className="transition-colors hover:text-foreground" href="#ads">Advertising</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm"
          >
            Free Strategy Call
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="surface-glow relative overflow-hidden px-4 pb-24 pt-36 md:pt-44">
      <Particles />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Social Media Growth Agency · Germany
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
              Turn Your Social Media Into A{" "}
              <span className="text-gradient">Sales Machine</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We create, manage and scale your social media presence — from professional content
              production and organic growth to performance advertising.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaButton href="#contact">Book A Free Strategy Call</CtaButton>
              <CtaButton href="#work" variant="ghost">
                See Our Results
              </CtaButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="glass rounded-[2rem] p-4">
              <MediaPlaceholder label="Hero Reel · replace" ratio="4/5" tint={1}>
                <div className="absolute inset-0 grid place-items-center">
                  <PlayButton size="lg" />
                </div>
                <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">LIVE</span>
                  <span className="rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">
                    Reels · 4K
                  </span>
                </div>
              </MediaPlaceholder>
            </div>

            <div
              className="glass absolute -left-6 top-16 hidden w-40 rounded-2xl p-3 sm:block"
              style={{ animation: "float-soft 7s ease-in-out infinite" }}
            >
              <MediaPlaceholder label="Clip" ratio="9/16" tint={2} className="rounded-xl" />
            </div>
            <div
              className="glass absolute -right-4 bottom-10 hidden w-44 rounded-2xl p-4 sm:block"
              style={{ animation: "float-soft 9s ease-in-out 1s infinite" }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Weekly Reach
              </p>
              <p className="mt-1 text-2xl font-bold text-foreground">2.4M</p>
              <div className="mt-3 flex h-10 items-end gap-1">
                {[30, 55, 40, 72, 60, 88, 100].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-brand"
                    style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
