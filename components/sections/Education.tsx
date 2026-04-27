"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { EDUCATION } from "@/data/education";

export function Education() {
  return (
    <section
      style={{
        padding: "0 0 var(--sec-gap)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--pad-x)",
          paddingTop: "64px",
          borderTop: "1px solid var(--line-soft)",
        }}
      >
        <SectionLabel n="02">Formação Acadêmica</SectionLabel>

        <div className="edu-grid">
          {EDUCATION.map((item) => (
            <article
              key={item.degree}
              className="edu-card"
              style={{
                position: "relative",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
                padding: "28px 28px 24px",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-line)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12.5px",
                  color: "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                {item.year}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  marginBottom: "8px",
                }}
              >
                {item.degree}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12.5px",
                  color: "var(--fg-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "18px",
                }}
              >
                {item.institution}
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "24px",
                  padding: "0 10px",
                  borderRadius: "999px",
                  fontSize: "11.5px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: `1px solid ${item.status === "ongoing" ? "var(--accent-line)" : "var(--line)"}`,
                  color: item.status === "ongoing" ? "var(--accent)" : "var(--fg-muted)",
                  background: item.status === "ongoing" ? "var(--accent-soft)" : "transparent",
                }}
              >
                {item.badgeLabel}
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 8px;
        }
        @media (max-width: 720px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
