"use client";

import WorkPill from "@/components/WorkPill";
import RightPanel from "@/components/RightPanel";
import Logo from "@/components/Logo";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";

const PANEL_LABELS: Record<string, string> = {
  "/optisaas_preview.png": "OPTISAAS  •  2026",
  "/zappyrent_preview.gif": "ZAPPYRENT  •  2025",
};

const MQ = "(max-width: 820px)";
function subscribeMq(cb: () => void) {
  const mq = globalThis.matchMedia?.(MQ);
  mq?.addEventListener("change", cb);
  return () => mq?.removeEventListener("change", cb);
}
const getMqSnapshot = () => globalThis.matchMedia?.(MQ).matches ?? false;
const getMqServerSnap = () => false;

function usePanelState() {
  const isMobile = useSyncExternalStore(
    subscribeMq,
    getMqSnapshot,
    getMqServerSnap,
  );
  const [panelOverlay, setPanelOverlay] = useState<string | null>(null);
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);
  const openRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = mobilePanelOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobilePanelOpen]);

  function openMobile(src: string) {
    openRef.current = true;
    setPanelOverlay(src);
    setMobilePanelOpen(true);
  }

  function closeMobile() {
    openRef.current = false;
    setMobilePanelOpen(false);
    setPanelOverlay(null);
  }

  function pillHandlers(src: string) {
    return isMobile
      ? { onClick: () => openMobile(src) }
      : {
          onMouseEnter: () => setPanelOverlay(src),
          onMouseLeave: () => {
            if (!openRef.current) setPanelOverlay(null);
          },
        };
  }

  return { panelOverlay, mobilePanelOpen, closeMobile, pillHandlers };
}

