export type TechItem = {
  name: string;
  tag: string;
};

export type TechGroup = {
  id: string;
  title: string;
  subtitle: string;
  iconName: "terminal" | "server" | "tools";
  items: TechItem[];
};

export const TECH_GROUPS: TechGroup[] = [
  {
    id: "front",
    title: "Front-end",
    subtitle: "UI & experience",
    iconName: "terminal",
    items: [
      { name: "React", tag: "Library" },
      { name: "Angular", tag: "Framework" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "JavaScript", tag: "ES6+" },
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
    ],
  },
  {
    id: "back",
    title: "Back-end",
    subtitle: "APIs & infra",
    iconName: "server",
    items: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Spring Boot", tag: "Java" },
      { name: "Express", tag: "Node" },
      { name: "REST APIs", tag: "Architecture" },
      { name: "PostgreSQL", tag: "SQL" },
      { name: "MongoDB", tag: "NoSQL" },
    ],
  },
  {
    id: "ops",
    title: "DevOps & Tooling",
    subtitle: "Delivery pipeline",
    iconName: "tools",
    items: [
      { name: "Git / GitHub", tag: "VCS" },
      { name: "Docker", tag: "Containers" },
      { name: "Vercel", tag: "Deploy" },
      { name: "Cloud deploy", tag: "Hosting" },
      { name: "CI / CD", tag: "Pipeline" },
    ],
  },
];
