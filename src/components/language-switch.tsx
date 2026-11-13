import Link from "next/link";
import { getExpertisePath, getPortfolioPath, type Locale, type ProjectSlug } from "@/data/portfolio";

const languages = [
  { locale: "pt", lang: "pt-BR", abbreviation: "PT", name: "PT — Português" },
  { locale: "en", lang: "en", abbreviation: "EN", name: "EN — English" },
] as const;

export function LanguageSwitch({ locale, label, slug, page = "home", fragment = "" }: {
  locale: Locale;
  label: string;
  slug?: ProjectSlug;
  page?: "home" | "expertise";
  fragment?: string;
}) {
  return (
    <nav className="language-switch mono" aria-label={label}>
      {languages.map((language) => (
        <Link
          key={language.locale}
          href={(page === "expertise" ? getExpertisePath(language.locale) : getPortfolioPath(language.locale, slug)) + fragment}
          hrefLang={language.lang}
          lang={language.lang}
          aria-label={language.name}
          aria-current={language.locale === locale ? "page" : undefined}
          prefetch={false}
        >
          {language.abbreviation}
        </Link>
      ))}
    </nav>
  );
}
