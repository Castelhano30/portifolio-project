"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { IconArrow, IconGithub, IconLinkedin, IconMail } from "@/components/icons";

const CONTACTS = [
  {
    icon: <IconMail size={22} />,
    label: "email",
    value: "felipe@castelhano.dev",
    href: "mailto:felipe@castelhano.dev",
  },
  {
    icon: <IconLinkedin size={22} />,
    label: "linkedin",
    value: "/in/felipecastelhano",
    href: "https://linkedin.com/in/felipecastelhano",
  },
  {
    icon: <IconGithub size={22} />,
    label: "github",
    value: "@felipecastelhano",
    href: "https://github.com/felipecastelhano",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "var(--sec-gap) 0", position: "relative" }}
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
        <SectionLabel n="06">Contato</SectionLabel>

        <h2
          style={{
            fontSize: "clamp(52px, 10vw, 140px)",
            fontWeight: 600,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            margin: "0 0 56px",
          }}
        >
          Vamos<br />
          conversar<span style={{ color: "var(--accent)" }}>?</span>
        </h2>

        <div className="contact-grid">
          {CONTACTS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "16px",
                padding: "20px 24px",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 200ms ease, transform 200ms ease, background 200ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent-line)";
                el.style.transform = "translateY(-2px)";
                el.style.background = "var(--bg-elev)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--line)";
                el.style.transform = "translateY(0)";
                el.style.background = "var(--bg-card)";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius)",
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11.5px",
                    color: "var(--fg-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "var(--fg)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.value}
                </div>
              </div>

              <div style={{ color: "var(--accent)", flexShrink: 0 }}>
                <IconArrow size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 780px) {
          .contact-grid { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
