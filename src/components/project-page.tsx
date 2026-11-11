import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitch } from "@/components/language-switch";
import { locales } from "@/data/locales";
import { getPortfolioPath, projects, type Locale } from "@/data/portfolio";

const detailSections = ["context", "challenge", "approach", "learning"] as const;

function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export function getProjectMetadata(locale: Locale, slug: string): Metadata {
  const project = getProject(slug);
  const content = locales[locale];
  const { title, description } = content.projects[project.slug];

  return {
    title: `${title} — Igor Morita Silva`,
    description,
    openGraph: {
      title: `${title} — Igor Morita Silva`,
      description,
      locale: content.openGraphLocale,
      type: "website",
    },
  };
}

export function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const project = getProject(slug);
  const content = locales[locale];
  const copy = content.projects[project.slug];
  const homePath = getPortfolioPath(locale);
  const workPath = `${homePath}#trabalhos`;

  return (
    <main className="case-page">
      <header className="case-header">
        <Link className="wordmark case-wordmark" href={homePath} aria-label={content.nav.homeLabel}>IGOR MORITA SILVA</Link>
        <LanguageSwitch locale={locale} label={content.nav.languageLabel} slug={project.slug} />
        <Link className="back-link mono" href={workPath}><span aria-hidden="true">← </span>{content.caseStudy.backLink}</Link>
      </header>
      <section className="case-hero section-pad">
        <p className="section-kicker mono">{copy.category} / {project.number}</p>
        <h1>{copy.title}<span>.</span></h1>
        <p className="case-summary">{copy.description}</p>
        <p className="project-stack mono">{project.stack}</p>
        {"href" in project && (
          <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
            {content.caseStudy.repository} <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>
      <figure className="case-image">
        <Image src={project.image} alt={content.work.imageAlt} fill priority sizes="100vw" />
      </figure>
      <section className="case-content section-pad">
        <div className="case-grid">
          {detailSections.map((section) => (
            <div key={section}>
              <h2 className="section-kicker mono">{content.caseStudy.labels[section]}</h2>
              <p>{copy[section]}</p>
            </div>
          ))}
        </div>
        <Link className="text-link" href={workPath}>← {content.caseStudy.backLink}</Link>
      </section>
      <footer className="case-footer mono">IGOR MORITA SILVA <span>© {new Date().getFullYear()}</span></footer>
    </main>
  );
}