export default function Home() {
  const { panelOverlay, mobilePanelOpen, closeMobile, pillHandlers } =
    usePanelState();

  return (
    <div className="page-layout">
      {/* ── Left container ── */}
      <div className="left-container">
        {/* ── Logo ── */}
        <div style={{ marginBottom: "34px" }}>
          <Logo />
        </div>

        {/* ── Intro ── */}
        <section style={{ marginBottom: "56px" }}>
          <h1
            style={{
              fontFamily: "var(--font-space), system-ui, sans-serif",
              fontSize: "2.25em",
              fontWeight: 400,
              color: "var(--fg-secondary)",
              marginBottom: "22px",
              lineHeight: 1.25,
            }}
          >
            <span style={{ color: "var(--fg-primary)" }}>
              Hi, I&apos;m Aymen
            </span>
            {
              " — a senior software engineer focused on backend systems, SaaS architecture, and building things that work reliably in production."
            }
          </h1>

          {/* About paragraphs */}
          <div
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              color: "var(--fg-secondary)",
              fontSize: "1.125em",
              lineHeight: "156%",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <p>
              Right now, I&apos;m building{" "}
              <WorkPill {...pillHandlers("/optisaas_preview.png")}>
                an optician SaaS platform
              </WorkPill>
              {
                " — focused on managing products, patients, and workflows in a simple and reliable way."
              }
            </p>

            <p>
              Before that, I worked at{" "}
              <WorkPill {...pillHandlers("/zappyrent_preview.gif")}>
                Zappyrent
              </WorkPill>
              , a production SaaS platform in rental, where I designed and built
              backend systems handling complex business logic. While I was
              there, I worked on features involving inventory, reservations, and
              invoicing across multiple clients. I&apos;m particularly proud of
              designing multi-tenant architectures that allowed the system to
              scale while remaining consistent and performant.
            </p>

            <p>
              Before that, I spent the past few years working as a full-stack
              engineer at <WorkPill href="https://www.flowdigitalstudio.com">Flow Digital Studio</WorkPill>
              {
                " on real-world platforms used by businesses daily. I contributed to systems handling inventory management, which required strong data consistency and performance, and reservation workflows, which involved complex edge cases and time-based logic."
              }
            </p>

            <p>
              As a full-stack engineer, I get energy from backend architecture,
              data modeling, and system design. At the same time, I believe that
              building software is not just about making things work, but making
              them reliable and usable in real conditions. I enjoy working on
              complex systems and turning them into structured, maintainable
              solutions, and I think that focusing on fundamentals leads to
              better long-term products. I&apos;m currently interested in
              exploring SaaS, system design, and scalable architectures. I like
              working with small teams that move fast, take ownership, and
              believe in building things with quality.
            </p>

            <p>
              In my free time, you can find me playing chess and thinking
              through strategy — feel free to check my games on{" "}
              <WorkPill href="https://www.chess.com/member/kagak0">Chess.com</WorkPill>
              {". On the side, I build small projects, including "}
              <WorkPill href="https://www.linkedin.com/posts/hamzaaitdarhem_solopay-presentation-the-shift-a-24h-hackathon-ugcPost-7352745742488215552-TgGx?utm_source=share&utm_medium=member_desktop&rcm=ACoAACyNQg0B2K9mI4hTEFjWCVD3XMzuUWiluyU">
                Solopay
              </WorkPill>
              {" — a payment-focused product built during a 24h hackathon."}
            </p>
          </div>
        </section>

        {/* ── 01 Work ── */}
        <section style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              textTransform: "uppercase",
              color: "var(--fg-secondary)",
              marginBottom: "0.6em",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            01 Work
          </h2>
          <ol style={{ listStyle: "none" }}>
            {[
              { name: "Flow Digital Studio", period: "2025–Present", href: "https://www.flowdigitalstudio.com" },
              { name: "Zappyrent", period: "2023–2025", href: "https://www.zappyrent.com/" },
              { name: "Flow Digital Studio", period: "2022–2023", href: "https://www.flowdigitalstudio.com" },
              { name: "ABA Technology", period: "2022", href: "https://aba.technology" },
              { name: "Berexia", period: "2021–2022", href: "https://berexia.com/" },
            ].map((item) => (
              <li key={`${item.name}-${item.period}`} className="section-item">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-item-name"
                  style={{ textDecoration: "none", color: "var(--fg-primary)" }}
                >
                  {item.name}
                </a>
                <span className="section-item-dots" />
                <span className="section-item-meta">{item.period}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 02 Media ── */}
        <section style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              textTransform: "uppercase",
              color: "var(--fg-secondary)",
              marginBottom: "0.6em",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            02 Media
          </h2>
          <ol style={{ listStyle: "none" }}>
            {[
              {
                name: "E2E Testing in NestJS — The Real Way",
                href: "https://medium.com/@aymankaddioui/end-to-end-testing-in-nestjs-the-real-way-with-vitest-postgresql-99afd4c25f65",
                meta: { type: "Medium", year: "Nov 2026" },
              },
            ].map((item) => (
              <li key={item.name} className="section-item">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="section-item-name"
                    style={{ textDecoration: "none", color: "var(--fg-primary)" }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className="section-item-name">{item.name}</span>
                )}
                <span className="section-item-dots" />
                <div className="section-item-meta-stack">
                  <span>{item.meta.year}</span>
                  <span>{item.meta.type}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 03 Contact ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "12px",
              textTransform: "uppercase",
              color: "var(--fg-secondary)",
              marginBottom: "0.6em",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            03 Contact
          </h2>
          <ol style={{ listStyle: "none" }}>
            {[
              { label: "X", href: "https://x.com/aymankd2" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/el-kadioui-aymen",
              },
              { label: "GitHub", href: "https://www.github.com/aymankd" },
              { label: "Email", href: "mailto:aymankaddioui@gmail.com" },
            ].map((item) => (
              <li key={item.label} className="contact-item">
                <a
                  href={item.href}
                  className="contact-link"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Footer ── */}
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.75em",
            color: "var(--fg-secondary)",
          }}
        >
          <span style={{ fontStyle: "italic" }}>
            Build simple. Build reliable.
          </span>
          <span>©2026</span>
        </footer>
      </div>

      {/* ── Right container ── */}
      <div
        className={`right-container${mobilePanelOpen ? " right-container--open" : ""}`}
      >
        <RightPanel
          src={panelOverlay}
          onClose={mobilePanelOpen ? closeMobile : undefined}
          mobileOpen={mobilePanelOpen}
          label={PANEL_LABELS[panelOverlay ?? ""] ?? "Aymen"}
        />
      </div>
    </div>
  );
}
