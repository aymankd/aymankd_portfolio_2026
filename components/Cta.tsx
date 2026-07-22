import FadeIn from "./FadeIn";

const links = [
  { label: "Email", href: "mailto:aymankaddioui@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/el-kadioui-aymen" },
  { label: "GitHub", href: "https://www.github.com/aymankd" },
];

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative px-8 md:px-16 lg:px-24 py-24 md:py-32 z-10"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg1)" }}
    >
      <div className="max-w-5xl">
        <FadeIn>
          <p
            className="text-[10px] uppercase mb-6"
            style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--muted)", letterSpacing: "0.16em" }}
          >
            Let&apos;s Collaborate
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2
            className="mb-12 leading-[1.05]"
            style={{ fontFamily: "var(--font-geist), system-ui, sans-serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.045em", color: "var(--text)", lineHeight: 1 }}
          >
            Let&apos;s build something<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={200} className="flex items-center gap-6 md:gap-10 flex-wrap">
          {links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-6 md:gap-10">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="link-muted text-sm uppercase"
                style={{ fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.12em" }}
              >
                {link.label}
              </a>
              {i < links.length - 1 && (
                <span style={{ color: "var(--dim)", fontSize: "0.75rem" }}>+</span>
              )}
            </span>
          ))}
        </FadeIn>
      </div>

      <div
        className="mt-24 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          className="text-[10px] uppercase"
          style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--dim)", letterSpacing: "0.14em" }}
        >
          © 2026 Aymen El Kadioui — All rights reserved
        </p>
        <p
          className="text-[10px] uppercase"
          style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--dim)", letterSpacing: "0.14em" }}
        >
          Based in Rabat, Morocco
        </p>
      </div>
    </section>
  );
}
