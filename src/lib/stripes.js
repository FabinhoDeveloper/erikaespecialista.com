// Gradientes listrados que reproduzem os placeholders de imagem do Claude Design.
// Serão dispensados quando as imagens reais (Supabase Storage) entrarem.
const STRIPES = {
  blue: 'repeating-linear-gradient(135deg,#e6ecf4 0 16px,#eef2f8 16px 32px)',
  sand: 'repeating-linear-gradient(135deg,#eceae3 0 16px,#f5f3ee 16px 32px)',
  portrait: 'repeating-linear-gradient(135deg,#e4e8ef 0 16px,#edf0f5 16px 32px)',
  gray: 'repeating-linear-gradient(135deg,#d9dde4 0 14px,#e3e7ee 14px 28px)',
  green: 'repeating-linear-gradient(135deg,#dbe0d8 0 14px,#e6eae2 14px 28px)',
  earth: 'repeating-linear-gradient(135deg,#e0dbd2 0 14px,#eae5dc 14px 28px)',
}

export function stripes(tone) {
  return STRIPES[tone] || STRIPES.blue
}
