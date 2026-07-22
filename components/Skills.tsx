import FadeIn from "./FadeIn";

const stack = [
  { label: "Core Stack", items: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"] },
  { label: "Cloud & DevOps", items: ["AWS Lambda", "ECS", "RDS", "S3", "Docker", "Kubernetes", "CI/CD"] },
  { label: "Frontend", items: ["React", "Next.js", "TailwindCSS", "MUI"] },
  { label: "Architecture", items: ["Distributed Systems", "Event-Driven", "Microservices"], separator: true },
];

const principles = [
  "API response times below 200ms through systematic profiling and caching",
  "Spec-Driven Development with GitHub Spec Kit for team-wide alignment",
  "End-to-end test coverage increasing pre-deployment bug detection by 60%",
];

export default function Skills() {
  return (
    <section
      id="about"
      className="px-8 md:px-16 lg:px-24 py-24 md:py-32 relative z-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left */}
        <FadeIn>
          <p
            className="text-[10px] uppercase mb-3"
            style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.16em" }}
          >
            Engineering Philosophy
          </p>
          <h2
            className="mb-8 leading-snug"
            style={{ fontFamily: "var(--font-geist), system-ui, sans-serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05 }}
          >
            Architectural
            <br />
            Focus
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            My approach centres on performance, maintainability, and composable
            architecture — stripping away complexity to ship systems that are fast
            by default and easy to evolve.
          </p>
          <ul className="space-y-3">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "var(--muted)", fontWeight: 300 }}>
                <span className="mt-0.5 shrink-0" style={{ color: "var(--accent2)" }}>—</span>
                {p}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={150} className="flex flex-col justify-center space-y-8">
          {stack.map((group) => (
            <div key={group.label}>
              <p
                className="text-[10px] uppercase mb-3"
                style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.16em" }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-x-1 gap-y-1">
                {group.separator
                  ? group.items.map((item, i) => (
                      <span key={item} className="text-sm" style={{ color: "var(--text)", fontWeight: 300 }}>
                        {item}
                        {i < group.items.length - 1 && (
                          <span className="mx-2" style={{ color: "var(--dim)" }}>|</span>
                        )}
                      </span>
                    ))
                  : group.items.map((item, i) => (
                      <span key={item} className="text-sm" style={{ color: "var(--text)", fontWeight: 300 }}>
                        {item}{i < group.items.length - 1 && <span style={{ color: "var(--dim)" }}>,&nbsp;</span>}
                      </span>
                    ))}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
