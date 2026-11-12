import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { ContactCards } from "@/components/contact-cards";
import { TechnologyStack } from "@/components/technology-stack";
import { locales } from "@/data/locales";
import { getPortfolioPath, projects, type Locale } from "@/data/portfolio";

const location = "Sorocaba, SP";

export function PortfolioHome({ locale }: { locale: Locale }) {
  const { nav, hero, work, journey, expertise, contact, projects: projectCopy } = locales[locale];

  return (
    <main>
      <section className="hero dark-surface" id="inicio" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <SiteNav locale={locale} copy={nav} />
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            <span className="hero-title-mask"><span className="hero-title-line">Igor Morita</span></span>
            <span className="hero-title-mask"><span className="hero-title-line">Silva.</span></span>
          </h1>
          <p className="hero-role"><span aria-hidden="true">/</span> {hero.role}</p>
          <div className="hero-bottom">
            {hero.description && <p>{hero.description}</p>}
            <p className="location">{location}</p>
          </div>
        </div>
        <a className="scroll-cue" href="#trabalhos" aria-label={hero.scrollLabel}>
          <span>{hero.scroll}</span><span className="scroll-arrow" aria-hidden="true">↓</span>
        </a>
        <span className="hero-index mono" aria-hidden="true">01 — 05</span>
      </section>

      <section className="work-section light-surface section-pad" id="trabalhos" aria-labelledby="work-title">
        <div className="section-heading" data-reveal>
          <h2 id="work-title">{work.title[0]}<br />{work.title[1]}</h2>
          <span className="heading-rule" aria-hidden="true" />
          <p>{work.description}</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => {
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

      <section className="journey-section cement-surface section-pad" id="jornada" aria-labelledby="journey-title">
        <div className="journey-intro" data-reveal>
          <p className="section-kicker mono">{journey.kicker} / {location}</p>
          <h2 id="journey-title">{journey.title[0]}<br />{journey.title[1]}</h2>
          <p className="journey-description">{journey.description}</p>
          <div className="principle-block">
            <span className="principle-mark" aria-hidden="true">“</span>
            <p>{journey.principle}</p>
          </div>
        </div>
        <ol className="timeline">
          {journey.timeline.map((item, index) => (
            <li className="timeline-item" key={`${item.year}-${index}`} data-reveal>
              <span className={`timeline-dot${index === 0 ? " is-active" : ""}`} aria-hidden="true" />
              <p className="timeline-year mono">{item.year}</p>
              <p className="timeline-copy">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="demo-note mono">{journey.education}</p>
      </section>

      <section className="expertise-section light-surface section-pad" id="habilidades" aria-labelledby="expertise-title">
        <div className="section-heading expertise-heading" data-reveal>
          <h2 id="expertise-title">{expertise.title[0]}<br />{expertise.title[1]}</h2>
          <span className="heading-rule" aria-hidden="true" />
          <p>{expertise.description}</p>
        </div>
        <div className="expertise-grid">
          {expertise.groups.map((group, index) => (
            <div className="expertise-column" key={group.title} data-reveal>
              <span className="expertise-number mono">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="demo-note mono">{expertise.certification}</p>
      </section>

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
