import Image from "next/image";
import { BookOpenText, BracketsCurly, Brain, Browser, Bug, ChatCircleDots, Code, Cube, Database, File, GitBranch, Globe, Lightbulb, Lightning, ListChecks, Plug, ShieldCheck, Terminal, TestTube, UsersThree, Wrench } from "@phosphor-icons/react/dist/ssr";
import {
  siDocker, siFastapi, siGit, siHibernate, siHtml5, siJira, siJunit5, siJavascript,
  siPostgresql, siPython, siReact, siRedis, siSpring, siSpringboot,
  siSqlite, siSelenium, siSwagger, siTypescript, type SimpleIcon,
} from "simple-icons";
import styles from "./expertise-stacks.module.css";

const categoryIcons = [UsersThree, BracketsCurly];
const brandIcons: Record<string, SimpleIcon> = {
  python: siPython, typescript: siTypescript, javascript: siJavascript, "spring boot": siSpringboot,
  "spring data jpa": siSpring, hibernate: siHibernate, "spring security": siSpring, fastapi: siFastapi,
  react: siReact, html5: siHtml5, postgresql: siPostgresql, redis: siRedis, sqlite: siSqlite,
  junit: siJunit5, selenium: siSelenium, git: siGit, docker: siDocker, "docker compose": siDocker,
  "openapi / swagger": siSwagger, "jira / jql": siJira,
};
const localBrandIcons: Record<string, string> = {
  java: "java", css3: "css3", playwright: "playwright",
};
const stackIcons: Record<string, typeof Code> = {
  java: Code, python: Terminal, typescript: BracketsCurly, javascript: BracketsCurly, sql: Database,
  "spring boot": Plug, "spring data jpa": Database, hibernate: Database, "spring security": ShieldCheck,
  fastapi: Lightning, "apis rest": Globe, "rest apis": Globe, jwt: ShieldCheck, react: Cube, html5: Browser,
  css3: Browser, postgresql: Database, redis: Lightning, sqlite: Database, "modelagem relacional": Database,
  "relational modeling": Database, junit: TestTube, mockito: TestTube, selenium: Browser, playwright: Browser,
  "testes unitários": TestTube, "unit tests": TestTube, "integração e e2e": Bug,
  "integration and e2e tests": Bug, git: GitBranch, docker: Cube, "docker compose": Cube,
  "openapi / swagger": File, "jira / jql": Wrench,
};
const softSkillIcons: Record<string, typeof Code> = {
  "pensamento analítico": Brain, "analytical thinking": Brain,
  "resolução de problemas": Lightbulb, "problem solving": Lightbulb,
  "organização e priorização": ListChecks, "organization and prioritization": ListChecks,
  "atenção a detalhes": Bug, "attention to detail": Bug,
  "aprendizado contínuo": BookOpenText, "continuous learning": BookOpenText,
  "comunicação técnica": ChatCircleDots, "technical communication": ChatCircleDots,
};

type ExpertiseCopy = {
  title: readonly [string, string];
  description: string;
  stamp: string;
  softSkills: readonly string[];
  hardSkillGroups: readonly { title: string; items: readonly string[] }[];
};

function SkillList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.items}>
      {items.map((item) => {
        const key = item.toLowerCase();
        const localLogo = localBrandIcons[key];
        const logo = brandIcons[key];
        const StackIcon = softSkillIcons[key] ?? stackIcons[key] ?? Code;
        return (
          <li className={styles.item} key={item}>
            <span className={styles.techIcon} aria-hidden="true">
              {localLogo ? (
                <Image src={`/icons/technologies/${localLogo}.svg`} alt="" width={20} height={20} unoptimized />
              ) : logo ? (
                <svg viewBox="0 0 24 24" role="img" aria-label={`${item} logo`} style={{ color: `#${logo.hex}` }}>
                  <path fill="currentColor" d={logo.path} />
                </svg>
              ) : <StackIcon size={18} weight="regular" />}
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function ExpertiseStacks({ copy, standalone = false }: { copy: ExpertiseCopy; standalone?: boolean }) {
  return (
    <section className={`${styles.section}${standalone ? ` ${styles.standalone}` : ""} cement-surface section-pad`} id="habilidades" aria-labelledby="expertise-title">
      <div className={styles.heading} data-reveal>
        <div className="section-heading">
          <h2 id="expertise-title">{copy.title[0]}<br />{copy.title[1]}</h2>
          <span className="heading-rule" aria-hidden="true" />
          <p>{copy.description}</p>
        </div>
        <span className={`${styles.stamp} mono`}>{copy.stamp}</span>
      </div>
      <div className={styles.grid}>
        <article className={styles.group} data-reveal>
          <header className={styles.groupHeading}>
            <span className={`${styles.number} mono`}>01</span>
            <span className={styles.categoryIcon}><UsersThree size={19} weight="light" aria-hidden="true" /></span>
            <h3>Soft Skills</h3>
          </header>
          <SkillList items={copy.softSkills} />
        </article>
        <article className={`${styles.group} ${styles.hardSkills}`} data-reveal>
          <header className={styles.groupHeading}>
            <span className={`${styles.number} mono`}>02</span>
            <span className={styles.categoryIcon}><BracketsCurly size={19} weight="light" aria-hidden="true" /></span>
            <h3>Hard Skills</h3>
          </header>
          <div className={styles.hardSkillGroups}>
            {copy.hardSkillGroups.map((group) => (
              <section className={styles.hardSkillCategory} key={group.title}>
                <h4>{group.title}</h4>
                <SkillList items={group.items} />
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
