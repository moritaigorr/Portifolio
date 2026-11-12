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
    galleryTitle: string;
    galleryDescription: string;
    desktopImageAlt: string;
    tabletImageAlt: string;
    mobileImageAlt: string;
    desktopCaption: string;
    tabletCaption: string;
    mobileCaption: string;
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
      imageAlt: "Dashboard do FlowPay exibido em um laptop sobre uma mesa",
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
      galleryTitle: "O produto em uso",
      galleryDescription: "Capturas desktop, tablet e mobile registradas na aceitação local; todos os dados exibidos são sintéticos.",
      desktopImageAlt: "Dashboard do FlowPay aberto em uma tela desktop, com pagamentos e indicadores de demonstração",
      tabletImageAlt: "Dashboard do FlowPay adaptado para uma tela de tablet",
      mobileImageAlt: "Dashboard do FlowPay adaptado para uma tela de celular",
      desktopCaption: "Visão geral · desktop",
      tabletCaption: "Visão geral · tablet",
      mobileCaption: "Visão geral · mobile",
      labels: { context: "Contexto", challenge: "Desafio", approach: "Abordagem", learning: "Aprendizado" },
    },
    projects: {
      "superstore-eda": {
        title: "FlowPay",
        category: "Projeto pessoal · simulação de pagamentos",
        organization: "GitHub",
        description: "O FlowPay simula um fluxo de pagamentos de ponta a ponta. O painel React acompanha as operações, enquanto uma API Java cuida de tentativas repetidas e mudanças concorrentes com segurança. Funciona com dados fictícios: não movimenta dinheiro nem se conecta a bancos ou processadores.",
        context: "Simulação local de um fluxo de pagamentos em um workspace com dados sintéticos.",
        challenge: "Resistir a retries, concorrência e acesso cruzado sem duplicar ou corromper operações.",
        approach: "Monólito modular Java/Spring Boot, transações PostgreSQL e painel React/TypeScript com sessão server-side.",
        learning: "Garantias, evidências locais e limites da simulação estão detalhados abaixo; não há implantação pública.",
      },
      "gestao-de-tickets": {
        title: "暂未公开",
        category: "项目展示",
        organization: "目前 · 暂无项目",
        description: "目前还没有可展示的项目，新的内容正在整理中，敬请期待。",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        challenge: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        approach: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        learning: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      },
      "analytics-de-qualidade": {
        title: "暂无可展示项目",
        category: "作品集更新",
        organization: "持续 · 更新中",
        description: "这里暂时没有项目。待有作品可以分享时，我会在这里更新。",
        context: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        challenge: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
        approach: "Aenean lacinia bibendum nulla sed consectetur, cras mattis consectetur.",
        learning: "Maecenas faucibus mollis interdum, donec ullamcorper nulla non metus.",
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
      description: "",
      scroll: "Scroll",
      scrollLabel: "Scroll to work",
    },
    work: {
      title: ["Projects", "and experience"],
      description: "A public data analysis project and professional experience with APIs, enterprise applications, and analytics.",
      visualLabel: "Portfolio",
      detailsLink: "View details",
      imageAlt: "FlowPay dashboard displayed on a laptop on a desk",
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
      galleryTitle: "The product in use",
      galleryDescription: "Desktop, tablet, and mobile captures from local acceptance; all displayed data is synthetic.",
      desktopImageAlt: "FlowPay dashboard on a desktop screen, showing sample payments and metrics",
      tabletImageAlt: "FlowPay dashboard adapted to a tablet screen",
      mobileImageAlt: "FlowPay dashboard adapted to a mobile screen",
      desktopCaption: "Overview · desktop",
      tabletCaption: "Overview · tablet",
      mobileCaption: "Overview · mobile",
      labels: { context: "Context", challenge: "Challenge", approach: "Approach", learning: "What I learned" },
    },
    projects: {
      "superstore-eda": {
        title: "FlowPay",
        category: "Personal project · payment simulation",
        organization: "GitHub",
        description: "FlowPay simulates an end-to-end payment workflow. A React dashboard follows each operation while a Java API handles retries and concurrent state changes safely. It uses synthetic data: it does not move money or connect to banks or payment processors.",
        context: "A local simulation of a payment workflow in a workspace with synthetic data.",
        challenge: "Withstand retries, concurrency, and cross-tenant access without duplicating or corrupting operations.",
        approach: "A modular Java/Spring Boot monolith, PostgreSQL transactions, and a React/TypeScript dashboard with server-side sessions.",
        learning: "Guarantees, local evidence, and demo limits are detailed below; there is no public deployment.",
      },
      "gestao-de-tickets": {
        title: "暂未公开",
        category: "项目展示",
        organization: "目前 · 暂无项目",
        description: "目前还没有可展示的项目，新的内容正在整理中，敬请期待。",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        challenge: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        approach: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        learning: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      },
      "analytics-de-qualidade": {
        title: "暂无可展示项目",
        category: "作品集更新",
        organization: "持续 · 更新中",
        description: "这里暂时没有项目。待有作品可以分享时，我会在这里更新。",
        context: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        challenge: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
        approach: "Aenean lacinia bibendum nulla sed consectetur, cras mattis consectetur.",
        learning: "Maecenas faucibus mollis interdum, donec ullamcorper nulla non metus.",
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
