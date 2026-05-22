import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Luigi Hernandez — Emprendedor | Fundador de WellClub | Método C.E.O.',
  description:
    'Emprendedor venezolano-americano, fundador de WellClub y creador del Método C.E.O. (Criterio, Estrategia, Oportunidad). Transforma tu criterio, transforma tu vida.',
  openGraph: {
    title: 'Luigi Hernandez — Emprendedor | Fundador de WellClub | Método C.E.O.',
    description: 'Transforma tu criterio, transforma tu vida. Fundador de WellClub y creador del Método C.E.O.',
    url: 'https://luigihernandez.com',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Luigi Hernandez',
  url: 'https://luigihernandez.com',
  description: 'Sitio oficial de Luigi Hernandez — Emprendedor, Fundador de WellClub y Creador del Método C.E.O.',
  author: { '@type': 'Person', name: 'Luigi Hernandez' },
}

const stats = [
  { value: '16+', label: 'Años de experiencia' },
  { value: '2', label: 'Países de impacto' },
  { value: '1', label: 'Libro publicado' },
  { value: '2', label: 'Empresas fundadas' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          backgroundColor: '#080808',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '20%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,146,42,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '4rem 1.5rem',
            width: '100%',
          }}
        >
          <AnimatedSection direction="up" delay={0}>
            <span
              style={{
                display: 'inline-block',
                border: '1px solid rgba(196,146,42,0.4)',
                borderRadius: '100px',
                padding: '0.35rem 1rem',
                fontSize: '0.8rem',
                color: '#C4922A',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Fundador de WellClub · Creador del Método C.E.O.
            </span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#F5F5F5',
                marginBottom: '1.5rem',
                maxWidth: '800px',
              }}
            >
              Transforma tu{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C4922A, #F0C040)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Criterio
              </span>
              ,<br />
              Transforma tu Vida
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#9CA3AF',
                lineHeight: 1.75,
                maxWidth: '560px',
                marginBottom: '2.5rem',
              }}
            >
              De Caracas a Estados Unidos, Luigi Hernandez construyó dos empresas sobre un principio
              simple: las mejores decisiones nacen del criterio, no del azar. Fundador de WellClub
              y creador del Método C.E.O.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/libros" className="btn-primary">
                Conocer el Método C.E.O.
              </Link>
              <Link href="/sobre-mi" className="btn-secondary">
                Mi historia
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: '#111111', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} direction="up" delay={i * 0.1}>
                <div>
                  <p
                    style={{
                      fontSize: '3rem',
                      fontWeight: 800,
                      color: '#C4922A',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '0.875rem', fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ backgroundColor: '#080808', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <AnimatedSection direction="right">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  maxWidth: '440px',
                }}
              >
                <Image
                  src="/images/fotos/luigi-hires-1.jpg"
                  alt="Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <span className="section-divider-left" style={{ marginBottom: '1.5rem' }} />
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#F5F5F5',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                Una historia de criterio,
                <br />
                <span style={{ color: '#C4922A' }}>constancia y propósito</span>
              </h2>
              <p
                style={{
                  color: '#9CA3AF',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                Nació en Caracas en 1982. Hijo único criado por su madre, abuela y tía. Estudió
                administración de empresas, conoció a su esposa en 2007, y en 2010 hizo el salto
                más grande de su vida: mudarse a Estados Unidos.
              </p>
              <p
                style={{
                  color: '#9CA3AF',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                Desde entonces, ha construido dos empresas sobre una filosofía clara: el criterio
                es el recurso más escaso y más valioso que tiene un emprendedor.
              </p>
              <Link href="/sobre-mi" className="btn-secondary">
                Conocer mi historia completa
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ backgroundColor: '#080808', padding: '6rem 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#F5F5F5',
                marginTop: '1rem',
              }}
            >
              Cómo puedo ayudarte
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* WellClub */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className="card-dark" style={{ height: '100%' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(196,146,42,0.1)',
                    border: '1px solid rgba(196,146,42,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: '#C4922A',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.3rem', fontWeight: 700, color: '#F5F5F5', marginBottom: '0.75rem' }}
                >
                  WellClub
                </h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Seguros de salud y vida para familias e inmigrantes hispanos en Estados Unidos.
                  Planes personalizados, explicados en tu idioma, diseñados para tu situación real.
                </p>
                <Link href="/contacto" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.5rem' }}>
                  Cotizar cobertura
                </Link>
              </div>
            </AnimatedSection>

            {/* Método CEO */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="card-dark" style={{ height: '100%' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(196,146,42,0.1)',
                    border: '1px solid rgba(196,146,42,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: '#C4922A',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.3rem', fontWeight: 700, color: '#F5F5F5', marginBottom: '0.4rem' }}
                >
                  Método C.E.O.
                </h3>
                <p style={{ color: '#C4922A', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  Criterio · Estrategia · Oportunidad
                </p>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Mentoría de negocio para emprendedores que quieren tomar mejores decisiones,
                  construir estrategias sólidas y capitalizar oportunidades reales.
                </p>
                <Link href="/libros" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.5rem' }}>
                  Conocer el método
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LIBRO */}
      <section style={{ backgroundColor: '#111111', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <AnimatedSection direction="right">
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
                Libro
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#F5F5F5',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                Para, Piensa y Actúa
              </h2>
              <p
                style={{
                  color: '#9CA3AF',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                El Método C.E.O. condensado en un libro. Una guía práctica para emprendedores
                que quieren tomar decisiones con criterio, actuar con estrategia y avanzar
                capitalizando las oportunidades correctas.
              </p>
              <p
                style={{
                  color: '#9CA3AF',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                }}
              >
                <strong style={{ color: '#F5F5F5' }}>C</strong>riterio para decidir ·{' '}
                <strong style={{ color: '#F5F5F5' }}>E</strong>strategia para actuar ·{' '}
                <strong style={{ color: '#F5F5F5' }}>O</strong>portunidad para avanzar
              </p>
              <Link href="/libros" className="btn-primary">
                Ver detalles del libro
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  maxWidth: '360px',
                  margin: '0 auto',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              >
                <Image
                  src="/images/fotos/libro-cover.jpg"
                  alt="Para, Piensa y Actúa — Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ backgroundColor: '#080808', padding: '6rem 0', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <AnimatedSection direction="right">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  maxWidth: '440px',
                }}
              >
                <Image
                  src="/images/fotos/luigi-hires-2.jpg"
                  alt="Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div style={{ color: '#C4922A', fontSize: '3rem', lineHeight: 1, marginBottom: '1rem' }}>
                &ldquo;
              </div>
              <blockquote
                style={{
                  color: '#F5F5F5',
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                }}
              >
                El criterio no se improvisa. Se construye con cada decisión, cada error y cada
                victoria. Mi misión es acortar el camino para los que vienen detrás.
              </blockquote>
              <div>
                <p style={{ color: '#F5F5F5', fontWeight: 700, fontSize: '1rem' }}>Luigi Hernandez</p>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
                  Fundador de WellClub · Creador del Método C.E.O.
                </p>
              </div>
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #222',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9CA3AF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  SH
                </div>
                <div>
                  <p style={{ color: '#F5F5F5', fontSize: '0.875rem', fontWeight: 600 }}>
                    Spencer Hoffmann
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Mentor y referente</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTACTO INLINE */}
      <section style={{ backgroundColor: '#111111', padding: '6rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#F5F5F5',
                marginTop: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              Hablemos
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '1rem' }}>
              ¿Tienes una pregunta sobre el Método C.E.O., WellClub o mis conferencias? Escríbeme.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
