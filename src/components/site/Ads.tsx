import { adResults, creatives } from "./data";
import { LogoBadge, MediaPlaceholder, Reveal, SectionHeading } from "./primitives";

export function AdCreatives() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Ad Creative Portfolio"
          title={<>Creative That <span className="text-gradient">Converts</span></>}
          subtitle="Ad creatives designed, produced and tested for performance."
        />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-7 md:overflow-visible md:px-0 lg:grid-cols-3">
          {creatives.map((c, i) => (
            <Reveal
              key={c.type}
              delay={(i % 3) * 90}
              className="w-[74vw] shrink-0 snap-center md:w-auto"
            >
              <figure className="glass glass-hover group h-full rounded-[1.75rem] p-3">
                <div className="overflow-hidden rounded-[1.25rem]">
                  <MediaPlaceholder
                    label="Ad creative · replace"
                    ratio={c.ratio}
                    tint={i + 1}
                    className="transition-transform duration-700 group-hover:scale-[1.06]"
                  >
                    <div className="absolute inset-x-4 top-4 flex items-center gap-2">
                      <LogoBadge name="IT TrendCo" size={30} />
                      <span className="rounded-full bg-black/35 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm">
                        Sponsored
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-10">
                      <div className="h-2 w-2/3 rounded-full bg-white/45" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-white/25" />
                      <div className="mt-4 inline-flex rounded-lg bg-brand px-4 py-2 text-[10px] font-semibold">
                        Learn More
                      </div>
                    </div>
                  </MediaPlaceholder>
                </div>
                <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 px-3 py-4 text-xs">
                  <span className="font-semibold">{c.type}</span>
                  <span className="text-muted-foreground">· {c.platform}</span>
                  <span className="ml-auto rounded-full bg-muted px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {c.objective}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bars({ seed }: { seed: number }) {
  const bars = Array.from({ length: 9 }, (_, i) => 28 + ((i * 17 + seed * 11) % 60));
  return (
    <div className="flex h-16 items-end gap-1.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-sm bg-brand"
          style={{ height: `${h}%`, opacity: 0.45 + i * 0.06 }}
        />
      ))}
    </div>
  );
}

export function AdResults() {
  return (
    <section id="ads" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Paid Advertising Results"
          title={<>Turn Attention Into <span className="text-gradient">Revenue</span></>}
          subtitle="Campaign dashboards from Meta & TikTok Ads — one card per client."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {adResults.map((r, i) => (
            <Reveal key={r.client} delay={(i % 3) * 90}>
              <article className="glass glass-hover h-full rounded-[1.75rem] p-6">
                <div className="flex items-center gap-3">
                  <LogoBadge name={r.client} size={38} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{r.client}</p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Ads Manager · 90 days
                    </p>
                  </div>
                  <span className="ml-auto rounded-full bg-muted px-3 py-1 text-xs font-bold text-gradient">
                    {r.roas}
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-muted p-4">
                  <Bars seed={i} />
                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Conversions over time · replace with screenshot
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Leads", r.leads],
                    ["Conversions", r.conversions],
                    ["Cost / Lead", r.cpl],
                    ["Ad Spend", r.spend],
                    ["Revenue", r.revenue],
                    ["ROAS", r.roas],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        {k}
                      </span>
                      <span className="font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
