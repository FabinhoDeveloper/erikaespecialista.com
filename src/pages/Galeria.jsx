import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { stripes } from '../lib/stripes.js'
import { photos } from '../data/photos.js'

export default function Galeria() {
  const [open, setOpen] = useState(-1) // índice da foto aberta; -1 = fechado
  const isOpen = open >= 0
  const active = isOpen ? photos[open] : null

  const close = useCallback(() => setOpen(-1), [])
  const move = useCallback(
    (d) => setOpen((i) => (i + d + photos.length) % photos.length),
    [],
  )

  // Navegação por teclado no lightbox (Esc / ← / →).
  useEffect(() => {
    if (!isOpen) return
    function onKey(e) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, move])

  const navBtn =
    'absolute top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[22px] text-white'

  return (
    <div className="min-h-screen">
      <Header />

      {/* CABEÇALHO */}
      <section className="mx-auto max-w-[1140px] px-10 pb-9 pt-16">
        <div className="mb-[18px] font-mono text-[13px] uppercase tracking-[0.12em] text-gold-text">
          Registros & Eventos
        </div>
        <h1 className="m-0 mb-[18px] font-serif text-[clamp(38px,5vw,54px)] font-semibold leading-[1.06]">
          Galeria de atuação
        </h1>
        <p className="m-0 max-w-[54ch] text-[19px] text-muted">
          Audiências públicas, posses, painéis e eventos institucionais ao longo de uma
          trajetória dedicada à gestão pública.
        </p>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-[1140px] px-10 pb-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((p, idx) => (
            <figure
              key={p.title}
              onClick={() => setOpen(idx)}
              className="group relative m-0 aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
            >
              <Placeholder tone={p.tone} label="foto de evento" className="absolute inset-0" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(17,32,58,0.92)] to-transparent px-4 pb-[14px] pt-[18px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="font-serif text-base font-semibold leading-[1.25]">
                  {p.title}
                </div>
                <div className="mt-[3px] text-[13px] text-slate-soft-2">{p.place}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(8,15,28,0.93)] p-10 backdrop-blur-sm"
        >
          <button
            onClick={close}
            aria-label="Fechar"
            className="absolute right-7 top-6 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-[22px] text-white"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              move(-1)
            }}
            aria-label="Anterior"
            className={`${navBtn} left-7`}
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              move(1)
            }}
            aria-label="Próxima"
            className={`${navBtn} right-7`}
          >
            ›
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="m-0 w-full max-w-[900px]"
          >
            <div
              className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-[10px]"
              style={{ background: stripes(active.tone) }}
            >
              <span className="font-mono text-[13px] text-white/50">
                foto em tamanho real
              </span>
            </div>
            <figcaption className="mt-[18px] flex items-end justify-between gap-5">
              <div>
                <div className="font-serif text-[22px] font-semibold text-white">
                  {active.title}
                </div>
                <div className="mt-1 text-[15px] text-slate-soft">{active.desc}</div>
              </div>
              <div className="whitespace-nowrap font-mono text-[13px] text-slate-soft-3">
                {open + 1} / {photos.length}
              </div>
            </figcaption>
          </figure>
        </div>
      )}

      <Footer />
    </div>
  )
}
