import Image from "next/image";
import type { LocaleContent } from "@/data/locales";

export function ExperienceSection({ copy }: { copy: LocaleContent["experience"] }) {
  const employmentPeriod = copy.companyPeriod.replace(/^Evertec · /, "");

  return (
    <section className="experience-section light-surface" id="experiencia" aria-labelledby="experience-title">
      <header className="experience-intro dark-surface section-pad">
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
        <p className="experience-technologies mono">{copy.technologies}</p>
      </div>
    </section>
  );
}
