import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts, getCategories } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog — Luigi Hernandez',
  description:
    'Artículos sobre emprendimiento, liderazgo, el Método C.E.O., bienestar y la experiencia de construir desde la inmigración. Por Luigi Hernandez.',
  openGraph: {
    title: 'Blog — Luigi Hernandez',
    description: 'Ideas sobre criterio, estrategia y oportunidad para emprendedores.',
    url: 'https://luigihernandez.com/blog',
  },
}

const categoryColors: Record<string, string> = {
  'Liderazgo': '#C4922A',
  'Método C.E.O.': '#C4922A',
  'WellClub': '#C4922A',
  'Historia Personal': '#C4922A',
  'Reflexiones': '#C4922A',
}

export default function BlogPage() {
  const categories = ['Todos', ...getCategories()]
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: '#080808', paddingTop: '120px', paddingBottom: '4rem' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <span className="section-divider-left" style={{ marginBottom: '1.5rem' }} />
            <p
              style={{
                color: '#C4922A',
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
              }}
            >
              Blog
            </p>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#F5F5F5',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
              }}
            >
              Ideas que{' '}
              <span style={{ color: '#C4922A' }}>mueven</span>
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '560px' }}>
              Reflexiones sobre emprendimiento, criterio estratégico, bienestar e inmigración.
              Sin filtros, con sustancia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category badges (static display) */}
      <section style={{ backgroundColor: '#080808', paddingBottom: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <span
                key={cat}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: '1px solid #333',
                  color: '#9CA3AF',
                  cursor: 'default',
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ backgroundColor: '#080808', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {sortedPosts.map((post, i) => (
              <AnimatedSection key={post.slug} direction="up" delay={(i % 3) * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <article
                    className="card-dark"
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Category */}
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(196,146,42,0.1)',
                        color: categoryColors[post.category] || '#C4922A',
                        border: '1px solid rgba(196,146,42,0.2)',
                        marginBottom: '1rem',
                        alignSelf: 'flex-start',
                      }}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2
                      style={{
                        color: '#F5F5F5',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        lineHeight: 1.4,
                        marginBottom: '0.75rem',
                        flexGrow: 1,
                      }}
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p
                      style={{
                        color: '#9CA3AF',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid #222',
                        paddingTop: '1rem',
                        marginTop: 'auto',
                      }}
                    >
                      <time
                        dateTime={post.date}
                        style={{ color: '#555', fontSize: '0.8rem' }}
                      >
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span style={{ color: '#555', fontSize: '0.8rem' }}>
                        {post.readTime} min
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
