import { MetadataRoute } from 'next'

const blogSlugs = [
  'criterio-estrategico-en-tu-negocio',
  'metodo-ceo-explicado-paso-a-paso',
  'por-que-emprendedor-necesita-seguro-de-vida',
  'de-venezuela-a-estados-unidos-historia-de-reinvencion',
  'wellclub-bienestar-integral-emprendedor',
  '5-decisiones-que-cambiaron-mi-vida-como-inmigrante',
  'como-reconocer-oportunidades-en-mercados-dificiles',
  'el-poder-del-oceano-lecciones-desde-la-playa',
  'seguro-de-salud-familias-inmigrantes-usa',
  'liderazgo-sin-titulo-como-liderar-desde-donde-estas',
  'mentoria-vs-coaching-cual-necesitas',
  'criterio-vs-intuicion-la-diferencia-que-lo-cambia-todo',
  'como-construir-empresa-de-bienestar-en-usa',
  'el-legado-de-mi-madre-ser-hijo-unico',
  'por-que-funde-wellclub-historia-detras-del-negocio',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://luigihernandez.com'
  const now = new Date()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/sobre-mi`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/libros`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/conferencias`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/prensa`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
