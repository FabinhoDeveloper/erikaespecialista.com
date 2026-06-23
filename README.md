# erikaespecialista.com

Site de posicionamento de marca pessoal de **Érika Santos**, especialista em administração e gestão pública. Combina landing page institucional com CMS proprietário para artigos e galeria de fotos.

## Stack

- **Frontend:** React 19 + Vite + TailwindCSS v4
- **Roteamento:** React Router v7
- **Backend (em desenvolvimento):** Supabase (Postgres + Auth + Storage)
- **Hospedagem:** Vercel

## Estrutura de páginas

| Rota | Descrição |
|---|---|
| `/` | Home — hero, sobre, timeline, artigos recentes, galeria recente, contato |
| `/artigos` | Mural de artigos com filtro por categoria e busca |
| `/artigos/:slug` | Artigo completo com compartilhamento e artigos relacionados |
| `/galeria` | Galeria de fotos com lightbox e navegação por teclado |
| `/admin/*` | Painel administrativo (em desenvolvimento) |

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Assets de marca

Logos e ícones em `public/assets/`:

| Arquivo | Uso |
|---|---|
| `logo-navy.png` | Header (fundo claro) |
| `logo-gold.png` | Footer (fundo navy) |
| `favicon-32.png` / `favicon-16.png` | Favicon |
| `apple-touch-icon.png` | iOS home screen |
| `icon-512.png` | Master icon |
