"use client";

import { useState, useSyncExternalStore } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import type { NavCopy } from "@/data/locales";
import { getExpertisePath, getPortfolioPath, homeSections, navigationItems, type Locale } from "@/data/portfolio";

function subscribeToHashChange(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHomeFragment() {
  const { hash } = window.location;
  return homeSections.some((section) => hash === `#${section}`) ? hash : "";
}

function getServerFragment() {
  return "";
}

export function SiteNav({ locale, copy, page = "home" }: { locale: Locale; copy: NavCopy; page?: "home" | "expertise" }) {
  const [open, setOpen] = useState(false);
  const fragment = useSyncExternalStore(subscribeToHashChange, getHomeFragment, getServerFragment);

  return (
    <header className="site-header">
      <a className="wordmark" href={`${getPortfolioPath(locale)}#inicio`} aria-label={copy.homeLabel}>
        <span aria-hidden="true">IM</span><span className="wordmark-accent" aria-hidden="true">.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? copy.close : copy.menu}
      </button>
      <nav id="primary-navigation" className={`main-nav${open ? " is-open" : ""}`} aria-label={copy.navigationLabel}>
        {navigationItems.map((section) => {
          const href = section === "habilidades" ? getExpertisePath(locale) : `${getPortfolioPath(locale)}#${section}`;
          return <a href={href} key={section} onClick={() => setOpen(false)} aria-current={fragment === "#" + section ? "location" : undefined}>{copy.links[section]}</a>;
        })}
      </nav>
      <LanguageSwitch locale={locale} label={copy.languageLabel} page={page} fragment={page === "home" ? fragment : ""} />
    </header>
  );
}
