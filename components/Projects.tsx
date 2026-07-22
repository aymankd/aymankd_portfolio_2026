import FadeIn from "./FadeIn";

const projects = [
  {
    id: "01",
    name: "SaaS Ecommerce Platform",
    category: "SAAS / FULLSTACK",
    description:
      "Led architecture and development of a multi-environment SaaS ecommerce platform. Redesigned CI/CD pipelines and restructured modular components for long-term scalability.",
    metrics: [
      { label: "Build Time Reduction", value: "85%" },
      { label: "Release Downtime Cut", value: "45%" },
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    id: "02",
    name: "E-Signature & Contract Service",
    category: "SERVERLESS / AWS",
    description:
      "Scalable e-signature and contract generation service using AWS Lambda for high-volume document processing, with 99.9% uptime and 25% infrastructure cost reduction.",
    metrics: [
      { label: "Latency Reduction", value: "35%" },
      { label: "Infra Cost Cut", value: "25%" },
    ],
    tags: ["AWS Lambda", "Node.js", "TypeScript", "S3"],
  },
  {
    id: "03",
    name: "Internal Admin Platform",
    category: "OPERATIONS / AUTOMATION",
    description:
      "Full admin platform automating 80% of operational workflows. Migrated legacy Meteor.js codebase to React/NestJS microservices, improving load time by 35%.",
    metrics: [
      { label: "Workflows Automated", value: "80%" },
      { label: "API Response Time", value: "150ms" },
    ],
    tags: ["React", "NestJS", "GitHub Actions", "Kubernetes"],
  },
  {
    id: "04",
    name: "Drag-and-Drop Form Builder",
    category: "DEVTOOLS / UI",
    description:
      "Low-code form builder enabling non-engineers to create custom forms without development overhead, with a 60% reduction in custom form development time.",
    metrics: [
      { label: "Dev Time Saved", value: "60%" },
      { label: "User Satisfaction", value: "+60%" },
    ],
    tags: ["React", "TypeScript", "Node.js", "MUI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 relative z-10">
      <div className="max-w-5xl">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-[10px] uppercase mb-3"
              style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.16em" }}
            >
              Selected Work
            </p>
            <h2
              style={{ fontFamily: "var(--font-geist), system-ui, sans-serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05 }}
            >
              Things I&apos;ve Shipped
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: "var(--muted)", fontWeight: 300 }}>
            A curated selection of technical solutions solving real-world engineering and product challenges.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <article
                className="card-hover group relative p-8 rounded-sm h-full"
                style={{ background: "var(--bg1)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className="text-[10px] uppercase mb-2"
                      style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.14em" }}
                    >
                      {project.category}
                    </p>
                    <h3
                      className="heading-hover text-xl"
                      style={{ fontFamily: "var(--font-instrument), Georgia, serif", color: "var(--text)", fontWeight: 400 }}
                    >
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className="text-[10px]"
                    style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--dim)" }}
                  >
                    {project.id}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)", fontWeight: 300 }}>
                  {project.description}
                </p>

                <div className="flex items-center gap-6 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div style={{ fontFamily: "var(--font-instrument), Georgia, serif", fontSize: "1.25rem", color: "var(--accent)", fontWeight: 400 }}>
                        {metric.value}
                      </div>
                      <div
                        className="text-[10px] uppercase mt-0.5"
                        style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.12em" }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase px-2 py-1 rounded-sm"
                      style={{ fontFamily: "var(--font-dm-mono), monospace", border: "1px solid var(--border)", color: "var(--muted)", letterSpacing: "0.1em" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--accent)" }}
                >
                  ↗
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
