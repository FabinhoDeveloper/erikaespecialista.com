import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'

// Gerencia o scroll nas trocas de rota: se houver âncora (#sobre, #artigos…),
// rola suavemente até a seção correspondente; caso contrário, volta ao topo.
// (O React Router não faz scroll de âncora automaticamente.)
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const scrollToSection = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    // Em carregamento direto/cross-page, espera as fontes da web carregarem
    // antes de rolar — senão o layout muda de altura e a âncora "erra" o alvo.
    if (document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(scrollToSection)
    } else {
      requestAnimationFrame(scrollToSection)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
