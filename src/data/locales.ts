import type { Metadata } from "next";
import type { Locale, ProjectSlug, homeSections } from "./portfolio";

type ProjectCopy = {
  title: string;
  category: string;
  organization: string;
  description: string;
  context: string;
  challenge: string;
  approach: string;
  learning: string;
};

export type NavCopy = {
  homeLabel: string;
  navigationLabel: string;
  languageLabel: string;
  menu: string;
  close: string;
  links: Record<(typeof homeSections)[number], string>;
};

export type ContactCopy = {
  title: readonly [string, string];
  emailLabel: string;
  phoneLabel: string;
  callLabel: string;
  openProfile: string;
  copy: string;
  copied: string;
  failed: string;
  copiedStatus: string;
  failedStatus: string;
  resume: {
    label: string;
    title: string;
    href: string;
    openLabel: string;
  };
  footer: string;
};

type LocaleContent = {
  lang: string;
  openGraphLocale: string;
  metadataTitle: string;
  metadataDescription: string;
  openGraphDescription: string;
  nav: NavCopy;
  hero: {
    role: string;
    description: string;
    scroll: string;
    scrollLabel: string;
  };
  work: {
    title: readonly [string, string];
    description: string;
    visualLabel: string;
    detailsLink: string;
    imageAlt: string;
  };
  journey: {
    kicker: string;
    title: readonly [string, string];
    description: string;
    principle: string;
    timeline: readonly { year: string; text: string }[];
    education: string;
  };
  expertise: {
    title: readonly [string, string];
    description: string;
    groups: readonly { title: string; items: readonly string[] }[];
    certification: string;
  };
  contact: ContactCopy;
  caseStudy: {
    backLink: string;
    repository: string;
    labels: Record<"context" | "challenge" | "approach" | "learning", string>;
  };
  projects: Record<ProjectSlug, ProjectCopy>;
};

