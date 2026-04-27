type ChipProps = {
  children: React.ReactNode;
  mono?: boolean;
  subtle?: boolean;
};

export function Chip({ children, mono = true, subtle = false }: ChipProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: "28px",
        padding: "0 10px",
        border: `1px solid ${subtle ? "var(--line-soft)" : "var(--line)"}`,
        borderRadius: "999px",
        fontSize: "12.5px",
        color: "var(--fg-dim)",
        background: "color-mix(in oklab, var(--bg-card) 70%, transparent)",
        whiteSpace: "nowrap",
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
        fontFeatureSettings: mono ? '"ss01","zero"' : undefined,
        letterSpacing: mono ? "0.01em" : undefined,
      }}
    >
      {children}
    </span>
  );
}
