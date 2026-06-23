import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { articles, CATEGORIES } from '../data/articles.js'

const featured = articles.find((a) => a.featured) || articles[0]

function CategoryChip({ name, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-[17px] py-2 text-sm font-semibold transition-colors ${
        active
          ? 'border-navy bg-navy text-white'
          : 'border-line-2 bg-white text-navy hover:border-navy'
      }`}
    >
      {name}
    </button>
  )
}

export default function Artigos() {
  const [filter, setFilter] = useState('Todos')
  const [query, setQuery] = useState('')

  // O destaque sai do grid; os demais são filtrados por categoria + busca.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles
      .filter((a) => !a.featured)
      .filter(
        (a) =>
          (filter === 'Todos' || a.category === filter) &&
          (q === '' ||
            a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q)),
      )
  }, [filter, query])

  return (
    <div className="min-h-screen">
      <Header />

      {/* CABEÇALHO DA PÁGINA */}
      <section className="mx-auto max-w-[1140px] px-10 pb-10 pt-16">
        <div className="mb-[18px] font-mono text-[13px] uppercase tracking-[0.12em] text-gold-text">
          Publicações
        </div>
        <h1 className="m-0 mb-[18px] font-serif text-[clamp(38px,5vw,54px)] font-semibold leading-[1.06]">
          Artigos & opiniões
        </h1>
        <p className="m-0 max-w-[54ch] text-[19px] text-muted">
          Reflexões sobre gestão pública, transparência fiscal, liderança técnica e o futuro
          da administração municipal.
        </p>
      </section>

      {/* TOOLBAR */}
      <section className="mx-auto max-w-[1140px] px-10 pb-9">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-line pb-6">
          <div className="flex flex-wrap gap-[10px]">
            {CATEGORIES.map((c) => (
              <CategoryChip
                key={c}
                name={c}
                active={filter === c}
                onClick={() => setFilter(c)}
              />
            ))}
          </div>
          <div className="relative w-[280px] max-w-full">
            <span className="absolute left-[14px] top-1/2 -translate-y-1/2 font-mono text-sm text-muted-2">
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artigos…"
              className="w-full rounded-md border-[1.5px] border-line-2 bg-white py-[11px] pl-[34px] pr-[14px] text-[15px] text-ink outline-none transition focus:border-navy focus:shadow-[0_0_0_3px_rgba(26,43,69,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* DESTAQUE + GRID */}
      <section className="mx-auto max-w-[1140px] px-10 pb-6">
        {/* destaque */}
        <Link
          to={`/artigos/${featured.slug}`}
          className="mb-10 grid grid-cols-1 overflow-hidden rounded-[10px] border border-line bg-white transition-[box-shadow,border-color] duration-200 hover:border-line-2 hover:shadow-[0_16px_36px_rgba(17,32,58,0.12)] md:grid-cols-[1.05fr_0.95fr]"
        >
          <Placeholder
            tone="blue"
            label="imagem do artigo em destaque"
            className="min-h-[300px]"
            labelClass="text-[#95a3bc] text-[12px]"
          />
          <div className="flex flex-col justify-center p-11">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-gold-text">
              <span className="rounded-full bg-chip px-[10px] py-[3px] font-semibold text-navy">
                EM DESTAQUE
              </span>
              {featured.dateLabel}
            </div>
            <h2 className="m-0 mb-[14px] font-serif text-[30px] font-semibold leading-[1.18]">
              {featured.title}
            </h2>
            <p className="m-0 mb-[22px] text-base leading-[1.6] text-muted">
              {featured.excerpt}
            </p>
            <span className="self-start border-b-2 border-gold pb-[2px] text-[15px] font-semibold text-navy">
              Ler artigo completo →
            </span>
          </div>
        </Link>

        {/* grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-[26px] md:grid-cols-3">
            {filtered.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-muted-2">
            Nenhum artigo encontrado para esta busca.
          </p>
        )}
      </section>

      {/* PAGINAÇÃO (estática nesta fase) */}
      <section className="mx-auto max-w-[1140px] px-10 pb-20 pt-6">
        <div className="flex items-center justify-center gap-2">
          <button
            disabled
            className="cursor-not-allowed rounded-[5px] border border-line bg-white px-[14px] py-[9px] text-sm font-semibold text-muted-2"
          >
            ← Anterior
          </button>
          <button className="h-10 w-10 rounded-[5px] border border-navy bg-navy text-sm font-semibold text-white">
            1
          </button>
          <button className="h-10 w-10 rounded-[5px] border border-line bg-white text-sm font-semibold text-navy transition-colors hover:border-navy">
            2
          </button>
          <button className="h-10 w-10 rounded-[5px] border border-line bg-white text-sm font-semibold text-navy transition-colors hover:border-navy">
            3
          </button>
          <span className="px-1 text-muted-2">…</span>
          <button className="rounded-[5px] border border-line bg-white px-[14px] py-[9px] text-sm font-semibold text-navy transition-colors hover:border-navy">
            Próxima →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
