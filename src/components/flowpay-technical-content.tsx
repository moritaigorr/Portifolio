import { flowpayCaseCopy } from "@/data/flowpay-case";
import type { Locale } from "@/data/portfolio";

function ArchitectureDiagram({ copy }: { copy: (typeof flowpayCaseCopy)[Locale]["diagram"] }) {
  return (
    <figure className="flowpay-diagram-figure">
      <div className="flowpay-diagram-scroll" tabIndex={0} role="region" aria-label={copy.title}>
        <svg viewBox="0 0 1280 510" role="img" aria-labelledby="flowpay-architecture-title flowpay-architecture-description">
          <title id="flowpay-architecture-title">{copy.title}</title>
          <desc id="flowpay-architecture-description">{copy.description}</desc>
          <defs>
            <marker id="flowpay-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#cb6c43" />
            </marker>
          </defs>

          <path className="flowpay-connector" d="M 370 248 H 278" markerEnd="url(#flowpay-arrow)" />
          <text className="flowpay-connector-label" x="324" y="230" textAnchor="middle">{copy.arrowAssets}</text>
          <path className="flowpay-connector flowpay-connector-return" d="M 278 285 H 370" markerEnd="url(#flowpay-arrow)" />
          <text className="flowpay-connector-label" x="324" y="310" textAnchor="middle">{copy.arrowSpa}</text>
          <path className="flowpay-connector" d="M 595 266 H 690" markerEnd="url(#flowpay-arrow)" />
          <text className="flowpay-connector-label" x="643" y="248" textAnchor="middle">{copy.arrowApi}</text>
          <path className="flowpay-connector" d="M 990 266 H 1040" markerEnd="url(#flowpay-arrow)" />
          <text className="flowpay-connector-label" x="1015" y="248" textAnchor="middle">{copy.arrowDatabase}</text>

          <g className="flowpay-diagram-node">
            <rect x="28" y="185" width="250" height="165" rx="4" />
            <text className="flowpay-node-eyebrow" x="50" y="216">01 / CLIENTE</text>
            <text className="flowpay-node-title" x="50" y="250">{copy.browser}</text>
            <text className="flowpay-node-detail" x="50" y="279">{copy.spa}</text>
            <text className="flowpay-node-detail" x="50" y="306">{copy.browserDetail}</text>
          </g>

          <g className="flowpay-diagram-node">
            <rect x="370" y="185" width="225" height="165" rx="4" />
            <text className="flowpay-node-eyebrow" x="392" y="216">02 / PROXY</text>
            <text className="flowpay-node-title" x="392" y="250">{copy.proxy}</text>
            <text className="flowpay-node-detail" x="392" y="279">{copy.proxyDetail}</text>
          </g>

          <g className="flowpay-diagram-node flowpay-diagram-api">
            <rect x="690" y="145" width="300" height="242" rx="4" />
            <text className="flowpay-node-eyebrow" x="714" y="176">03 / SERVIDOR</text>
            <text className="flowpay-node-title" x="714" y="210">{copy.api}</text>
            <text className="flowpay-node-detail" x="714" y="234">{copy.apiDetail}</text>
            <text className="flowpay-api-layer" x="714" y="253">{copy.apiLayer}</text>
            {copy.moduleNames.map((name, index) => {
              const x = 714 + (index % 2) * 126;
              const y = 270 + Math.floor(index / 2) * 45;

              return (
                <g className="flowpay-module-chip" key={name}>
                  <rect x={x} y={y} width="112" height="34" rx="2" />
                  <text x={x + 56} y={y + 22} textAnchor="middle">{name}</text>
                </g>
              );
            })}
          </g>

          <g className="flowpay-diagram-node flowpay-diagram-database">
            <rect x="1040" y="185" width="220" height="165" rx="4" />
            <text className="flowpay-node-eyebrow" x="1062" y="216">04 / DADOS</text>
            <text className="flowpay-node-title" x="1062" y="250">{copy.database}</text>
            <text className="flowpay-node-detail" x="1062" y="279">{copy.databaseDetail}</text>
            <text className="flowpay-node-detail" x="1062" y="306">{copy.databaseSession}</text>
          </g>

        </svg>
      </div>
      <figcaption>{copy.description} {copy.databaseNote}</figcaption>
    </figure>
  );
}

