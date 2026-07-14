import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import HeroPortrait from '../components/HeroPortrait.jsx'

function EyebrowLine({ children }) {
  return (
    <div className="mb-[26px] inline-flex items-center gap-[9px] font-mono text-[13px] uppercase tracking-[0.1em] text-gold-text">
      <span className="h-px w-6 bg-gold" />
      {children}
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-serif text-[30px] font-semibold leading-none text-navy">
        {value}
      </div>
      <div className="mt-[6px] text-sm text-muted-2">{label}</div>
    </div>
  )
}

function TimelineItem({ period, periodMuted, title, children, dotNavy }) {
  return (
    <div className="relative">
      <span
        className="absolute left-[-44px] top-1 h-[14px] w-[14px] rounded-full border-[3px] border-cream"
        style={{ background: dotNavy ? 'var(--color-navy)' : 'var(--color-gold)' }}
      />
      <div
        className={`mb-[6px] font-mono text-[13px] ${
          periodMuted ? 'text-muted-2' : 'text-gold-text'
        }`}
      >
        {period}
      </div>
      <h3 className="m-0 mb-[6px] font-serif text-[22px] font-semibold">{title}</h3>
      <p className="m-0 text-[15px] leading-[1.6] text-muted">{children}</p>
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  // Nesta fase apenas estado local. Na fase de CMS, isto fará INSERT no Supabase
  // (tabela `contatos`) + e-mail via Edge Function/Resend.
  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const field =
    'w-full rounded-[5px] border-[1.5px] border-navy-border bg-navy-800 px-[14px] py-3 text-base text-white outline-none transition focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,75,0.18)]'

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[10px] border border-navy-700 bg-navy p-[34px]"
    >
      <label className="mb-[7px] block text-sm font-semibold text-[#dfe6f0]">Nome</label>
      <input type="text" placeholder="Seu nome completo" className={field} required />
      <label className="mb-[7px] mt-[18px] block text-sm font-semibold text-[#dfe6f0]">
        E-mail
      </label>
      <input type="email" placeholder="seu@email.com" className={field} required />
      <label className="mb-[7px] mt-[18px] block text-sm font-semibold text-[#dfe6f0]">
        Mensagem
      </label>
      <textarea
        rows="4"
        placeholder="Como posso ajudar?"
        className={`${field} resize-y`}
        required
      />
      <button
        type="submit"
        className="mt-[22px] w-full rounded-[5px] bg-gold py-[14px] text-base font-semibold text-navy-800 transition-colors hover:bg-gold-soft"
      >
        {sent ? 'Mensagem enviada ✓' : 'Enviar mensagem'}
      </button>
    </form>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-16 px-10 pb-[72px] pt-[88px] md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <EyebrowLine>Gestão Pública · 20+ anos</EyebrowLine>
          <h1 className="m-0 mb-[26px] font-serif text-[clamp(40px,5.2vw,62px)] font-semibold leading-[1.06] tracking-[-0.01em]">
            Liderança técnica a serviço da cidade.
          </h1>
          <p className="m-0 mb-9 max-w-[46ch] text-xl leading-[1.6] text-muted">
            Especialista em administração e gestão pública. Uma década à frente das
            Finanças de Queluz-SP e, desde 2025, na Gerência de Governo — com transparência,
            planejamento e resultados.
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link
              to="/#sobre"
              className="rounded-[5px] border-[1.5px] border-navy px-[26px] py-[12.5px] text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Conhecer a trajetória
            </Link>
          </div>
        </div>
        <div className="relative">
          <HeroPortrait />
          <div className="absolute bottom-8 left-[-24px] rounded-lg bg-navy-800 px-6 py-5 shadow-[0_18px_40px_rgba(17,32,58,0.22)]">
            <div className="font-serif text-[30px] font-semibold leading-none text-white">
              2014<span className="text-gold">—</span>2024
            </div>
            <div className="mt-[6px] text-[13px] leading-snug tracking-[0.02em] text-slate-soft">
              Secretária de Finanças
              <br />
              Queluz-SP
            </div>
          </div>
        </div>
      </section>

      {/* CREDENCIAIS */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-8 px-10 py-[30px] md:grid-cols-4">
          <Stat value="20+" label="anos em gestão pública" />
          <Stat value="10" label="anos à frente das Finanças" />
          <Stat value="2025" label="Gerente de Governo" />
          <Stat value="100%" label="foco em transparência" />
        </div>
      </section>

      {/* SOBRE + TIMELINE */}
      <section
        id="sobre"
        className="mx-auto grid max-w-[1140px] scroll-mt-20 grid-cols-1 gap-[72px] px-10 py-[88px] md:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <div className="mb-5 font-mono text-[13px] uppercase tracking-[0.12em] text-gold-text">
            Sobre Mim
          </div>
          <h2 className="m-0 mb-[22px] font-serif text-[38px] font-semibold leading-[1.12]">
            Uma trajetória construída no serviço público.
          </h2>
          <p className="m-0 mb-[18px] text-[17px] leading-[1.7] text-muted">
            Érika Santos é especialista em administração e gestão pública, com mais de duas
            décadas dedicadas à construção de instituições mais transparentes e eficientes.
          </p>
          <p className="m-0 mb-[30px] text-[17px] leading-[1.7] text-muted">
            Sua atuação une rigor técnico e visão de liderança — da gestão fiscal municipal
            à coordenação de governo, sempre com foco na continuidade de políticas públicas
            além dos ciclos eleitorais.
          </p>
        </div>
        <div className="flex flex-col gap-[34px] border-l-2 border-line pl-9">
          <TimelineItem period="2025 — ATUAL" title="Gerente de Governo">
            Coordenação estratégica de iniciativas de governo, articulando equipes técnicas
            e prioridades institucionais.
          </TimelineItem>
          <TimelineItem
            period="2014 — 2024"
            periodMuted
            dotNavy
            title="Secretária Municipal de Finanças · Queluz-SP"
          >
            Uma década à frente das finanças municipais — planejamento orçamentário,
            transparência fiscal e responsabilidade na gestão de recursos.
          </TimelineItem>
          <TimelineItem
            period="FORMAÇÃO & BASE"
            periodMuted
            dotNavy
            title="Administração & Gestão Pública"
          >
            Mais de 20 anos de experiência acumulada no setor público, com especialização
            técnica em finanças e administração.
          </TimelineItem>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-16 bg-navy-800 text-white">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-[72px] px-10 py-[84px] md:grid-cols-2">
          <div>
            <div className="mb-5 font-mono text-[13px] uppercase tracking-[0.12em] text-gold">
              Contato
            </div>
            <h2 className="m-0 mb-5 font-serif text-[38px] font-semibold leading-[1.12] text-white">
              Vamos conversar.
            </h2>
            <p className="m-0 mb-9 max-w-[42ch] text-[17px] leading-[1.7] text-slate-soft">
              Convites para palestras, painéis, colaborações institucionais ou imprensa.
              Envie uma mensagem ou conecte-se pelo LinkedIn.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-base text-[#dfe6f0] transition-colors hover:text-gold"
              >
                <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-md border border-navy-border font-mono text-xs text-slate-soft">
                  in
                </span>
                linkedin.com/in/erikasantos
              </a>
              <a
                href="mailto:contato@erikasantos.com.br"
                className="inline-flex items-center gap-3 text-base text-[#dfe6f0] transition-colors hover:text-gold"
              >
                <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-md border border-navy-border font-mono text-xs text-slate-soft">
                  @
                </span>
                contato@erikasantos.com.br
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
