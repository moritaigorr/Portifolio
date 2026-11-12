import Image from "next/image";

const technologies = [
  { name: "Java 21", key: "java" },
  { name: "Spring Boot", key: "spring" },
  { name: "PostgreSQL", key: "postgresql" },
  { name: "React", key: "react" },
  { name: "TypeScript", key: "typescript" },
] as const;

function getTechnology(name: string) {
  return technologies.find((technology) => technology.name.toLowerCase() === name.toLowerCase());
}

export function TechnologyStack({ stack }: { stack: string }) {
  const items = stack.split("·").map((item) => item.trim()).filter(Boolean);

  if (!items.length || !items.every(getTechnology)) {
    return <p className="project-stack mono">{stack}</p>;
  }

  return (
    <ul className="project-stack technology-stack">
      {items.map((name) => {
        const technology = getTechnology(name)!;

        return (
          <li className={`technology-item technology-${technology.key}`} key={technology.key}>
            <span className="technology-icon" aria-hidden="true">
              <Image src={`/icons/technologies/${technology.key}.svg`} alt="" width={24} height={24} unoptimized />
            </span>
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
