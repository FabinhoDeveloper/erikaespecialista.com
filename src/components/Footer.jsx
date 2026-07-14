import { Link } from 'react-router-dom'

function FootLink({ to, children }) {
  return (
    <Link to={to} className="transition-colors hover:text-gold">
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-[1140px] px-10 pt-[54px]">
        <div className="flex flex-wrap items-start justify-between gap-8 pb-10">
          <div className="max-w-[38ch]">
            <div className="mb-[14px]">
              <img
                src="/assets/logo-gold.png"
                alt="Érika Santos"
                className="block h-[46px] w-auto"
              />
            </div>
            <p className="m-0 text-sm leading-[1.6] text-slate-soft">
              Especialista em administração e gestão pública. Liderança técnica,
              transparência e resultados.
            </p>
          </div>
          <div className="flex gap-14">
            <div>
              <div className="mb-[14px] text-xs uppercase tracking-[0.12em] text-slate-soft-3">
                Navegar
              </div>
              <div className="flex flex-col gap-[9px] text-sm text-slate-soft-2">
                <FootLink to="/#sobre">Sobre</FootLink>
              </div>
            </div>
            <div>
              <div className="mb-[14px] text-xs uppercase tracking-[0.12em] text-slate-soft-3">
                Conectar
              </div>
              <div className="flex flex-col gap-[9px] text-sm text-slate-soft-2">
                <FootLink to="/#contato">LinkedIn</FootLink>
                <FootLink to="/#contato">E-mail</FootLink>
                <FootLink to="/admin/login">Área restrita</FootLink>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-navy-line py-[18px] pb-7 text-[13px] text-slate-soft-3">
          © 2026 Érika Santos · Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}
