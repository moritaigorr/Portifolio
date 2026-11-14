export type Locale = "pt" | "en";

export const homeSections = ["inicio", "trabalhos", "experiencia", "habilidades", "contato"] as const;
export const navigationItems = homeSections;

export const projects = [
  {
    number: "01",
    stack: "JAVA 21 · SPRING BOOT · POSTGRESQL · REACT · TYPESCRIPT",
    image: "/images/flowpay-laptop.png",
    slug: "superstore-eda",
    placeholder: false,
    href: "https://github.com/moritaigorr/FlowPay",
  },
  {
    number: "02",
    stack: "NOVOS PROJETOS EM BREVE",
    image: "/images/estudio.png",
    slug: "gestao-de-tickets",
    placeholder: true,
  },
  {
    number: "03",
    stack: "PORTFÓLIO EM ATUALIZAÇÃO",
    image: "/images/traco.png",
    slug: "analytics-de-qualidade",
    placeholder: true,
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getPortfolioPath(locale: Locale, slug?: ProjectSlug) {
  const prefix = locale === "en" ? "/en" : "";
  return slug ? `${prefix}/projetos/${slug}` : prefix || "/";
}

export function getExpertisePath(locale: Locale) {
  return locale === "en" ? "/en/skills" : "/habilidades";
}

export function generateProjectStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
