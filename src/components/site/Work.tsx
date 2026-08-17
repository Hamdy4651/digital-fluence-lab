import { ugc, viralVideos } from "./data";
import { LogoBadge, MediaPlaceholder, PlayButton, Reveal, SectionHeading } from "./primitives";

export function ViralWork() {
  return (
    <section id="work" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Viral Results"
          title={<>Content That Gets <span className="text-gradient">People Talking</span></>}
          subtitle="Short-form content produced, edited and published by our team."
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-7 md:overflow-visible md:px-0 lg:grid-cols-3">
          {viralVideos.map((v, i) => (
            <Reveal
              key={v.title}
              delay={(i % 3) * 90}
              className="w-[78vw] shrink-0 snap-center sm:w-[60vw] md:w-auto"
            >
              <article className="glass glass-hover group h-full overflow-hidden rounded-[1.75rem] p-3">
                <MediaPlaceholder label={`Video ${i + 1} · replace`} ratio="9/16" tint={i}>
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayButton />
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
                    {v.platform}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                    <p className="text-sm font-semibold">{v.title}</p>
                  </div>
                </MediaPlaceholder>
                <div className="grid grid-cols-3 gap-2 px-2 py-4 text-center">
                  {[
                    ["Views", v.views],
                    ["Likes", v.likes],
                    ["Shares", v.shares],
                  ].map(([k, val]) => (
                    <div key={k}>
                      <p className="text-base font-bold md:text-lg">{val}</p>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {k}
                      </p>
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

export function Ugc() {
  return (
    <section className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client UGC"
          title={<>What Our Clients <span className="text-gradient">Say About Us</span></>}
        />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0">
          {ugc.map((u, i) => (
            <Reveal
              key={u.name}
              delay={i * 100}
              className="w-[78vw] shrink-0 snap-center md:w-auto"
            >
              <article className="glass glass-hover group h-full rounded-[1.75rem] p-3">
                <MediaPlaceholder label="Testimonial video · replace" ratio="4/5" tint={i + 1}>
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayButton />
                  </div>
                </MediaPlaceholder>
                <div className="flex items-center gap-3 px-3 py-4">
                  <LogoBadge name={u.company} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{u.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {u.role} · {u.company}
                    </p>
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
