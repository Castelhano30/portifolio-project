"use client";

import { useState, useEffect } from "react";
import { IconArrow } from "@/components/icons";

const NAV_LINKS = [
  { href: "#about", label: "sobre" },
  { href: "#tech", label: "stack" },
  { href: "#projects", label: "projetos" },
  { href: "#contact", label: "contato" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 200ms ease, border-color 200ms ease, backdrop-filter 200ms ease",
          borderBottom: `1px solid ${scrolled || menuOpen ? "var(--line-soft)" : "transparent"}`,
          background: scrolled || menuOpen
            ? "color-mix(in oklab, var(--bg) 95%, transparent)"
            : "transparent",
          backdropFilter: scrolled && !menuOpen ? "saturate(140%) blur(14px)" : "none",
          WebkitBackdropFilter: scrolled && !menuOpen ? "saturate(140%) blur(14px)" : "none",
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
            height: "64px",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
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

          {/* Desktop links */}
          <div
            className="nav-links"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12.5px",
              display: "flex",
              gap: "22px",
            }}
          >
            {NAV_LINKS.map(({ href, label }) => (
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="nav-cta"
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
              transition: "transform 160ms ease, box-shadow 160ms ease",
              border: "none",
              background: "var(--accent)",
              color: "oklch(0.15 0.02 255)",
              boxShadow: "0 0 0 1px var(--accent), 0 10px 30px -10px var(--accent-glow)",
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

          {/* Hamburger button — mobile only */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "36px",
              height: "36px",
              padding: "6px",
              background: "transparent",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "var(--fg)",
                transition: "transform 200ms ease, opacity 200ms ease",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "var(--fg)",
                transition: "opacity 200ms ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "var(--fg)",
                transition: "transform 200ms ease, opacity 200ms ease",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className="nav-drawer"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 49,
          background: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          padding: "32px var(--pad-x) 40px",
          gap: "8px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 280ms cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
        }}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 0",
              borderBottom: "1px solid var(--line-soft)",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--fg-dim)",
              letterSpacing: "0.04em",
            }}
          >
            {label}
            <IconArrow size={14} />
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "24px",
            height: "48px",
            borderRadius: "999px",
            fontWeight: 500,
            fontSize: "15px",
            background: "var(--accent)",
            color: "oklch(0.15 0.02 255)",
            textDecoration: "none",
          }}
        >
          Contratar <IconArrow size={16} />
        </a>
      </div>

      <style>{`
        @media (max-width: 719px) { .nav-logo-meta { display: none !important; } }
        @media (max-width: 919px) { .nav-links { display: none !important; } }
        @media (max-width: 919px) { .nav-cta { display: none !important; } }
        @media (max-width: 919px) { .nav-hamburger { display: flex !important; } }
        @media (min-width: 920px) { .nav-drawer { display: none !important; } }
      `}</style>
    </>
  );
}
