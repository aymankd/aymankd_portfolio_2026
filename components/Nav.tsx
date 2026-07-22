"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "62px",
        background: scrolled ? "rgba(7,5,3,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between h-full px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <a
          href="#top"
          style={{ fontFamily: "var(--font-dm-mono), monospace", color: "var(--text)", fontSize: "13px", textDecoration: "none", letterSpacing: "0.04em" }}
        >
          aek<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-1 list-none absolute left-1/2 -translate-x-1/2">
          {[
            { label: "About",    href: "#about"   },
            { label: "Stack",    href: "#about"   },
            { label: "Work",     href: "#journey" },
            { label: "Projects", href: "#projects"},
            { label: "Contact",  href: "#contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="link-muted text-xs px-3.5 py-1.5 rounded"
                style={{ fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.02em" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Resume + Hire me */}
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/120OrZ55_oOJ3mWCrKjp-egMUZ8BnI__p/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted hidden md:inline text-xs"
            style={{ fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.02em" }}
          >
            Resume ↗
          </a>
          <a
            href="mailto:aymankaddioui@gmail.com"
            className="btn-primary text-xs font-semibold px-4 py-2 rounded-md"
            style={{ fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.02em" }}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
