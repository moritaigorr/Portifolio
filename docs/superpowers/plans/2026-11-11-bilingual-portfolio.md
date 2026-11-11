# Portfólio bilíngue — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Oferecer o portfólio completo em português e inglês, com seletor PT/EN no header e CV correspondente ao idioma.

**Architecture:** Manter os endereços atuais em português (`/`, `/projetos/[slug]`) e adicionar páginas em inglês em `/en` e `/en/projetos/[slug]`. Compartilhar apresentação e componentes entre idiomas, passando uma locale tipada e conteúdo traduzido; usar layouts raiz distintos para que `html lang` e metadados sejam corretos em cada idioma.

**Tech Stack:** Next.js App Router, React, TypeScript, componentes existentes e CSS global.

**Spec:** `docs/superpowers/specs/2026-11-11-bilingual-portfolio-design.md`

## Global Constraints

- Preservar o URL atual da versão portuguesa (`/` e `/projetos/[slug]`).
- Criar os equivalentes ingleses em `/en` e `/en/projetos/[slug]`.
- Em português, mostrar o CV PT-BR; em inglês, mostrar o résumé EN.
- Manter links sociais, telefone, e-mail e ação de copiar funcionais.
- Sem dependência nova.

## Review Focus

- Seletor do header aponta para o mesmo caminho de projeto/seção no idioma oposto.
- Cada página declara o `lang` e metadados da língua exibida.
- Todos os textos visíveis, inclusive avisos acessíveis, botões, rodapés e páginas internas, estão traduzidos.
- Só o PDF correspondente à locale aparece nos cartões.
- Header continua utilizável em desktop e celular.

---

### Task 1: Conteúdo e apresentação compartilhada por locale

**Files:**
- Create: `src/data/locales.ts` (textos localizados, projetos, jornada, habilidades e detalhes de projeto)
- Create: `src/components/portfolio-home.tsx` (página inicial comum que recebe `locale`)
- Create: `src/components/project-page.tsx` (página de projeto comum que recebe `locale` e `slug`)
- Modify: `src/components/site-nav.tsx` (labels localizados e toggle de idioma no header)
- Modify: `src/components/contact-cards.tsx` (labels/status e um currículo por locale)
- Create: `src/components/language-switch.tsx` (links PT/EN acessíveis)
- Create: `src/app/(pt)/layout.tsx`, `src/app/(pt)/page.tsx`, `src/app/(pt)/projetos/[slug]/page.tsx`
- Create: `src/app/en/layout.tsx`, `src/app/en/page.tsx`, `src/app/en/projetos/[slug]/page.tsx`
- Delete: `src/app/layout.tsx` (substituído por root layouts locais de PT e EN que definem `html lang`)
- Modify: `src/app/globals.css` (estilo do toggle e espaço do header em desktop/mobile)

**Interfaces:**
- Locale: `"pt" | "en"`.
- Shared home component consumes a locale and resolves all visible content from localized data.
- Shared project component consumes locale and slug; localized project details remain keyed by the existing slugs.
- Language switch receives locale and destination path; switches `/` ↔ `/en` and `/projetos/<slug>` ↔ `/en/projetos/<slug>`.

- [x] Criar conteúdo completo em português e inglês para todas as seções, detalhes de projeto, navegação, feedback de copiar e rodapé.
- [x] Reusar a apresentação da home e de projeto através de componentes compartilhados, sem duplicar estruturas de página.
- [x] Criar layouts raiz por idioma com `lang` correto e metadados localizados; preservar URLs PT atuais.
- [x] Colocar o seletor PT/EN no header das páginas iniciais e de projeto, mantendo o caminho correspondente ao alternar.
- [x] Mostrar apenas `/cv/Igor_Morita_CV_ATS.pdf` em PT e `/cv/Igor_Morita_Resume_EN.pdf` em EN.
- [x] Conferir estaticamente links, textos e referências a assets, sem executar testes automatizados.


