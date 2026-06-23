import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { getArticleBySlug, getRelatedArticles } from '../data/articles.js'

export default function Artigo() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <section className="mx-auto flex max-w-[740px] flex-1 flex-col items-start px-10 py-24">
          <h1 className="m-0 mb-4 font-serif text-[34px] font-semibold">
            Artigo não encontrado
          </h1>
          <p className="mb-8 text-muted">
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link
            to="/artigos"
            className="rounded-[5px] bg-navy px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-700"
          >
            ← Voltar para artigos
          </Link>
        </section>
        <Footer />
      </div>
    )
  }

  const related = getRelatedArticles(article.slug, 3)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const waUrl = `https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`
  const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  return (
    <div className="min-h-screen">
      <Header />

      {/* CABEÇALHO DO ARTIGO */}
      <article className="mx-auto max-w-[740px] px-10 pt-12">
        <Link
          to="/artigos"
          className="mb-[30px] inline-flex items-center gap-[7px] text-sm font-semibold text-muted-2 transition-colors hover:text-navy"
        >
          ← Voltar para artigos
        </Link>
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-full border border-[#d2dbe9] bg-chip px-[13px] py-[5px] text-[13px] font-semibold text-navy">
            {article.category}
          </span>
          <span className="font-mono text-[13px] text-muted-2">
            {article.dateLabel} · {article.readTime}
          </span>
        </div>
        <h1 className="m-0 mb-[22px] font-serif text-[clamp(34px,4.6vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
          {article.title}
        </h1>
        <p className="m-0 mb-[30px] text-[21px] leading-[1.55] text-muted">
          {article.excerpt}
        </p>
        <div className="mb-9 flex items-center gap-3 border-y border-line py-[18px]">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 font-serif text-lg font-semibold text-gold">
            É
          </div>
          <div>
            <div className="text-[15px] font-semibold text-ink">Érika Santos</div>
            <div className="text-[13px] text-muted-2">
              Especialista em gestão pública · Gerente de Governo
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <a
              href={liUrl}
              target="_blank"
              rel="noreferrer"
              title="Compartilhar no LinkedIn"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-md border border-line-2 font-mono text-xs text-muted-2 transition-colors hover:border-navy hover:text-navy"
            >
              in
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              title="Compartilhar no WhatsApp"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-md border border-line-2 font-mono text-xs text-muted-2 transition-colors hover:border-navy hover:text-navy"
            >
              ↗
            </a>
          </div>
        </div>
      </article>

      {/* IMAGEM DE CAPA */}
      <div className="mx-auto mb-11 max-w-[980px] px-10">
        <Placeholder
          tone="blue"
          label="imagem de capa do artigo"
          className="aspect-[16/8] overflow-hidden rounded-[10px] border border-line-2"
          labelClass="text-[#95a3bc] text-[12px]"
        />
      </div>

      {/* CORPO */}
      <div
        className="prose-article mx-auto max-w-[740px] px-10"
        // Conteúdo já sanitizado na origem (CMS); aqui é HTML estático de exemplo.
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      {/* TAGS */}
      <div className="mx-auto mt-11 max-w-[740px] border-t border-line px-10 pt-7">
        <div className="flex flex-wrap items-center gap-[10px]">
          <span className="mr-1 font-mono text-[13px] tracking-[0.06em] text-muted-2">
            TAGS
          </span>
          {article.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-chip px-[13px] py-[5px] text-[13px] font-semibold text-navy"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* RELACIONADOS */}
      <section className="mx-auto max-w-[1140px] px-10 pt-[72px]">
        <h2 className="m-0 mb-7 font-serif text-[28px] font-semibold">Continue lendo</h2>
        <div className="grid grid-cols-1 gap-[26px] md:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} compact />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}
