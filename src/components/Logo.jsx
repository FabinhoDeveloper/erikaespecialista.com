// Marca da Érika Santos — círculo com um "prédio público" (frontão + colunas).
// `tone` controla a cor da borda/ícone: "navy" (header) ou "gold" (footer).
export default function Logo({ tone = 'navy' }) {
  const color = tone === 'gold' ? 'var(--color-gold)' : 'var(--color-navy)'
  return (
    <div
      className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-[1.5px]"
      style={{ borderColor: color, color }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="block h-[60%] w-[60%]"
        aria-hidden="true"
      >
        <polygon points="12,3 2.6,7.3 21.4,7.3" />
        <rect x="3.1" y="8" width="17.8" height="1.8" rx="0.4" />
        <rect x="5" y="10.6" width="2.3" height="6.5" rx="0.3" />
        <rect x="10.85" y="10.6" width="2.3" height="6.5" rx="0.3" />
        <rect x="16.7" y="10.6" width="2.3" height="6.5" rx="0.3" />
        <rect x="2.6" y="17.7" width="18.8" height="2.1" rx="0.5" />
      </svg>
    </div>
  )
}
