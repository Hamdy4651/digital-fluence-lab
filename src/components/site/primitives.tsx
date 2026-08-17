import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function CtaButton({
  children,
  variant = "primary",
  href = "#contact",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-brand text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-1 hover:brightness-110"
      : "glass text-foreground hover:-translate-y-1 hover:border-primary/50";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Particles() {
  const dots = Array.from({ length: 34 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 61) % 100,
    size: (i % 3) + 1.5,
    delay: (i % 9) * 0.7,
    dur: 6 + (i % 5) * 2,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animation: `pulse-glow ${d.dur}s ease-in-out ${d.delay}s infinite, float-soft ${d.dur * 2}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function PlayButton({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-11 w-11" : "h-14 w-14";
  return (
    <span
      className={`${dim} relative grid place-items-center rounded-full bg-white/12 backdrop-blur-md ring-1 ring-white/40 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/80`}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
      <svg viewBox="0 0 24 24" className="relative h-1/3 w-1/3 fill-current text-foreground">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

/** Replaceable media placeholder. Swap `src` in later with a real asset. */
export function MediaPlaceholder({
  label,
  ratio = "9/16",
  tint = 0,
  className = "",
  children,
}: {
  label: string;
  ratio?: string;
  tint?: number;
  className?: string;
  children?: ReactNode;
}) {
  const tints = [
    "from-[oklch(0.31_0.19_313)] via-[oklch(0.24_0.12_290)] to-[oklch(0.19_0.11_277)]",
    "from-[oklch(0.45_0.22_340)] via-[oklch(0.26_0.14_300)] to-[oklch(0.19_0.11_277)]",
    "from-[oklch(0.4_0.16_259)] via-[oklch(0.25_0.12_285)] to-[oklch(0.19_0.11_277)]",
    "from-[oklch(0.38_0.2_330)] via-[oklch(0.23_0.13_295)] to-[oklch(0.19_0.11_277)]",
  ];
  return (
    <div
      data-media-placeholder={label}
      style={{ aspectRatio: ratio }}
      className={`relative w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${tints[tint % 4]} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, oklch(1 0 0 / 22%), transparent 45%), radial-gradient(circle at 80% 80%, oklch(0.63 0.26 356 / 35%), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 40%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 40%) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      {children}
      <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/35 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

export function LogoBadge({ name, size = 44 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span
      style={{ width: size, height: size }}
      className="grid shrink-0 place-items-center rounded-full bg-brand text-[0.7rem] font-bold uppercase tracking-wider text-primary-foreground ring-2 ring-white/25"
    >
      {initials}
    </span>
  );
}
