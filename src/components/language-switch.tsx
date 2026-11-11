import Link from "next/link";
import { getPortfolioPath, type Locale, type ProjectSlug } from "@/data/portfolio";

const languages = [
  { locale: "pt", lang: "pt-BR", abbreviation: "PT", name: "PT — Português" },
  { locale: "en", lang: "en", abbreviation: "EN", name: "EN — English" },
] as const;

export function LanguageSwitch({ locale, label, slug, fragment = "" }: {
  locale: Locale;
  label: string;
  slug?: ProjectSlug;
  fragment?: string;
}) {
  return (
    <nav className="language-switch mono" aria-label={label}>
      {languages.map((language) => (
        <Link
          key={language.locale}
          href={getPortfolioPath(language.locale, slug) + fragment}
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
