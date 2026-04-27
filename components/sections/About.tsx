import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const paragraphs = [
    "Sou desenvolvedor Full Stack focado em construir sistemas que funcionam de verdade — não apenas demos que impressionam.",
    "Meu trabalho começa antes do código: passa por arquitetura, definição de fluxo, escolha de tecnologias e decisões conscientes que sustentam o produto no longo prazo.",
    "Atuo do front ao back, garantindo que cada parte da aplicação converse de forma consistente, performática e escalável.",
    "Utilizo inteligência artificial como apoio na execução, mas sempre dentro de um processo técnico bem definido. Aqui, código não é gerado — é projetado, validado e entregue com responsabilidade.",
  ];

  return (
    <section
      id="about"
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
        <SectionLabel n="01">Sobre</SectionLabel>

        <div style={{ maxWidth: "820px" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4.2vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              margin: "0 0 28px",
            }}
          >
            Software bem feito não nasce por acaso.
            <span style={{ color: "var(--accent)" }}> É projetado.</span>
          </h2>

          <div>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: "var(--fg-dim)",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  margin: "0 0 16px",
                  maxWidth: "62ch",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
