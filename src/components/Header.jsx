import { Link } from 'react-router-dom'

// Header fixo no topo, com blur. Os links de navegação apontam para seções da
// Home (#sobre, #artigos, #fotos); as páginas completas de Artigos e Fotos são
// acessadas pelos botões "Ver todos os artigos" / "Ver todas as fotos".
export default function Header() {
  const link = 'text-[15px] text-muted transition-colors hover:text-navy'

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/[0.86] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-10 py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo-navy.png"
            alt="Érika Santos"
            className="block h-[44px] w-auto"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/#sobre" className={link}>
            Sobre
          </Link>
          <Link to="/#artigos" className={link}>
            Artigos
          </Link>
          <Link to="/#fotos" className={link}>
            Fotos
          </Link>
          <Link
            to="/#contato"
            className="rounded-[5px] bg-gold px-5 py-[10px] text-sm font-semibold text-navy-800 transition-colors hover:bg-gold-dark"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
