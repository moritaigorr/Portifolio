# Contato e currículo no estilo da referência — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Adaptar somente a área de contato e os cartões de contato/currículo ao estilo claro da referência, preservando o restante do portfólio.

**Architecture:** Ajustar as regras CSS existentes para `contact-section` e seus elementos, sem tocar nas outras seções. Preservar componente, conteúdo, links, cópia do e-mail e comportamento responsivo atuais.

**Tech Stack:** Next.js, React, CSS global existente.

**Spec:** `docs/superpowers/specs/2026-11-11-contato-curriculo-design.md`

## Global Constraints

- Alterar somente a área de contato/currículo.
- Preservar textos, links, ação de copiar e responsividade.
- Usar cores suaves, bordas arredondadas e brilho discreto.
- Não adicionar dependências nem criar um PDF inexistente.

## Review Focus

- Larguras móveis: cartões devem caber sem transbordar.
- Contraste do texto e botões no novo fundo claro.
- Foco de teclado e hover continuam perceptíveis.
- Brilho de fundo não deve encobrir nem reduzir legibilidade dos cartões.
- Respeitar `prefers-reduced-motion` e estilos existentes.

---

### Task 1: Reestilizar contato e currículo

**Files:**
- Modify: `src/app/globals.css` (regras `.contact-section`, `.contact-background`, `.contact-content`, `.contact-main`, cartões e media query responsiva)
- Review: `src/components/contact-cards.tsx` (preservar markup e interações existentes)

**Interfaces:**
- Consumes: classes de contato já usadas por `page.tsx` e `contact-cards.tsx`.
- Produces: mesma estrutura e interações, com fundo claro, brilho suave e cartões no estilo de referência.

- [x] Atualizar cores e camadas do fundo da seção para um tratamento claro com brilho pastel sutil.
- [x] Ajustar cores do título e rodapé para manter contraste no fundo atualizado.
- [x] Preservar os cartões claros, estados de hover/foco e adaptar apenas o necessário após a mudança do fundo.
- [x] Revisar as regras móveis existentes para a seção e cartões, mantendo ausência de overflow.
- [ ] Conferir visualmente a área no navegador em desktop e viewport móvel, incluindo foco e estado Copiado (pendente: o servidor local não iniciou por EACCES na porta 3000).


