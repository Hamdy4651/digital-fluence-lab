import { insights } from "./data";
import { LogoBadge, MediaPlaceholder, Reveal, SectionHeading } from "./primitives";

function Sparkline({ seed = 0 }: { seed?: number }) {
  const pts = Array.from({ length: 12 }, (_, i) => 18 + ((i * 13 + seed * 7) % 34) + i * 2.6);
  const d = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${70 - p}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 72" preserveAspectRatio="none" className="h-20 w-full">
      <defs>
        <linearGradient id={`sg-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.63 0.26 356)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.63 0.26 356)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L 100 72 L 0 72 Z`} fill={`url(#sg-${seed})`} />
      <path d={d} fill="none" stroke="oklch(0.63 0.26 356)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function Organic() {
  return (
    <section id="organic" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Organic Social Media Insights"
          title={<>Organic Reach That <span className="text-gradient">Speaks For Itself</span></>}
          subtitle="Real account insights from campaigns we run — no paid boost behind these numbers."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((it, i) => (
            <Reveal key={it.client} delay={(i % 3) * 90}>
              <article className="glass glass-hover h-full overflow-hidden rounded-[1.75rem] p-3">
                <MediaPlaceholder
                  label="Insights screenshot · replace"
                  ratio="16/11"
                  tint={i + 2}
                  className="rounded-[1.25rem]"
                >
                  <div className="absolute right-3 top-3">
                    <LogoBadge name={it.client} size={38} />
                  </div>
                  <div className="absolute inset-x-4 top-4 max-w-[60%]">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {it.platform} Insights
                    </p>
                    <p className="mt-1 text-2xl font-extrabold">{it.views}</p>
                    <p className="text-[11px] text-muted-foreground">Views · last 90 days</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 opacity-90">
                    <Sparkline seed={i} />
                  </div>
                </MediaPlaceholder>

                <div className="px-3 pb-2 pt-4">
                  <p className="truncate text-sm font-semibold">{it.client}</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    {[
                      ["Reach", it.reach],
                      ["Engagement", it.engagement],
                      ["Growth", it.growth],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl bg-muted px-2 py-2">
                        <p className="text-sm font-bold">{v}</p>
                        <p className="text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                          {k}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
