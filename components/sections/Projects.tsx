"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Chip } from "@/components/ui/Chip";
import { IconArrow, IconExternal } from "@/components/icons";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
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
        <SectionLabel n="05">Projetos selecionados</SectionLabel>

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
            Produtos <span style={{ color: "var(--accent)" }}>reais</span>, em uso.
          </h2>
          <p
            style={{
              color: "var(--fg-dim)",
              fontSize: "17px",
              maxWidth: "620px",
              marginTop: "14px",
            }}
          >
            Uma amostra. Cada item aqui foi para produção, tomou carga e sobreviveu ao contato
            com usuários reais.
          </p>
        </div>

        <div className="proj-layout">
          {/* List */}
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              borderTop: "1px solid var(--line-soft)",
            }}
          >
            {PROJECTS.map((p, i) => (
              <li
                key={p.name}
                className={`proj-row${i === active ? " proj-row-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                style={{
                  display: "grid",
                  alignItems: "center",
                  gap: "16px",
                  padding: `22px ${i === active ? "4px 22px 14px" : "4px"}`,
                  borderBottom: "1px solid var(--line-soft)",
                  cursor: "pointer",
                  outline: "none",
                  transition: "padding 160ms ease, color 160ms ease",
                  paddingLeft: i === active ? "14px" : "4px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12.5px",
                    color: "var(--fg-muted)",
                    width: "40px",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    transition: "color 160ms ease",
                    color: i === active ? "var(--accent)" : "var(--fg)",
                    flex: 1,
                  }}
                >
                  {p.name}
                </div>
                <div
                  className="proj-kind"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12.5px",
                    color: "var(--fg-muted)",
                    width: "140px",
                  }}
                >
                  {p.kind}
                </div>
                <div
                  className="proj-year"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12.5px",
                    color: "var(--fg-muted)",
                    width: "60px",
                  }}
                >
                  {p.year}
                </div>
                <div
                  style={{
                    color: i === active ? "var(--accent)" : "var(--fg-muted)",
                    transform: i === active ? "translateX(4px)" : "translateX(0)",
                    transition: "color 160ms ease, transform 160ms ease",
                    width: "24px",
                  }}
                >
                  <IconArrow size={16} />
                </div>
              </li>
            ))}
          </ol>

          {/* Panel */}
          <aside
            style={{
              position: "sticky",
              top: "100px",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-lg)",
              background: "var(--bg-card)",
              overflow: "hidden",
            }}
          >
            {/* Preview */}
            <div
              style={{
                aspectRatio: "16/10",
                position: "relative",
                background: "var(--bg-2)",
                borderBottom: "1px solid var(--line-soft)",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent 0, transparent 10px, var(--line-soft) 10px, var(--line-soft) 11px)",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "16px",
                  bottom: "14px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12.5px",
                  color: "var(--fg-muted)",
                }}
              >
                screenshot ·{" "}
                {PROJECTS[active].name.toLowerCase().replace(/\s+/g, "-")}.png
              </div>
            </div>

            {/* Meta */}
            <div style={{ padding: "22px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12.5px",
                  color: "var(--fg-muted)",
                  letterSpacing: "0.04em",
                  marginBottom: "8px",
                }}
              >
                {PROJECTS[active].kind} · {PROJECTS[active].year}
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  marginBottom: "10px",
                }}
              >
                {PROJECTS[active].name}
              </div>
              <p
                style={{
                  color: "var(--fg-dim)",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  margin: "0 0 18px",
                }}
              >
                {PROJECTS[active].desc}
              </p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}
              >
                {PROJECTS[active].stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "36px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  fontWeight: 500,
                  fontSize: "13.5px",
                  border: "1px solid var(--line)",
                  background: "transparent",
                  color: "var(--fg)",
                  cursor: "pointer",
                  transition: "border-color 160ms ease, color 160ms ease",
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
                Ver mais <IconExternal size={14} />
              </button>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .proj-layout {
          display: grid;
          grid-template-columns: 1fr 440px;
          gap: 48px;
          align-items: start;
        }
        .proj-row {
          display: grid;
          grid-template-columns: 40px 1fr 140px 60px 24px;
        }
        @media (max-width: 960px) {
          .proj-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 620px) {
          .proj-row { grid-template-columns: 40px 1fr auto; }
          .proj-kind, .proj-year { display: none; }
        }
      `}</style>
    </section>
  );
}
