// Dados de exemplo dos artigos. Nesta fase são estáticos (vindos do design);
// na fase de CMS serão substituídos por consultas ao Supabase (tabela `articles`).

// Corpo de exemplo em HTML — equivalente ao que o editor WYSIWYG (TipTap) gerará
// e será renderizado com a classe `.prose-article` (ver src/index.css).
const SAMPLE_BODY = `
<p>Quando assumi a Secretaria de Finanças de Queluz, em 2014, uma das primeiras perguntas que me fiz foi simples: <strong>o cidadão consegue entender para onde vai cada real arrecadado?</strong> A resposta, naquele momento, era não. E mudar isso se tornou uma das prioridades da gestão ao longo de uma década.</p>
<p>A transparência fiscal costuma ser tratada como obrigação burocrática — um conjunto de relatórios publicados para cumprir a Lei de Responsabilidade Fiscal. Mas reduzi-la a isso é desperdiçar seu maior potencial: o de construir confiança entre a administração e a população.</p>
<h2>Do dever legal à cultura de governo</h2>
<p>Publicar dados é diferente de torná-los compreensíveis. Um portal cheio de planilhas indecifráveis cumpre a lei, mas não cumpre o propósito. A transparência ativa exige um esforço de tradução: transformar números em informação acessível, contextualizada e navegável.</p>
<blockquote>A prestação de contas só se completa quando o cidadão entende a conta que está sendo prestada.</blockquote>
<p>Foi com essa premissa que estruturamos painéis de acompanhamento orçamentário com linguagem clara, comparativos históricos e visualizações que qualquer pessoa — e não apenas técnicos — pudesse interpretar.</p>
<h2>Três pilares de uma política de confiança</h2>
<p>A experiência me mostrou que a transparência só se sustenta quando é estrutural, não pontual. Três elementos foram decisivos:</p>
<ul>
  <li><strong>Tempestividade:</strong> dados atualizados com regularidade valem mais do que relatórios anuais densos.</li>
  <li><strong>Granularidade responsável:</strong> detalhamento suficiente para o controle social, sem expor informações sensíveis.</li>
  <li><strong>Diálogo:</strong> canais para que a população pergunte, questione e participe — a transparência é uma via de mão dupla.</li>
</ul>
<h2>O retorno institucional</h2>
<p>O efeito mais visível não foi técnico, mas relacional. A previsibilidade orçamentária e a clareza na comunicação reduziram a desconfiança, facilitaram audiências públicas mais produtivas e deram à gestão a legitimidade necessária para decisões difíceis.</p>
<p>Transparência, no fim, é menos sobre tecnologia e mais sobre <strong>postura</strong>. É a decisão de governar com as portas abertas — sabendo que a confiança, uma vez construída, é o ativo mais valioso de qualquer administração pública.</p>
`

export const CATEGORIES = ['Todos', 'Gestão Fiscal', 'Liderança', 'Orçamento']

export const articles = [
  {
    slug: 'transparencia-fiscal-politica-de-confianca',
    title: 'Transparência fiscal como política de confiança',
    category: 'Gestão Fiscal',
    dateLabel: '12 JUN 2026',
    dateISO: '2026-06-12',
    readTime: '6 min de leitura',
    excerpt:
      'A abertura de dados orçamentários não é apenas uma exigência legal — é uma escolha de governo que fortalece o controle social e devolve credibilidade às instituições.',
    tone: 'blue',
    tags: ['Transparência', 'Orçamento', 'Controle Social'],
    featured: true,
    body: SAMPLE_BODY,
  },
  {
    slug: 'lideranca-tecnica-setor-publico-municipal',
    title: 'Liderança técnica no setor público municipal',
    category: 'Liderança',
    dateLabel: '05 JUN 2026',
    dateISO: '2026-06-05',
    readTime: '5 min de leitura',
    excerpt:
      'O papel da gestão técnica na continuidade de políticas além dos ciclos eleitorais.',
    tone: 'blue',
    tags: ['Liderança', 'Gestão'],
    body: SAMPLE_BODY,
  },
  {
    slug: 'planejamento-orcamentario-participativo',
    title: 'Planejamento orçamentário participativo',
    category: 'Orçamento',
    dateLabel: '28 MAI 2026',
    dateISO: '2026-05-28',
    readTime: '5 min de leitura',
    excerpt:
      'Metodologias para envolver a população nas decisões de alocação de recursos públicos.',
    tone: 'sand',
    tags: ['Orçamento', 'Participação'],
    body: SAMPLE_BODY,
  },
  {
    slug: 'responsabilidade-fiscal-pratica-municipal',
    title: 'Responsabilidade fiscal na prática municipal',
    category: 'Gestão Fiscal',
    dateLabel: '19 MAI 2026',
    dateISO: '2026-05-19',
    readTime: '4 min de leitura',
    excerpt:
      'Como equilibrar contas públicas sem comprometer serviços essenciais à população.',
    tone: 'blue',
    tags: ['Gestão Fiscal'],
    body: SAMPLE_BODY,
  },
  {
    slug: 'dados-abertos-ferramenta-de-gestao',
    title: 'Dados abertos como ferramenta de gestão',
    category: 'Gestão Fiscal',
    dateLabel: '07 MAI 2026',
    dateISO: '2026-05-07',
    readTime: '5 min de leitura',
    excerpt:
      'A transparência ativa que transforma a relação entre cidadão e administração.',
    tone: 'sand',
    tags: ['Transparência', 'Dados Abertos'],
    body: SAMPLE_BODY,
  },
  {
    slug: 'formando-equipes-tecnicas-servico-publico',
    title: 'Formando equipes técnicas no serviço público',
    category: 'Liderança',
    dateLabel: '23 ABR 2026',
    dateISO: '2026-04-23',
    readTime: '4 min de leitura',
    excerpt:
      'Capacitação e retenção de talentos como pilar da boa administração municipal.',
    tone: 'blue',
    tags: ['Liderança', 'Capacitação'],
    body: SAMPLE_BODY,
  },
  {
    slug: 'ciclo-orcamentario-descomplicado',
    title: 'O ciclo orçamentário descomplicado',
    category: 'Orçamento',
    dateLabel: '11 ABR 2026',
    dateISO: '2026-04-11',
    readTime: '6 min de leitura',
    excerpt:
      'Do PPA à LOA — entendendo as peças que organizam o gasto público municipal.',
    tone: 'sand',
    tags: ['Orçamento'],
    body: SAMPLE_BODY,
  },
]

// Metadado curto usado nos cards: "12 JUN 2026 · GESTÃO FISCAL"
export function articleMeta(a) {
  return `${a.dateLabel} · ${a.category.toUpperCase()}`
}

const byDateDesc = (a, b) => b.dateISO.localeCompare(a.dateISO)

export function getRecentArticles(n = 3) {
  return [...articles].sort(byDateDesc).slice(0, n)
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug)
}

// Demais artigos (para "Continue lendo"), excluindo o atual.
export function getRelatedArticles(slug, n = 3) {
  return articles.filter((a) => a.slug !== slug).slice(0, n)
}
