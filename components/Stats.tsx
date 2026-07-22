import FadeIn from "./FadeIn";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "200ms", label: "API Response Target" },
  { value: "60%", label: "Dev Time Reduced" },
];

export default function Stats() {
  return (
    <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="px-8 md:px-16 lg:px-24 py-8 max-w-5xl">
        <FadeIn className="flex items-center gap-12 md:gap-24 flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span
                style={{
                  fontFamily: "var(--font-instrument), Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--text)",
                  fontWeight: 400,
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] uppercase"
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  color: "var(--muted)",
                  letterSpacing: "0.14em",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
