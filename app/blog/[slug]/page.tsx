import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts, getPostBySlug, getAllSlugs } from '@/lib/blog-posts'
import AnimatedSection from '@/components/AnimatedSection'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Artículo no encontrado — Luigi Hernandez' }
  }

  return {
    title: `${post.title} — Luigi Hernandez`,
    description: post.description,
    openGraph: {
      title: `${post.title} — Luigi Hernandez`,
      description: post.description,
      url: `https://luigihernandez.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Luigi Hernandez'],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Luigi Hernandez',
      url: 'https://luigihernandez.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Luigi Hernandez',
    },
    url: `https://luigihernandez.com/blog/${post.slug}`,
  }

  const paragraphs = post.content
    .split('\n\n')
    .filter((p) => p.trim().length > 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section
        style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '3rem' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#C4922A',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '2rem',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Volver al blog
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(196,146,42,0.1)',
                  color: '#C4922A',
                  border: '1px solid rgba(196,146,42,0.2)',
                }}
              >
                {post.category}
              </span>
              <time dateTime={post.date} style={{ color: '#555', fontSize: '0.8rem' }}>
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span style={{ color: '#555', fontSize: '0.8rem' }}>{post.readTime} min de lectura</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#F5F5F5',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              {post.title}
            </h1>

            <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {post.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ height: '1px', backgroundColor: '#1a1a1a' }} />
      </div>

      {/* Content */}
      <section style={{ backgroundColor: '#080808', padding: '3rem 0 6rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {paragraphs.map((paragraph, i) => {
                // Handle bold headings (lines starting with **)
                if (paragraph.startsWith('**') && paragraph.endsWith('**') && paragraph.split('**').length === 3) {
                  const text = paragraph.slice(2, -2)
                  return (
                    <h2
                      key={i}
                      style={{
                        color: '#F5F5F5',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        lineHeight: 1.4,
                        marginTop: '1rem',
                      }}
                    >
                      {text}
                    </h2>
                  )
                }

                // Replace inline bold
                const parts = paragraph.split(/\*\*(.*?)\*\*/g)
                return (
                  <p
                    key={i}
                    style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: 1.85 }}
                  >
                    {parts.map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} style={{ color: '#F5F5F5', fontWeight: 700 }}>
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Author bio */}
      <section style={{ backgroundColor: '#111111', padding: '3rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '2px solid #C4922A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C4922A',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}
              >
                LH
              </div>
              <div>
                <p style={{ color: '#F5F5F5', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Luigi Hernandez
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  Emprendedor venezolano-americano, fundador de WellClub y creador del Método C.E.O.
                  Autor de &ldquo;Para, Piensa y Actúa&rdquo;. Escribe sobre criterio, estrategia y oportunidad.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/sobre-mi" style={{ color: '#C4922A', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 }}>
                    Conocer más →
                  </Link>
                  <Link href="/contacto" style={{ color: '#9CA3AF', fontSize: '0.875rem', textDecoration: 'none' }}>
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section style={{ backgroundColor: '#080808', padding: '4rem 0 6rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
            <AnimatedSection direction="up" style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: '#F5F5F5', fontWeight: 700, fontSize: '1.3rem' }}>
                Más artículos de{' '}
                <span style={{ color: '#C4922A' }}>{post.category}</span>
              </h2>
            </AnimatedSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {relatedPosts.map((related, i) => (
                <AnimatedSection key={related.slug} direction="up" delay={i * 0.07}>
                  <Link href={`/blog/${related.slug}`} style={{ textDecoration: 'none' }}>
                    <div
                      className="card-dark"
                      style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
                    >
                      <h3 style={{ color: '#F5F5F5', fontWeight: 700, fontSize: '0.95rem' }}>
                        {related.title}
                      </h3>
                      <p style={{ color: '#9CA3AF', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        {related.description}
                      </p>
                      <span style={{ color: '#C4922A', fontSize: '0.8rem', fontWeight: 600 }}>
                        Leer →
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#111111', padding: '5rem 0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: '#F5F5F5',
                marginTop: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              ¿Te resonó este artículo?
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Si quieres profundizar en el Método C.E.O. o explorar cómo WellClub puede proteger
              a tu familia, escríbeme. Con gusto conversamos.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn-primary">
                Escribir a Luigi
              </Link>
              <Link href="/blog" className="btn-secondary">
                Más artículos
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
