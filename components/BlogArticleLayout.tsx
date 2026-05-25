import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { formatDate } from '@/lib/blog-posts'

interface BlogArticleLayoutProps {
  title: string
  date: string
  readingTime: string
  category: string
  children: React.ReactNode
}

export default function BlogArticleLayout({
  title,
  date,
  readingTime,
  category,
  children,
}: BlogArticleLayoutProps) {
  return (
    <>
      <section
        className="py-16 md:py-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(196,146,42,0.05) 0%, transparent 70%), #080808',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-150"
              style={{ color: '#9CA3AF' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7M19 12H5" />
              </svg>
              Volver al blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="px-2 py-1 text-xs font-medium rounded"
                style={{ backgroundColor: 'rgba(196,146,42,0.1)', color: '#C4922A' }}
              >
                {category}
              </span>
              <span className="text-xs" style={{ color: '#6B7280' }}>
                {readingTime} de lectura
              </span>
              <time className="text-xs" style={{ color: '#6B7280' }} dateTime={date}>
                {formatDate(date)}
              </time>
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ color: '#F5F5F5' }}
            >
              {title}
            </h1>

            <div
              className="flex items-center gap-3 pb-8"
              style={{ borderBottom: '1px solid rgba(196,146,42,0.15)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black shrink-0"
                style={{ background: 'linear-gradient(135deg, #C4922A, #F0C040)' }}
              >
                LH
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: '#F5F5F5' }}>
                  Luigi Hernandez
                </p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>
                  Fundador de WellClub · Creador del Método C.E.O.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="prose-dark">{children}</div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div
            className="mt-16 p-8 rounded-xl text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(196,146,42,0.08), rgba(196,146,42,0.03))',
              border: '1px solid rgba(196,146,42,0.25)',
            }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: '#F5F5F5' }}>
              ¿Quieres trabajar con Luigi?
            </h3>
            <p className="text-sm mb-6" style={{ color: '#9CA3AF' }}>
              Ya sea mentoría, WellClub o una conferencia, estaré feliz de hablar contigo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="btn-primary text-sm">
                Contactar a Luigi
              </Link>
              <Link href="/blog" className="btn-secondary text-sm">
                Más artículos
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </article>
    </>
  )
}
