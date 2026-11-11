export type Locale = "pt" | "en";

export const homeSections = ["inicio", "trabalhos", "jornada", "habilidades", "contato"] as const;

export const projects = [
  {
    number: "01",
    stack: "PYTHON · PANDAS · NUMPY · MATPLOTLIB · SEABORN",
    image: "/images/compasso.png",
    slug: "superstore-eda",
    href: "https://github.com/moritaigorr/Sample-Superstore-Dataset",
  },
  {
    number: "02",
    stack: "JAVA · SPRING BOOT · REACT · TYPESCRIPT",
    image: "/images/estudio.png",
    slug: "gestao-de-tickets",
  },
  {
    number: "03",
    stack: "PYTHON · FASTAPI · REACT · TYPESCRIPT · JIRA/JQL",
    image: "/images/traco.png",
    slug: "analytics-de-qualidade",
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getPortfolioPath(locale: Locale, slug?: ProjectSlug) {
  const prefix = locale === "en" ? "/en" : "";
  return slug ? `${prefix}/projetos/${slug}` : prefix || "/";
}

export function generateProjectStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
