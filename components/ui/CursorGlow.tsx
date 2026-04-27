"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--mx", e.clientX + "px");
      el.style.setProperty("--my", e.clientY + "px");
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: "var(--mx, -9999px)",
        top: "var(--my, -9999px)",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)",
        filter: "blur(40px)",
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.55,
        mixBlendMode: "screen",
      }}
    />
  );
}
