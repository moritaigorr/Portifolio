import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { ContactCards } from "@/components/contact-cards";
import { TechnologyStack } from "@/components/technology-stack";
import { ExperienceSection } from "@/components/experience-page";
import { locales } from "@/data/locales";
import { getPortfolioPath, projects, type Locale } from "@/data/portfolio";

const location = "Sorocaba, SP";

export function PortfolioHome({ locale }: { locale: Locale }) {
  const { nav, hero, work, experience, contact, projects: projectCopy } = locales[locale];

  return (
    <main>
      <section className="hero dark-surface" id="inicio" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <SiteNav locale={locale} copy={nav} />
        <div className="hero-content">
          <div className="hero-main">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-mask"><span className="hero-title-line">Igor Morita</span></span>
            </h1>
            <div className="hero-meta">
              <p className="hero-role"><span aria-hidden="true">/</span> {hero.role}</p>
              <div className="hero-meta-location">
                <span className="hero-meta-separator" aria-hidden="true" />
                <p className="location"><span className="location-flag" role="img" aria-label="Brasil"><svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" rx="2" fill="#009b3a" /><path d="M14 2.2 25 10 14 17.8 3 10Z" fill="#ffdf00" /><circle cx="14" cy="10" r="4.4" fill="#002776" /></svg></span>{location}</p>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <Link className="hero-cta" href="#trabalhos">{hero.actionLabel}<span aria-hidden="true">↓</span></Link>
          </div>
        </div>
      </section>

      <section className="work-section light-surface section-pad" id="trabalhos" aria-labelledby="work-title">
        <div className="section-heading" data-reveal>
          <h2 id="work-title">{work.title}</h2>
          <span className="heading-rule" aria-hidden="true" />
        </div>
        <div className="project-list">
          {projects.filter((project) => !project.placeholder).map((project, index) => {
            const copy = projectCopy[project.slug];
            const href = getPortfolioPath(locale, project.slug);
            const visual = (
              <>
                <Image
                  src={project.image}
                  alt={project.placeholder ? "" : work.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 760px) 100vw, 58vw"
                  unoptimized={project.slug === "superstore-eda"}
                  className="project-image"
                />
                {!project.placeholder && <span className="visual-mark mono">{work.visualLabel} / {project.number}</span>}
                {project.placeholder && (
                  <svg className="placeholder-lock" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4.5" y="10" width="15" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" />
                  </svg>
                )}
              </>
            );

            return (
              <article className={`project-row${index % 2 ? " project-row-reverse" : ""}`} key={project.slug} data-reveal>
                {project.placeholder ? (
                  <div className="project-visual project-visual-placeholder" aria-hidden="true">{visual}</div>
                ) : (
                  <Link className="project-visual" href={href} aria-label={`${work.detailsLink}: ${copy.title}`}>
                    {visual}
                  </Link>
                )}
                <div className="project-copy">
                  <p className="project-meta mono">{copy.category}<span>/</span>{copy.organization}</p>
                  <h3>{copy.title}</h3>
                  <TechnologyStack stack={project.stack} />
                  <p className="project-description">{copy.description}</p>
                  {!project.placeholder && (
                    <Link className="text-link" href={href}>
                      {work.detailsLink} <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ExperienceSection copy={experience} />
      <footer className="contact-section dark-surface" id="contato" aria-labelledby="contact-title">
        <div className="contact-background" aria-hidden="true" />
        <div className="contact-content section-pad">
          <div className="contact-main" data-reveal>
            <h2 id="contact-title">{contact.title[0]}<br />{contact.title[1]}<span>.</span></h2>
            <div className="contact-aside">
              <ContactCards copy={contact} />
            </div>
          </div>
          <div className="footer-line mono">
            <a className="wordmark footer-wordmark" href="#inicio">IGOR MORITA SILVA</a>
            <span>{contact.footer} / {location}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
