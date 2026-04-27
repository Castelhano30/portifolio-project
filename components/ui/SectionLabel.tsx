type SectionLabelProps = {
  n: string;
  children: React.ReactNode;
};

export function SectionLabel({ n, children }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "36px",
        fontFamily: "var(--font-mono)",
        fontSize: "12.5px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}
    >
      <span style={{ color: "var(--accent)" }}>{n}</span>
      <span
        aria-hidden="true"
        style={{
          flex: "0 0 56px",
          height: "1px",
          background: "var(--accent-line)",
        }}
      />
      <span style={{ color: "var(--fg-muted)" }}>{children}</span>
    </div>
  );
}
