import Image from "next/image";
import { siFastapi, siJira, siPython, siSpringboot, type SimpleIcon } from "simple-icons";
import type { LocaleContent } from "@/data/locales";

const technologyIcons: Record<string, SimpleIcon> = {
  "spring boot": siSpringboot,
  python: siPython,
  fastapi: siFastapi,
  "jira/jql": siJira,
};

export function ExperienceSection({ copy }: { copy: LocaleContent["experience"] }) {
  const employmentPeriod = copy.companyPeriod.replace(/^Evertec · /, "");

  return (
    <section className="experience-section dark-surface" id="experiencia" aria-labelledby="experience-title">
      <header className="experience-intro section-pad">
        <div>
          <h2 id="experience-title">{copy.title}</h2>
          <p className="experience-role"><span aria-hidden="true">/</span> {copy.role}</p>
        </div>
        <div className="experience-company">
          <Image className="experience-logo" src="/images/evertec-logo.svg" alt="Evertec" width={200} height={40} />
          <p className="experience-period mono">{employmentPeriod}</p>
        </div>
      </header>
      <div className="experience-details section-pad">
        <h3 className="experience-subtitle">{copy.sectionTitle}</h3>
        <div className="experience-contributions">
          {copy.contributions.map((item, index) => (
            <article className="experience-contribution" key={item.title}>
              <span className="experience-number mono">0{index + 1}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <ul className="experience-technologies mono" aria-label={copy.technologies}>
          {copy.technologies.split(" · ").map((technology) => {
            const icon = technologyIcons[technology.toLowerCase()];
            return (
              <li className="experience-technology" key={technology}>
                <span className="experience-technology-icon" aria-hidden="true">
                  {icon ? (
                    <svg viewBox="0 0 24 24" style={{ color: `#${icon.hex}` }}>
                      <path fill="currentColor" d={icon.path} />
                    </svg>
                  ) : (
                    <Image src="/icons/technologies/java.svg" alt="" width={20} height={20} unoptimized />
                  )}
                </span>
                <span>{technology}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
