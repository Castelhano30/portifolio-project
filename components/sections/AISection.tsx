"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { IconSparkle, IconBrain, IconArrow } from "@/components/icons";
import { AI_BULLETS } from "@/data/ai";

export function AISection() {
  return (
    <section
      id="ai"
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--line-soft)",
        borderBottom: "1px solid var(--line-soft)",
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--bg) 100%, transparent) 0%, color-mix(in oklab, var(--bg-2) 100%, transparent) 100%)",
        padding: "var(--sec-gap) 0",
      }}
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "-140px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.55,
            mixBlendMode: "screen",
            background:
              "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-260px",
            right: "-120px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.55,
            mixBlendMode: "screen",
            background:
              "radial-gradient(circle, oklch(0.75 0.2 260 / 0.22) 0%, transparent 65%)",
          }}
        />
        <div className="ai-scan" />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--pad-x)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <SectionLabel n="03">Desenvolvimento com IA</SectionLabel>

        {/* Head */}
        <div style={{ maxWidth: "820px", marginBottom: "56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              border: "1px solid var(--accent-line)",
              color: "var(--accent)",
              borderRadius: "999px",
              marginBottom: "28px",
              background: "var(--accent-soft)",
              fontFamily: "var(--font-mono)",
              fontSize: "12.5px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            <IconSparkle size={14} />
            <span>focus area</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 5.2vw, 64px)",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Inteligência Artificial aplicada
            <span
              style={{
                color: "var(--accent)",
                display: "inline",
                textShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              {" "}com arquitetura de verdade.
            </span>
          </h2>

          <p
            style={{
              color: "var(--fg-dim)",
              fontSize: "18px",
              marginTop: "22px",
              maxWidth: "680px",
            }}
          >
            Criação de soluções com IA de forma estratégica, indo além de integrações básicas.
            Desenvolvimento orientado à arquitetura de software, automações inteligentes e uso
            eficiente de modelos de linguagem.
          </p>
        </div>

        {/* Cards grid */}
        <div className="ai-grid">
          {AI_BULLETS.map((b, i) => (
            <div
              key={b.title}
              className="ai-card-border"
              style={{
                position: "relative",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--bg-card) 85%, transparent) 0%, color-mix(in oklab, var(--bg-2) 85%, transparent) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                overflow: "hidden",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-line)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12.5px",
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  marginBottom: "18px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                }}
              >
                {b.title}
              </div>
              <div
                style={{
                  color: "var(--fg-dim)",
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                }}
              >
                {b.description}
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "14px",
              border: "1px solid var(--accent-line)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
              background:
                "radial-gradient(circle at 20% 0%, var(--accent-soft) 0%, transparent 60%), linear-gradient(180deg, color-mix(in oklab, var(--bg-card) 80%, transparent) 0%, color-mix(in oklab, var(--bg-2) 80%, transparent) 100%)",
              overflow: "hidden",
              color: "var(--accent)",
            }}
          >
            <IconBrain size={22} />
            <div
              style={{
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "var(--fg)",
              }}
            >
              Conversar sobre IA no seu produto?
            </div>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                border: "1px solid var(--accent-line)",
                borderRadius: "999px",
                color: "var(--accent)",
                background: "var(--accent-soft)",
                fontFamily: "var(--font-mono)",
                fontSize: "12.5px",
                transition: "background 160ms ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "color-mix(in oklab, var(--accent) 24%, transparent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--accent-soft)")
              }
            >
              abrir conversa <IconArrow size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .ai-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        @media (max-width: 720px) {
          .ai-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
