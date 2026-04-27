export type Education = {
  year: string;
  degree: string;
  institution: string;
  status: "concluded" | "ongoing";
  badgeLabel: string;
};

export const EDUCATION: Education[] = [
  {
    year: "2024",
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "IBMEC",
    status: "concluded",
    badgeLabel: "Concluído",
  },
  {
    year: "Em curso",
    degree: "Pós-Graduação em Desenvolvimento Full Stack",
    institution: "Instituto INFNET",
    status: "ongoing",
    badgeLabel: "Cursando",
  },
];
