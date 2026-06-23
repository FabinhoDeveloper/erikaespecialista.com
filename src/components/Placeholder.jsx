import { stripes } from '../lib/stripes.js'

// Reproduz os "placeholders" listrados do Claude Design no lugar das imagens reais.
// Serão substituídos por <img> quando o conteúdo vier do Supabase.
export default function Placeholder({ tone = 'blue', label, className = '', labelClass = '' }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: stripes(tone) }}
    >
      {label && (
        <span className={`font-mono text-[11px] text-muted-2 ${labelClass}`}>{label}</span>
      )}
    </div>
  )
}
