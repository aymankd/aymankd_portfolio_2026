import FadeIn from "./FadeIn";
import TypingWord from "./TypingWord";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
      style={{ paddingTop: "160px", paddingBottom: "100px" }}
    >
      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow tag */}
        <FadeIn>
          <p
            className="inline-flex items-center gap-2 text-[10px] uppercase mb-10 px-3 py-1.5 rounded-full"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              color: "var(--muted)",
              letterSpacing: "0.16em",
              border: "1px solid var(--border)",
              background: "var(--bg1)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />{" "}Based in Rabat&nbsp;&nbsp;•&nbsp;&nbsp;Open to opportunities
          </p>
        </FadeIn>

        {/* Main heading — matches source: weight 800, -0.045em tracking */}
        <FadeIn delay={100}>
          <h1
            style={{
              fontFamily: "var(--font-geist), system-ui, sans-serif",
              fontSize: "clamp(52px, 7.5vw, 108px)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              color: "var(--text)",
              marginBottom: 0,
            }}
          >
            Crafted
          </h1>
          {/* Line 2 — Instrument Serif italic, weight 300, like source .line2 */}
          <div
            style={{
              fontFamily: "var(--font-instrument), Georgia, serif",
              fontSize: "clamp(46px, 6.8vw, 98px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              marginBottom: "36px",
            }}
          >
            <TypingWord />
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={200}>
          <p
            className="text-base leading-relaxed max-w-lg mb-12"
            style={{ color: "var(--muted)", fontWeight: 300, fontSize: "17px", lineHeight: 1.75 }}
          >
            I&apos;m{" "}
            <strong style={{ color: "var(--text)", fontWeight: 400 }}>Aymen El Kadioui</strong>
            {" — Senior Software Engineer with "}
            <strong style={{ color: "var(--text)", fontWeight: 400 }}>5+ years</strong>
            {" building high-performance SaaS platforms. API response times below "}
            <strong style={{ color: "var(--text)", fontWeight: 400 }}>200ms</strong>
            {", systems that scale, and interfaces that feel effortless."}
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={300}>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#projects"
              className="btn-primary px-5 py-2.5 text-xs font-semibold rounded-md"
              style={{ fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.02em" }}
            >
              See what I&apos;ve built →
            </a>
            <a
              href="https://drive.google.com/file/d/120OrZ55_oOJ3mWCrKjp-egMUZ8BnI__p/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-5 py-2.5 text-xs rounded-md"
              style={{ fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.02em" }}
            >
              Resume ↗
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, transparent, var(--border))" }}
        />
      </div>
    </section>
  );
}