export function FlowPayTechnicalContent({ locale }: { locale: Locale }) {
  const copy = flowpayCaseCopy[locale];

  return (
    <div className="flowpay-technical-content">
      <section className="flowpay-content-section" aria-labelledby="flowpay-overview-title">
        <SectionHeading id="flowpay-overview-title" title={copy.overviewTitle} />
        <div className="flowpay-facts-grid">
          {copy.overviewFacts.map((fact) => (
            <div className="flowpay-fact" key={fact.label}>
              <p className="mono">{fact.label}</p>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-architecture-title-heading">
        <SectionHeading id="flowpay-architecture-title-heading" title={copy.architectureTitle} description={copy.architectureIntro} />
        <ArchitectureDiagram copy={copy.diagram} />
        <div className="flowpay-modules-block">
          <h3 className="mono">{copy.modulesTitle}</h3>
          <div className="flowpay-modules-grid">
            {copy.modules.map((module) => (
              <article className="flowpay-module" key={module.name}>
                <h4>{module.name}</h4>
                <p>{module.description}</p>
              </article>
            ))}
          </div>
          <p className="flowpay-section-note">{copy.modulesNote}</p>
        </div>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-journey-title">
        <SectionHeading id="flowpay-journey-title" title={copy.journeyTitle} description={copy.journeyIntro} />
        <ol className="flowpay-steps">
          {copy.journeySteps.map((step, index) => (
            <li className="flowpay-step" key={step.title}>
              <span className="flowpay-step-number mono">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-implemented-title">
        <SectionHeading id="flowpay-implemented-title" title={copy.implementedTitle} description={copy.implementedIntro} />
        <ul className="flowpay-implemented-list">
          {copy.implementedItems.map((item, index) => (
            <li key={item}>
              <span className="mono">0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-idempotency-title">
        <SectionHeading id="flowpay-idempotency-title" title={copy.idempotencyTitle} description={copy.idempotencyIntro} />
        <ol className="flowpay-retry-flow">
          {copy.idempotencySteps.map((step, index) => (
            <li className="flowpay-retry-step" key={step.title}>
              <span className="flowpay-step-number mono">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="flowpay-section-note flowpay-callout">{copy.idempotencyNote}</p>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-states-title">
        <SectionHeading id="flowpay-states-title" title={copy.stateTitle} description={copy.stateIntro} />
        <div className="flowpay-state-diagram" aria-label={`${copy.statePending} transitions`}>
          <div className="flowpay-state flowpay-state-pending">{copy.statePending}</div>
          <div className="flowpay-state-branches">
            <span className="flowpay-state-edge mono">{copy.stateProcess}</span>
            <div className="flowpay-terminal-states">
              <span className="flowpay-state">{copy.stateApproved}</span>
              <span className="flowpay-state">{copy.stateRejected}</span>
            </div>
            <span className="flowpay-state-edge mono">{copy.stateCancel}</span>
            <span className="flowpay-state">{copy.stateCancelled}</span>
          </div>
        </div>
        <p className="flowpay-state-final mono">{copy.stateFinal}</p>
        <p className="flowpay-section-note">{copy.stateRace}</p>
        <div className="flowpay-money-note">
          <h3>{copy.moneyTitle}</h3>
          <p>{copy.moneyText}</p>
        </div>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-security-title">
        <SectionHeading id="flowpay-security-title" title={copy.securityTitle} />
        <ul className="flowpay-security-list">
          {copy.securityItems.map((item, index) => (
            <li key={item}>
              <span className="mono">0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-decisions-title">
        <SectionHeading id="flowpay-decisions-title" title={copy.decisionsTitle} />
        <div className="flowpay-decisions-grid">
          {copy.decisions.map((decision) => (
            <article className="flowpay-decision" key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-evidence-title">
        <SectionHeading id="flowpay-evidence-title" title={copy.evidenceTitle} description={copy.evidenceIntro} />
        <div className="flowpay-evidence-grid">
          {copy.evidence.map((item) => (
            <article className="flowpay-evidence" key={item.title}>
              <strong>{item.number}</strong>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="flowpay-section-note">{copy.evidenceNote}</p>
      </section>

      <section className="flowpay-content-section" aria-labelledby="flowpay-limits-title">
        <SectionHeading id="flowpay-limits-title" title={copy.limitsTitle} />
        <p className="flowpay-limits">{copy.limitsText}</p>
      </section>

      <section className="flowpay-narration" aria-labelledby="flowpay-narration-title">
        <h2 className="section-kicker mono" id="flowpay-narration-title">{copy.narrationTitle}</h2>
        <blockquote>“{copy.narration}”</blockquote>
      </section>
    </div>
  );
}

function SectionHeading({ id, title, description }: { id: string; title: string; description?: string }) {
  return (
    <header className="flowpay-section-heading">
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
