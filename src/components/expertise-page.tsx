import { ExpertiseStacks } from "@/components/expertise-stacks";
import { SiteNav } from "@/components/site-nav";
import { locales } from "@/data/locales";
import type { Locale } from "@/data/portfolio";

export function ExpertisePage({ locale }: { locale: Locale }) {
  const copy = locales[locale];

  return (
    <main className="expertise-page">
      <div className="dark-surface">
        <SiteNav locale={locale} copy={copy.nav} page="expertise" />
      </div>
      <ExpertiseStacks copy={copy.expertise} standalone />
    </main>
  );
}
