export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line-soft)",
        padding: "32px 0",
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
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12.5px",
            color: "var(--fg-muted)",
            letterSpacing: "0.03em",
            margin: 0,
          }}
        >
          © 2026 · Felipe Castelhano · feito à mão em código
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "12.5px",
            color: "var(--fg-muted)",
            letterSpacing: "0.06em",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          online
        </div>
      </div>
    </footer>
  );
}
