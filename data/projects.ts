export type Project = {
  name: string;
  kind: string;
  year: string;
  desc: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "Atlas Agent",
    kind: "AI Product",
    year: "2025",
    desc: "Assistente interno que responde sobre documentos da empresa — RAG com citações inline, sem alucinar contrato.",
    stack: ["Next.js", "OpenAI", "pgvector", "Node.js"],
  },
  {
    name: "Flow Studio",
    kind: "Automation",
    year: "2025",
    desc: "Orquestrador visual de workflows de IA — conecta n8n, APIs externas e LLMs em um editor drag-and-drop.",
    stack: ["React", "n8n", "Docker", "Express"],
  },
  {
    name: "Pulse CRM",
    kind: "SaaS",
    year: "2024",
    desc: "CRM sob medida para time de vendas B2B. Dashboard em tempo real, pipeline kanban e integrações REST.",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
  },
  {
    name: "Kiln Commerce",
    kind: "E-commerce",
    year: "2024",
    desc: "Loja headless com checkout otimizado e painel de gestão. Carregamento sub-segundo em 3G lento.",
    stack: ["React", "Node.js", "MongoDB", "Vercel"],
  },
];
