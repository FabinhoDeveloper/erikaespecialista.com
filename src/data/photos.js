// Dados de exemplo da galeria. Nesta fase são estáticos (vindos do design);
// na fase de CMS serão substituídos por consultas ao Supabase (tabela `photos`).
export const photos = [
  {
    title: 'Posse — Gerência de Governo',
    place: 'São Paulo · 2025',
    desc: 'Cerimônia de posse no cargo de Gerente de Governo, 2025.',
    tone: 'gray',
  },
  {
    title: 'Audiência pública — Orçamento',
    place: 'Queluz-SP · 2023',
    desc: 'Audiência pública de discussão da peça orçamentária municipal.',
    tone: 'green',
  },
  {
    title: 'Painel sobre gestão fiscal',
    place: 'FENAFIM · 2024',
    desc: 'Participação como painelista no fórum nacional de finanças municipais.',
    tone: 'earth',
  },
  {
    title: 'Reunião de planejamento',
    place: 'Queluz-SP · 2022',
    desc: 'Reunião técnica de planejamento orçamentário com a equipe.',
    tone: 'gray',
  },
  {
    title: 'Seminário de transparência',
    place: 'São Paulo · 2024',
    desc: 'Palestra sobre dados abertos e controle social na gestão pública.',
    tone: 'green',
  },
  {
    title: 'Capacitação de servidores',
    place: 'Queluz-SP · 2021',
    desc: 'Programa de capacitação técnica para equipes da Secretaria de Finanças.',
    tone: 'earth',
  },
  {
    title: 'Encontro de gestores municipais',
    place: 'Campinas-SP · 2023',
    desc: 'Mesa de debate sobre cooperação intermunicipal e finanças.',
    tone: 'gray',
  },
  {
    title: 'Entrega de relatório de gestão',
    place: 'Queluz-SP · 2024',
    desc: 'Apresentação do relatório anual de prestação de contas.',
    tone: 'green',
  },
  {
    title: 'Visita técnica a obras',
    place: 'Queluz-SP · 2020',
    desc: 'Acompanhamento de obras públicas financiadas com recursos municipais.',
    tone: 'earth',
  },
]

export function getRecentPhotos(n = 3) {
  return photos.slice(0, n)
}
