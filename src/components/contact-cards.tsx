"use client";

import { useState } from "react";
import {
  ArrowUpRightIcon,
  CopyIcon,
  EnvelopeSimpleIcon,
  FilePdfIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import type { ContactCopy } from "@/data/locales";

const email = "moritaigorr@gmail.com";
const phone = "+55 11 99260-3932";

const profiles = [
  {
    label: "GitHub",
    value: "@moritaigorr",
    href: "https://github.com/moritaigorr",
    Icon: GithubLogoIcon,
  },
  {
    label: "LinkedIn",
    value: "/in/igor-morita",
    href: "https://www.linkedin.com/in/igor-morita/",
    Icon: LinkedinLogoIcon,
  },
] as const;

export function ContactCards({ copy }: { copy: ContactCopy }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const { resume } = copy;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    window.setTimeout(() => setCopyState("idle"), 1800);
  }

  return (
    <div className="contact-cards">
      <article className="contact-card">
        <span className="contact-icon" aria-hidden="true"><EnvelopeSimpleIcon size={21} weight="regular" /></span>
        <div className="contact-card-copy">
          <span className="contact-label mono">{copy.emailLabel}</span>
          <a className="contact-value" href={`mailto:${email}`}>{email}</a>
        </div>
        <button className="copy-email" type="button" onClick={copyEmail}>
          <CopyIcon size={17} weight="regular" aria-hidden="true" />
          <span>{copyState === "copied" ? copy.copied : copyState === "error" ? copy.failed : copy.copy}</span>
        </button>
        <span className="sr-only" aria-live="polite">
          {copyState === "copied" ? copy.copiedStatus : copyState === "error" ? copy.failedStatus : ""}
        </span>
      </article>

      <a className="contact-card contact-card-link" href="tel:+5511992603932">
        <span className="contact-icon" aria-hidden="true"><PhoneIcon size={21} weight="regular" /></span>
        <span className="contact-card-copy">
          <span className="contact-label mono">{copy.phoneLabel}</span>
          <span className="contact-value">{phone}</span>
        </span>
        <ArrowUpRightIcon className="contact-arrow" size={19} weight="regular" aria-hidden="true" />
        <span className="sr-only">{copy.callLabel}</span>
      </a>

      {profiles.map(({ label, value, href, Icon }) => (
        <a className="contact-card contact-card-link" href={href} key={label} target="_blank" rel="noreferrer">
          <span className="contact-icon" aria-hidden="true"><Icon size={21} weight="regular" /></span>
          <span className="contact-card-copy">
            <span className="contact-label mono">{label}</span>
            <span className="contact-value">{value}</span>
          </span>
          <ArrowUpRightIcon className="contact-arrow" size={19} weight="regular" aria-hidden="true" />
          <span className="sr-only">{copy.openProfile} {label}</span>
        </a>
      ))}

      <a className="contact-card contact-card-link" href={resume.href} target="_blank" rel="noreferrer">
        <span className="contact-icon" aria-hidden="true"><FilePdfIcon size={21} weight="regular" /></span>
        <span className="contact-card-copy">
          <span className="contact-label mono">{resume.label}</span>
          <span className="contact-value">{resume.title}</span>
        </span>
        <ArrowUpRightIcon className="contact-arrow" size={19} weight="regular" aria-hidden="true" />
        <span className="sr-only">{resume.openLabel}</span>
      </a>
    </div>
  );
}
