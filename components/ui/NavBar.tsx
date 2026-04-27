"use client";

import { useState, useEffect } from "react";
import { IconArrow } from "@/components/icons";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition:
          "background 200ms ease, border-color 200ms ease, backdrop-filter 200ms ease",
        borderBottom: `1px solid ${scrolled ? "var(--line-soft)" : "transparent"}`,
        background: scrolled
          ? "color-mix(in oklab, var(--bg) 70%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--pad-x)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
          aria-label="Felipe Castelhano — topo"
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: "-0.02em",
            }}
          >
            F<span style={{ color: "var(--accent)" }}>/</span>C
          </span>
          <span
            className="nav-logo-meta"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12.5px",
              color: "var(--fg-muted)",
            }}
          >
            Felipe Castelhano Dev
          </span>
        </a>

        {/* Links */}
        <div
          className="nav-links"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12.5px",
            display: "flex",
            gap: "22px",
          }}
        >
          {[
            { href: "#about", label: "sobre" },
            { href: "#tech", label: "stack" },
            { href: "#projects", label: "projetos" },
            { href: "#contact", label: "contato" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{
                color: "var(--fg-dim)",
                transition: "color 160ms ease",
                padding: "6px 2px",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--fg-dim)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            height: "36px",
            padding: "0 14px",
            borderRadius: "999px",
            fontWeight: 500,
            fontSize: "13.5px",
            letterSpacing: "-0.005em",
            transition:
              "transform 160ms ease, box-shadow 160ms ease",
            border: "none",
            background: "var(--accent)",
            color: "oklch(0.15 0.02 255)",
            boxShadow:
              "0 0 0 1px var(--accent), 0 10px 30px -10px var(--accent-glow)",
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 1px var(--accent), 0 16px 40px -10px var(--accent-glow)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 1px var(--accent), 0 10px 30px -10px var(--accent-glow)";
          }}
        >
          Contratar <IconArrow size={14} />
        </a>
      </div>

      <style>{`
        @media (max-width: 719px) { .nav-logo-meta { display: none !important; } }
        @media (max-width: 919px) { .nav-links { display: none !important; } }
      `}</style>
    </nav>
  );
}
