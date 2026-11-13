import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitch } from "@/components/language-switch";
import { FlowPayTechnicalContent } from "@/components/flowpay-technical-content";
import { TechnologyStack } from "@/components/technology-stack";
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
  const isFlowPay = project.slug === "superstore-eda";
  const homePath = getPortfolioPath(locale);
  const workPath = `${homePath}#trabalhos`;

  return (
    <main className="case-page">
      <header className="case-header">
        <Link className="wordmark case-wordmark" href={homePath} aria-label={content.nav.homeLabel}>
          <span aria-hidden="true">IM</span><span className="wordmark-accent" aria-hidden="true">.</span>
        </Link>
        <LanguageSwitch locale={locale} label={content.nav.languageLabel} slug={project.slug} />
        <Link className="back-link mono" href={workPath}><span aria-hidden="true">← </span>{content.caseStudy.backLink}</Link>
      </header>
      <section className="case-hero section-pad">
        <p className="section-kicker mono">{copy.category} / {project.number}</p>
        <h1>{copy.title}<span>.</span></h1>
        <p className="case-summary">{copy.description}</p>
        <TechnologyStack stack={project.stack} />
        {"href" in project && (
          <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
            {content.caseStudy.repository} <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>
      {isFlowPay ? (
        <section className="case-gallery section-pad" aria-labelledby="case-gallery-title">
          <div className="case-gallery-intro">
            <h2 className="section-kicker mono" id="case-gallery-title">{content.caseStudy.galleryTitle}</h2>
            <p>{content.caseStudy.galleryDescription}</p>
          </div>
          <div className="case-gallery-grid">
            <figure className="case-gallery-item case-gallery-desktop">
              <Image
                src="https://raw.githubusercontent.com/moritaigorr/FlowPay/main/docs/verification/screenshots/r19-overview-1440.png"
                alt={content.caseStudy.desktopImageAlt}
                width={1408}
                height={1000}
                priority
                unoptimized
              />
              <figcaption className="mono">{content.caseStudy.desktopCaption}</figcaption>
            </figure>
            <figure className="case-gallery-item case-gallery-tablet">
              <Image
                src="https://raw.githubusercontent.com/moritaigorr/FlowPay/main/docs/verification/screenshots/r19-overview-768.png"
                alt={content.caseStudy.tabletImageAlt}
                width={768}
                height={1432}
                unoptimized
              />
              <figcaption className="mono">{content.caseStudy.tabletCaption}</figcaption>
            </figure>
            <figure className="case-gallery-item case-gallery-mobile">
              <Image
                src="https://raw.githubusercontent.com/moritaigorr/FlowPay/main/docs/verification/screenshots/r19-overview-375.png"
                alt={content.caseStudy.mobileImageAlt}
                width={375}
                height={1485}
                unoptimized
              />
              <figcaption className="mono">{content.caseStudy.mobileCaption}</figcaption>
            </figure>
          </div>
        </section>
      ) : (
        <figure className={`case-image${project.placeholder ? " case-image-placeholder" : ""}`}>
          <Image src={project.image} alt={project.placeholder ? "" : content.work.imageAlt} fill priority sizes="100vw" />
        </figure>
      )}
      <section className="case-content section-pad">
        {isFlowPay ? (
          <FlowPayTechnicalContent locale={locale} />
        ) : (
          <div className="case-grid">
            {detailSections.map((section) => (
              <div key={section}>
                <h2 className="section-kicker mono">{content.caseStudy.labels[section]}</h2>
                <p>{copy[section]}</p>
              </div>
            ))}
          </div>
        )}
        <Link className="text-link" href={workPath}>← {content.caseStudy.backLink}</Link>
      </section>
      <footer className="case-footer mono">IGOR MORITA SILVA <span>© {new Date().getFullYear()}</span></footer>
    </main>
  );
}
