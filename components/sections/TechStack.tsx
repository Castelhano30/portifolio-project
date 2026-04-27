"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { IconTerminal, IconServer, IconTools } from "@/components/icons";
import { TECH_GROUPS, TechGroup } from "@/data/tech";
import type { ComponentType } from "react";

const iconMap: Record<TechGroup["iconName"], ComponentType<{ size?: number }>> = {
  terminal: IconTerminal,
  server: IconServer,
  tools: IconTools,
};

export function TechStack() {
  return (
    <section
      id="tech"
      style={{ padding: "var(--sec-gap) 0", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--pad-x)",
        }}
      >
        <SectionLabel n="04">Stack técnico</SectionLabel>

        <div style={{ maxWidth: "860px", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4.2vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Ferramentas que uso para{" "}
            <span style={{ color: "var(--accent)" }}>entregar de ponta a ponta</span>.
          </h2>
          <p
            style={{
              color: "var(--fg-dim)",
              fontSize: "17px",
              maxWidth: "620px",
              marginTop: "14px",
            }}
          >
            Nada de lista infinita — são as tecnologias que eu realmente toco no dia a dia e
            sustento em produção.
          </p>
        </div>

        <div className="tech-grid">
          {TECH_GROUPS.map((group) => {
            const Icon = iconMap[group.iconName];
            return (
              <article
                key={group.id}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  background:
                    "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-2) 100%)",
                  padding: "28px",
                  transition:
                    "border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-line)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 30px 60px -30px oklch(0 0 0 / 0.6), 0 0 0 1px var(--accent-line)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    paddingBottom: "20px",
                    marginBottom: "20px",
                    borderBottom: "1px solid var(--line-soft)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {group.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12.5px",
                        color: "var(--fg-muted)",
                      }}
                    >
                      {group.subtitle}
                    </div>
                  </div>
                </div>

                {/* Items list */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "2px" }}>
                  {group.items.map((item, idx) => (
                    <li
                      key={item.name}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "14px 1fr auto",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom:
                          idx < group.items.length - 1
                            ? "1px dashed var(--line-soft)"
                            : "none",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "2px",
                          background: "var(--accent)",
                          transform: "rotate(45deg)",
                          opacity: 0.8,
                        }}
                      />
                      <span style={{ fontSize: "15.5px" }}>{item.name}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "12.5px",
                          color: "var(--fg-muted)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        @media (max-width: 960px) {
          .tech-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 620px) {
          .tech-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
