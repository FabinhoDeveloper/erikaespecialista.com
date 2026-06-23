import { Link } from 'react-router-dom'
import Placeholder from './Placeholder.jsx'
import { articleMeta } from '../data/articles.js'

// Card de artigo reaproveitado na Home, no Mural de Artigos e em "Continue lendo".
// `compact` = variante reduzida (capa menor, sem resumo/CTA), usada nos relacionados.
export default function ArticleCard({ article, compact = false }) {
  return (
    <Link
      to={`/artigos/${article.slug}`}
      className="group block overflow-hidden rounded-lg border border-line bg-white transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_14px_30px_rgba(17,32,58,0.13)]"
    >
      <Placeholder
        tone={article.tone}
        label={compact ? null : 'imagem 16:9'}
        className={`${compact ? 'h-[140px]' : 'h-[158px]'} border-b border-line`}
        labelClass="text-[#a7a399]"
      />
      <div className={compact ? 'p-5 pb-[22px]' : 'p-[22px] pb-6'}>
        <div className="mb-[10px] font-mono text-xs tracking-[0.05em] text-gold-text">
          {articleMeta(article)}
        </div>
        <h3
          className={`m-0 font-serif font-semibold leading-[1.28] ${
            compact ? 'text-[19px]' : 'mb-[10px] text-xl'
          }`}
        >
          {article.title}
        </h3>
        {!compact && (
          <>
            <p className="m-0 mb-4 text-[15px] leading-[1.55] text-muted">
              {article.excerpt}
            </p>
            <span className="text-sm font-semibold text-navy">Ler artigo →</span>
          </>
        )}
      </div>
    </Link>
  )
}
