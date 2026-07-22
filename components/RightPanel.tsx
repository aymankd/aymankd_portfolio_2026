"use client";

import Image from "next/image";
import { useRef } from "react";

const DEFAULT_SRC = "/my-notion-face-transparent.png";

interface RightPanelProps {
  readonly src?: string | null;
  readonly onClose?: () => void;
  readonly mobileOpen?: boolean;
  readonly label?: string;
}

export default function RightPanel({ src, onClose, mobileOpen, label }: RightPanelProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const activeSrc = src ?? DEFAULT_SRC;
  const isDefault = activeSrc === DEFAULT_SRC;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (mobileOpen) return;
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale(1.03)`;
  }

  function onLeave() {
    if (mobileOpen) return;
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.6s cubic-bezier(0.23,1,0.32,1)";
    el.style.transform  = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
  }

  function onEnter() {
    if (mobileOpen) return;
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.08s linear";
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {onClose && (
        <button
          type="button"
          className="panel-close"
          onClick={onClose}
          aria-label="Close panel"
        >
          ×
        </button>
      )}

      <div
        ref={cardRef}
        aria-hidden="true"
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={mobileOpen ? {
          willChange: "transform",
          transformStyle: "preserve-3d",
          borderRadius: 0,
          overflow: "hidden",
          border: "none",
          background: "transparent",
          cursor: "default",
          width: "72%",
          aspectRatio: "2 / 3",
          position: "relative",
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        } : {
          willChange: "transform",
          transformStyle: "preserve-3d",
          borderRadius: "40px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "var(--surface)",
          cursor: "default",
          width: "80%",
          height: "80%",
          aspectRatio: "2 / 3",
          position: "relative",
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <div
          key={activeSrc}
          style={{
            position: "absolute",
            inset: 0,
            animation: isDefault
              ? "panelFadeIn 0.35s ease"
              : "panelFadeIn 0.35s ease, panelSway 7s ease-in-out 0.35s infinite",
          }}
        >
          <Image
            src={activeSrc}
            alt={isDefault ? "Aymen" : ""}
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
              filter: "drop-shadow(0 0 18px var(--glow-inner)) drop-shadow(0 0 48px var(--glow-outer))",
            }}
            priority={isDefault}
          />
        </div>
      </div>

      {label && (() => {
        const parts = label.split("  •  ");
        if (parts.length === 1) {
          return <p className="panel-label"><span style={{ color: "var(--fg-primary)" }}>{label}</span></p>;
        }
        const [name, year] = parts;
        return (
          <p className="panel-label">
            <span style={{ color: "var(--fg-primary)" }}>{name}</span>
            <span style={{ color: "var(--fg-secondary)" }}> • </span>
            <span style={{ color: "var(--fg-primary)" }}>{year}</span>
          </p>
        );
      })()}
    </div>
  );
}
