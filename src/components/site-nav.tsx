"use client";

import { useState, useSyncExternalStore } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import type { NavCopy } from "@/data/locales";
import { homeSections, type Locale } from "@/data/portfolio";

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

export function SiteNav({ locale, copy }: { locale: Locale; copy: NavCopy }) {
  const [open, setOpen] = useState(false);
  const fragment = useSyncExternalStore(subscribeToHashChange, getHomeFragment, getServerFragment);

  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label={copy.homeLabel}>
        IGOR MORITA SILVA
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
        {homeSections.map((section) => (
          <a href={`#${section}`} key={section} onClick={() => setOpen(false)}>{copy.links[section]}</a>
        ))}
      </nav>
      <LanguageSwitch locale={locale} label={copy.languageLabel} fragment={fragment} />
    </header>
  );
}
