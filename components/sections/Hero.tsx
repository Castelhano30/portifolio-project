"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IconArrow, IconArrowDown } from "@/components/icons";

const TYPED_TEXT = "felipe@castelhano ~ %  build --mode=production";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(TYPED_TEXT.slice(0, i));
      if (i >= TYPED_TEXT.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "140px 0 80px",
        minHeight: "100vh",
        isolation: "isolate",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-2px",
          backgroundImage:
            "linear-gradient(to right, var(--line-soft) 1px, transparent 1px), linear-gradient(to bottom, var(--line-soft) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 90%)",
          opacity: 0.65,
          zIndex: -2,
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          width: "900px",
          height: "900px",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)",
          filter: "blur(40px)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--pad-x)",
          position: "relative",
        }}
      >
        {/* Split grid */}
        <div className="hero-split">
          {/* Left: copy */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                fontSize: "clamp(56px, 11vw, 148px)",
                fontWeight: 500,
                lineHeight: 0.94,
                letterSpacing: "-0.04em",
                margin: "0 0 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              
              <span style={{ display: "block" }}>Felipe</span>
              <span
                style={{ display: "block", color: "var(--accent)" }}
              >
                Castelhano
                <span style={{ fontWeight: 400, color: "var(--accent)" }}>
                  .
                </span>
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.45,
                color: "var(--fg-dim)",
                maxWidth: "720px",
                margin: "0 0 40px",
              }}
            >
              Desenvolvedor Full Stack especializado em criar soluções
              <span style={{ color: "var(--fg)", fontStyle: "normal" }}>
                {" "}
                modernas, escaláveis e inteligentes
              </span>
              .
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "72px",
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "46px",
                  padding: "0 20px",
                  borderRadius: "999px",
                  fontWeight: 500,
                  fontSize: "15px",
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
                Ver projetos <IconArrow size={16} />
              </a>

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "46px",
                  padding: "0 20px",
                  borderRadius: "999px",
                  fontWeight: 500,
                  fontSize: "15px",
                  letterSpacing: "-0.005em",
                  transition:
                    "transform 160ms ease, border-color 160ms ease, color 160ms ease",
                  border: "1px solid var(--line)",
                  background: "transparent",
                  color: "var(--fg)",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-line)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                  (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                }}
              >
                Entrar em contato
              </a>
            </div>
          </div>

          {/* Right: photo + id card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            {/* Photo frame */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow:
                  "0 0 0 1px var(--accent-line), 0 40px 80px -30px oklch(0 0 0 / 0.65)",
                background: "var(--bg-2)",
                width: "418px",
                maxWidth: "100%",
                aspectRatio: "418 / 487",
              }}
            >
              {/* Corner brackets */}
              {(["tl", "tr", "bl", "br"] as const).map((pos) => (
                <div
                  key={pos}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    borderColor: "var(--accent)",
                    borderStyle: "solid",
                    borderWidth: 0,
                    zIndex: 2,
                    ...(pos === "tl" && {
                      top: "10px",
                      left: "10px",
                      borderTopWidth: "2px",
                      borderLeftWidth: "2px",
                    }),
                    ...(pos === "tr" && {
                      top: "10px",
                      right: "10px",
                      borderTopWidth: "2px",
                      borderRightWidth: "2px",
                    }),
                    ...(pos === "bl" && {
                      bottom: "10px",
                      left: "10px",
                      borderBottomWidth: "2px",
                      borderLeftWidth: "2px",
                    }),
                    ...(pos === "br" && {
                      bottom: "10px",
                      right: "10px",
                      borderBottomWidth: "2px",
                      borderRightWidth: "2px",
                    }),
                  }}
                />
              ))}

              <Image
                src="/assets/felipe2.png"
                alt="Felipe Castelhano"
                width={418}
                height={487}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  filter: "saturate(0.85) contrast(1.02)",
                }}
              />
            </div>

            {/* ID Card */}
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                background:
                  "color-mix(in oklab, var(--bg-card) 80%, transparent)",
                overflow: "hidden",
              }}
            >
              {[
                { key: "role", val: "Full Stack Engineer" },
                { key: "foco", val: "Web moderna & IA aplicada" },
              ].map(({ key, val }) => (
                <div key={key}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "14px 20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12.5px",
                        color: "var(--fg-muted)",
                        minWidth: "44px",
                        textTransform: "lowercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {key}
                    </span>
                    <span
                      style={{
                        fontSize: "14.5px",
                        fontWeight: 500,
                        textAlign: "right",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{ height: "1px", background: "var(--line-soft)", margin: "0 20px" }}
                  />
                </div>
              ))}

              {/* Status row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "14px 20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12.5px",
                    color: "var(--fg-muted)",
                    minWidth: "44px",
                    textTransform: "lowercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  status
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--accent)",
                    fontSize: "14.5px",
                    fontWeight: 500,
                  }}
                >
                  <span className="status-dot status-dot--sm" />
                  Disponível para projetos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="hero-scroll" aria-label="Rolar para baixo">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12.5px",
            color: "var(--fg-muted)",
          }}
        >
          role para baixo
        </span>
        <IconArrowDown size={14} />
      </a>

      <style>{`
        .hero-split {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 64px;
          align-items: center;
          min-height: calc(100vh - 140px);
        }
        @media (max-width: 1020px) {
          .hero-split {
            grid-template-columns: 1fr;
            gap: 48px;
            min-height: unset;
          }
        }
      `}</style>
    </section>
  );
}
