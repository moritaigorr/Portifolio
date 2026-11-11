# Design — Portfólio em português e inglês

## Intenção
Permitir que visitantes naveguem o portfólio completo em português ou inglês, com idioma identificável no URL e conteúdo consistente em cada página.

## Abordagens
- Troca local de texto via estado do navegador: menor alteração, mas idioma não tem URL próprio, perde-se ao recarregar sem persistência e as páginas não ficam otimizadas por idioma.
- Rotas localizadas (`/` para português e `/en` para inglês): páginas renderizadas no idioma correto, URL compartilhável e suporte limpo a metadados e páginas de projeto. Escolhida com base na recomendação apresentada e no requisito do usuário de manter CV conforme o idioma.

## Objetivos
- Traduzir menu, hero, projetos/experiências, jornada, habilidades, contato e páginas individuais de projeto.
- Adicionar controle PT/EN que leve à versão equivalente da página atual.
- Configurar o idioma do documento e metadados para cada versão.
- Em português, mostrar o CV PT-BR; em inglês, mostrar o résumé EN.

## Restrições
- Preservar o URL atual da versão portuguesa (`/` e `/projetos/[slug]`).
- Criar os equivalentes ingleses em `/en` e `/en/projetos/[slug]`.
- Reutilizar os PDFs já instalados em `public/cv/`; não exibir o PDF do outro idioma.
- Manter links sociais, telefone, e-mail e ação de copiar funcionais.
- Sem dependência nova.