export const locales: Record<Locale, LocaleContent> = {
  pt: {
    lang: "pt-BR",
    openGraphLocale: "pt_BR",
    metadataTitle: "Igor Morita Silva — Engenheiro de Software",
    metadataDescription: "Portfólio de Igor Morita Silva, Engenheiro de Software com experiência em Java, Spring Boot, Python, FastAPI, React e TypeScript.",
    openGraphDescription: "APIs, aplicações corporativas e analytics com Java, Spring Boot, Python, FastAPI e React.",
    nav: {
      homeLabel: "Igor Morita Silva — início",
      navigationLabel: "Navegação principal",
      languageLabel: "Idioma",
      menu: "Menu",
      close: "Fechar",
      links: {
        inicio: "Início",
        trabalhos: "Trabalhos",
        jornada: "Jornada",
        habilidades: "Habilidades",
        contato: "Contato",
      },
    },
    hero: {
      role: "Engenheiro de Software · Backend & Full Stack",
      description: "",
      scroll: "Rolar",
      scrollLabel: "Rolar para trabalhos",
    },
    work: {
      title: ["Projetos", "e experiência"],
      description: "Projeto público em análise de dados e experiência profissional com APIs, aplicações corporativas e analytics.",
      visualLabel: "Portfólio",
      detailsLink: "Ver detalhes",
      imageAlt: "Composição abstrata de arquitetura em concreto",
    },
    journey: {
      kicker: "Trajetória",
      title: ["Software", "com propósito."],
      description: "Engenheiro de Software com experiência em aplicações corporativas, APIs REST e integrações. Atuação em backend com Java, Spring Boot, Python e FastAPI, além de React e TypeScript.",
      principle: "Interesse em construir sistemas confiáveis, com atenção a dados, segurança e qualidade de software.",
      timeline: [
        { year: "ABR. 2026", text: "Início como Engenheiro de Software na Evertec." },
        { year: "2026", text: "Desenvolvimento de APIs e fluxos para gestão de tickets." },
        { year: "2026", text: "Construção de analytics de qualidade com Python, FastAPI e Jira/JQL." },
        { year: "2030", text: "Previsão de conclusão do Bacharelado em Ciência da Computação." },
      ],
      education: "BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO · UNIVERSIDADE ANHANGUERA / CONCLUSÃO PREVISTA: 2030",
    },
    expertise: {
      title: ["Ferramentas", "e fundamentos"],
      description: "Ferramentas e práticas usadas no desenvolvimento de aplicações e integrações.",
      groups: [
        { title: "Linguagens", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
        { title: "Backend", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security", "FastAPI", "APIs REST", "JWT"] },
        { title: "Frontend", items: ["React", "TypeScript", "HTML5", "CSS3"] },
        { title: "Dados", items: ["PostgreSQL", "Redis", "SQLite", "Modelagem relacional"] },
        { title: "Qualidade", items: ["JUnit", "Mockito", "Selenium", "Playwright", "Testes unitários", "Integração e E2E"] },
        { title: "Ferramentas", items: ["Git", "Docker", "Docker Compose", "OpenAPI / Swagger", "Jira / JQL"] },
      ],
      certification: "AWS CLOUD SOLUTIONS ARCHITECT — EM ANDAMENTO · INGLÊS FLUENTE",
    },
    contact: {
      title: ["Vamos", "conversar"],
      emailLabel: "Email",
      phoneLabel: "Telefone",
      callLabel: "Ligar para Igor",
      openProfile: "Abrir perfil de",
      copy: "Copiar",
      copied: "Copiado",
      failed: "Falhou",
      copiedStatus: "E-mail copiado",
      failedStatus: "Não foi possível copiar o e-mail",
      resume: {
        label: "PDF · PT-BR · PRÉ-VISUALIZAR",
        title: "Currículo em português",
        href: "/cv/Igor_Morita_CV_ATS.pdf",
        openLabel: "Abrir currículo em português",
      },
      footer: "ENGENHEIRO DE SOFTWARE",
    },
    caseStudy: {
      backLink: "Voltar aos trabalhos",
      repository: "Ver repositório no GitHub",
      labels: { context: "Contexto", challenge: "Desafio", approach: "Abordagem", learning: "Aprendizado" },
    },
    projects: {
      "superstore-eda": {
        title: "Superstore EDA",
        category: "Projeto público · análise de dados",
        organization: "GitHub",
        description: "Análise exploratória de vendas em uma base fictícia de varejo, com limpeza de dados, estatísticas e visualizações.",
        context: "Projeto público de análise exploratória sobre o conjunto fictício Sample Superstore.",
        challenge: "Compreender a distribuição das vendas e comparar categorias de produtos e regiões.",
        approach: "Limpeza e exploração dos dados com Python, Pandas e NumPy; visualizações com Matplotlib e Seaborn.",
        learning: "O repositório inclui os dados, um notebook de análise e documentação em português e inglês.",
      },
      "gestao-de-tickets": {
        title: "Gestão de tickets",
        category: "Experiência profissional",
        organization: "Evertec · desde abr. 2026",
        description: "APIs REST e fluxos de atendimento com criação, priorização, transições de status e controle de acesso.",
        context: "Experiência profissional na Evertec em uma plataforma corporativa de atendimento e gestão de tickets.",
        challenge: "Implementar os fluxos de criação, atualização, priorização, mudança de status e controle de acesso.",
        approach: "APIs e serviços em Java e Spring Boot integrados a interfaces React e TypeScript, chatbot, histórico de conversas e notificações.",
        learning: "O trabalho envolve regras de negócio, autenticação, autorização, validação, tratamento de exceções e testes automatizados.",
      },
      "analytics-de-qualidade": {
        title: "Analytics de qualidade",
        category: "Experiência profissional",
        organization: "Evertec · desde abr. 2026",
        description: "APIs e dashboards para acompanhar métricas de qualidade de software com filtros e gráficos comparativos.",
        context: "Experiência profissional na Evertec em uma plataforma de analytics de qualidade de software.",
        challenge: "Disponibilizar indicadores de qualidade e acompanhar atividades e métricas por período.",
        approach: "APIs com Python e FastAPI, integração com Jira por JQL e dashboards em React e TypeScript com filtros e gráficos comparativos.",
        learning: "A atuação inclui sincronização, normalização e validação de dados, testes e investigação de falhas entre backend e frontend.",
      },
    },
  },
  en: {
    lang: "en",
    openGraphLocale: "en_US",
    metadataTitle: "Igor Morita Silva — Software Engineer",
    metadataDescription: "Portfolio of Igor Morita Silva, a software engineer with experience in Java, Spring Boot, Python, FastAPI, React, and TypeScript.",
    openGraphDescription: "APIs, enterprise applications, and analytics with Java, Spring Boot, Python, FastAPI, and React.",
    nav: {
      homeLabel: "Igor Morita Silva — home",
      navigationLabel: "Main navigation",
      languageLabel: "Language",
      menu: "Menu",
      close: "Close",
      links: {
        inicio: "Home",
        trabalhos: "Work",
        jornada: "Journey",
        habilidades: "Skills",
        contato: "Contact",
      },
    },
    hero: {
      role: "Software Engineer · Backend & Full Stack",
      description: "I build APIs with Java, Spring Boot, Python, and FastAPI, along with interfaces in React and TypeScript.",
      scroll: "Scroll",
      scrollLabel: "Scroll to work",
    },
    work: {
      title: ["Projects", "and experience"],
      description: "A public data analysis project and professional experience with APIs, enterprise applications, and analytics.",
      visualLabel: "Portfolio",
      detailsLink: "View details",
      imageAlt: "Abstract composition of concrete architecture",
    },
    journey: {
      kicker: "Career journey",
      title: ["Software", "with purpose."],
      description: "Software engineer with experience in enterprise applications, REST APIs, and integrations. I work with Java, Spring Boot, Python, and FastAPI on the backend, as well as React and TypeScript.",
      principle: "I’m interested in building reliable systems with attention to data, security, and software quality.",
      timeline: [
        { year: "APR. 2026", text: "Started as a software engineer at Evertec." },
        { year: "2026", text: "Developed APIs and workflows for ticket management." },
        { year: "2026", text: "Built software quality analytics with Python, FastAPI, and Jira/JQL." },
        { year: "2030", text: "Expected completion of my bachelor’s degree in computer science." },
      ],
      education: "BACHELOR’S DEGREE IN COMPUTER SCIENCE · UNIVERSIDADE ANHANGUERA / EXPECTED GRADUATION: 2030",
    },
    expertise: {
      title: ["Tools", "and fundamentals"],
      description: "Tools and practices I use to develop applications and integrations.",
      groups: [
        { title: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
        { title: "Backend", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security", "FastAPI", "REST APIs", "JWT"] },
        { title: "Frontend", items: ["React", "TypeScript", "HTML5", "CSS3"] },
        { title: "Data", items: ["PostgreSQL", "Redis", "SQLite", "Relational modeling"] },
        { title: "Quality", items: ["JUnit", "Mockito", "Selenium", "Playwright", "Unit tests", "Integration and E2E tests"] },
        { title: "Tools", items: ["Git", "Docker", "Docker Compose", "OpenAPI / Swagger", "Jira / JQL"] },
      ],
      certification: "AWS CLOUD SOLUTIONS ARCHITECT — IN PROGRESS · FLUENT ENGLISH",
    },
    contact: {
      title: ["Let’s", "talk"],
      emailLabel: "Email",
      phoneLabel: "Phone",
      callLabel: "Call Igor",
      openProfile: "Open profile on",
      copy: "Copy",
      copied: "Copied",
      failed: "Failed",
      copiedStatus: "Email copied",
      failedStatus: "Could not copy the email address",
      resume: {
        label: "PDF · EN · PREVIEW",
        title: "Resume in English",
        href: "/cv/Igor_Morita_Resume_EN.pdf",
        openLabel: "Open the English resume",
      },
      footer: "SOFTWARE ENGINEER",
    },
    caseStudy: {
      backLink: "Back to work",
      repository: "View repository on GitHub",
      labels: { context: "Context", challenge: "Challenge", approach: "Approach", learning: "What I learned" },
    },
    projects: {
      "superstore-eda": {
        title: "Superstore EDA",
        category: "Public project · data analysis",
        organization: "GitHub",
        description: "Exploratory analysis of sales in a fictional retail dataset, including data cleaning, statistics, and visualizations.",
        context: "A public exploratory data analysis project using the fictional Sample Superstore dataset.",
        challenge: "Understand the distribution of sales and compare product categories and regions.",
        approach: "I cleaned and explored the data with Python, Pandas, and NumPy, and created visualizations with Matplotlib and Seaborn.",
        learning: "The repository includes the data, an analysis notebook, and documentation in Portuguese and English.",
      },
      "gestao-de-tickets": {
        title: "Ticket management",
        category: "Professional experience",
        organization: "Evertec · since Apr. 2026",
        description: "REST APIs and support workflows for creating and prioritizing tickets, changing their status, and controlling access.",
        context: "Work at Evertec on an enterprise customer support and ticket management platform.",
        challenge: "Implement workflows for creating, updating, and prioritizing tickets, changing their status, and controlling access.",
        approach: "I integrated Java and Spring Boot APIs and services with React and TypeScript interfaces, a chatbot, conversation history, and notifications.",
        learning: "The work involves business rules, authentication, authorization, validation, exception handling, and automated testing.",
      },
      "analytics-de-qualidade": {
        title: "Software quality analytics",
        category: "Professional experience",
        organization: "Evertec · since Apr. 2026",
        description: "APIs and dashboards for tracking software quality metrics with filters and comparison charts.",
        context: "Work at Evertec on a software quality analytics platform.",
        challenge: "Make quality indicators available and track activity and metrics over time.",
        approach: "I used Python and FastAPI for the APIs, JQL for the Jira integration, and React and TypeScript for dashboards with filters and comparison charts.",
        learning: "The work includes data synchronization, normalization, and validation, as well as testing and investigating failures across the backend and frontend.",
      },
    },
  },
};

export function getPortfolioMetadata(locale: Locale): Metadata {
  const content = locales[locale];

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
    openGraph: {
      title: content.metadataTitle,
      description: content.openGraphDescription,
      locale: content.openGraphLocale,
      type: "website",
    },
  };
}
