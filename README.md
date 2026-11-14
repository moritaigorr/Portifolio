# Igor Morita — Portfólio

[Ver site publicado](https://igormorita.vercel.app)

Portfólio pessoal bilíngue de Igor Morita, Engenheiro de Software. Reúne experiência profissional, projetos, habilidades e formas de contato.

## Tecnologias

- Next.js e React
- TypeScript
- CSS
- GSAP e Lenis para animações e rolagem
- Phosphor Icons e Simple Icons

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

```bash
npm run dev    # inicia o servidor de desenvolvimento
npm run lint   # verifica o código com ESLint
npm run build  # gera a versão de produção
npm start      # inicia a versão compilada
```

## Estrutura

- `src/app/` — páginas e rotas em português e inglês
- `src/components/` — componentes do site
- `src/data/` — textos, projetos e conteúdo por idioma
- `public/` — imagens, ícones e currículos públicos
- `docs/` — especificações e planos do projeto

Os textos do portfólio ficam principalmente em `src/data/locales.ts` e os dados de projetos em `src/data/portfolio.ts`.

## Publicação

O projeto usa Next.js e pode ser importado diretamente na Vercel.

## Licença

Distribuído sob a licença MIT. Consulte [`LICENSE`](LICENSE). Os ícones de terceiros mantêm as licenças indicadas em `public/icons/technologies/`.

---

# Igor Morita — Portfolio

[Visit the live site](https://igormorita.vercel.app)

Bilingual personal portfolio for Igor Morita, Software Engineer. It presents professional experience, projects, skills, and contact details.

## Run locally

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` to run ESLint and `npm run build` to create a production build.

## License

Released under the MIT License. Third-party technology icons retain the licenses listed in `public/icons/technologies/`.
