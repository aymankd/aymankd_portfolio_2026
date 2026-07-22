import FadeIn from "./FadeIn";
import SpotlightCard from "./SpotlightCard";

interface Role {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  active?: boolean;
}

const roles: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Flow Digital Studio",
    period: "Jun 2025 — Present",
    active: true,
    description:
      "Leading architecture of a SaaS ecommerce platform. Redesigned CI/CD pipelines cutting build time by 85%, integrated E2E testing boosting pre-deployment bug detection by 60%, and cut release downtime by 45%.",
    highlights: ["SaaS Architecture", "CI/CD", "E2E Testing"],
  },
  {
    title: "Senior Software Engineer",
    company: "Zappyrent",
    period: "Sep 2023 — May 2025",
    description:
      "Implemented scalable e-signature and contract generation via AWS Lambda. Refactored core backend modules reducing latency by 35%, cut infrastructure costs by 25% while maintaining 99.9% uptime.",
    highlights: ["AWS Lambda", "Serverless", "Backend Refactor"],
  },
  {
    title: "Software Engineer",
    company: "Flow Digital Studio",
    period: "Oct 2022 — Sep 2023",
    description:
      "Built a full admin platform automating 80% of operational workflows. Led migration from Meteor.js to React/NestJS microservices and reduced average API response time from 1.2s to 150ms.",
    highlights: ["Microservices", "Meteor → NestJS", "API Perf"],
  },
  {
    title: "Software Engineer",
    company: "ABA Technology",
    period: "Mar 2022 — Sep 2022",
    description:
      "Engineered a multi-channel notification system (email, SMS, WebSocket) increasing user engagement by 45%. Created a drag-and-drop form builder that cut custom development time by 60%.",
    highlights: ["WebSocket", "Form Builder", "Notifications"],
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="px-8 md:px-16 lg:px-24 py-24 md:py-32 relative z-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl">
        <FadeIn className="mb-16">
          <p
            className="text-[10px] uppercase mb-3"
            style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.16em" }}
          >
            Experience
          </p>
          <h2
            style={{ fontFamily: "var(--font-geist), system-ui, sans-serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05 }}
          >
            Professional Journey
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {roles.map((role, i) => (
            <FadeIn key={`${role.company}-${role.period}`} delay={i * 80}>
              <SpotlightCard
                className="rounded-sm p-6 md:p-8"
                style={{ background: "var(--bg1)", border: "1px solid var(--border)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                  {/* Left: period + company + active badge */}
                  <div className="flex md:flex-col gap-3 md:gap-2">
                    <p
                      className="text-[10px] uppercase"
                      style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.12em", whiteSpace: "nowrap" }}
                    >
                      {role.period}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-dm-mono), monospace", fontWeight: 400, fontSize: "12px" }}
                    >
                      {role.company}
                    </p>
                    {role.active && (
                      <span
                        className="text-[10px] uppercase self-start px-2 py-0.5 rounded-sm"
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          letterSpacing: "0.12em",
                          color: "#4ade80",
                          background: "rgba(74,222,128,0.08)",
                          border: "1px solid rgba(74,222,128,0.25)",
                        }}
                      >
                        ● Active
                      </span>
                    )}
                  </div>

                  {/* Right: role details */}
                  <div className="md:col-span-2">
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-geist), system-ui, sans-serif",
                        fontSize: "1rem",
                        color: "var(--text)",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {role.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)", fontWeight: 300 }}>
                      {role.description}
                    </p>
                    <div className="tag-group flex flex-wrap gap-2">
                      {role.highlights.map((h) => (
                        <span
                          key={h}
                          className="tag text-[10px] uppercase px-2 py-1 rounded-sm"
                          style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            border: "1px solid var(--border)",
                            color: "var(--muted)",
                            letterSpacing: "0.1em",
                            transition: "opacity 0.2s, border-color 0.2s, color 0.2s",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
