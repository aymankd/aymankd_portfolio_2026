"use client";

import { useEffect, useRef } from "react";

const PHRASES = [
  { prep: "for ",  rest: "Scale."      },
  { prep: "for ",  rest: "Impact."     },
  { prep: "with ", rest: "Passion."    },
  { prep: "with ", rest: "Precision."  },
  { prep: "to ",   rest: "Last."       },
  { prep: "with ", rest: "Intent."     },
  { prep: "for ",  rest: "People."     },
  { prep: "for ",  rest: "Production." },
  { prep: "with ", rest: "Purpose."    },
  { prep: "for ",  rest: "the Future." },
];

export default function TypingWord() {
  const prepRef = useRef<HTMLSpanElement>(null);
  const restRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prepEl = prepRef.current;
    const restEl = restRef.current;
    if (prepEl === null || restEl === null) return;

    let wi = 0;
    let ci = 0;
    let deleting = false;
    let rafId: number;
    let cancelled = false;

    function pause(ms: number) {
      return new Promise<void>((r) => setTimeout(r, ms));
    }

    function render() {
      if (prepEl === null || restEl === null) return;
      const { prep, rest } = PHRASES[wi];
      const full = prep + rest;
      const current = full.slice(0, ci);
      prepEl.textContent = current.slice(0, prep.length);
      restEl.textContent = current.slice(prep.length);
    }

    async function tick() {
      if (cancelled) return;
      const { prep, rest } = PHRASES[wi];
      const full = prep + rest;

      if (deleting) {
        ci--;
        render();
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % PHRASES.length;
          await pause(220);
        } else {
          await pause(38 + Math.random() * 18);
        }
      } else {
        ci++;
        render();
        if (ci === full.length) {
          await pause(1800);
          deleting = true;
        } else {
          await pause(75 + Math.random() * 40);
        }
      }

      if (!cancelled) rafId = requestAnimationFrame(tick);
    }

    const timer = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, 900);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <span style={{ whiteSpace: "nowrap" }}>
      {/* prep word: gold accent */}
      <span ref={prepRef} style={{ color: "var(--accent)", fontStyle: "italic" }} />
      {/* rest word: orange */}
      <span ref={restRef} style={{ color: "var(--orange)", fontStyle: "italic" }} />
      {/* blinking cursor */}
      <span
        style={{
          display: "inline-block",
          width: "4px",
          height: "0.82em",
          background: "var(--orange)",
          marginLeft: "3px",
          verticalAlign: "baseline",
          borderRadius: "1px",
          animation: "blink 0.9s step-end infinite",
        }}
      />
    </span>
  );
}
