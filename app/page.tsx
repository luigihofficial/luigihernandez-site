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
          backgroundColor: '#FAF8F4',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gold decoration */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '15%',
            right: '-3%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,146,42,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,146,42,0.04) 0%, transparent 70%)',
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
                border: '1px solid rgba(196,146,42,0.5)',
                borderRadius: '2px',
                padding: '0.35rem 1rem',
                fontSize: '0.75rem',
                color: '#C4922A',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
              }}
            >
              Creador del Método C.E.O.
            </span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                color: '#1C2B4A',
                marginBottom: '1.5rem',
                maxWidth: '800px',
              }}
            >
              Transforma tu{' '}
              <span style={{ color: '#C4922A' }}>Criterio</span>,
              <br />
              Transforma tu Vida
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#5C5652',
                lineHeight: 1.8,
                maxWidth: '540px',
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

      {/* STATS — Navy strip */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '4rem 0' }}>
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
                  <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '0.875rem', fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '5rem',
              alignItems: 'center',
            }}
          >
            <AnimatedSection direction="right">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  maxWidth: '440px',
                  boxShadow: '0 20px 60px rgba(28,43,74,0.12)',
                }}
              >
                <Image
                  src="/images/fotos/luigi-hires-1.jpg"
                  alt="Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <span className="section-divider-left" style={{ marginBottom: '1.5rem' }} />
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#1C2B4A',
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
                  color: '#5C5652',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '1rem',
                }}
              >
                Nació en Caracas en 1982. Hijo único criado por su madre, abuela y tía. Estudió
                administración de empresas, conoció a su esposa en 2007, y en 2010 hizo el salto
                más grande de su vida: mudarse a Estados Unidos.
              </p>
              <p
                style={{
                  color: '#5C5652',
                  fontSize: '1rem',
                  lineHeight: 1.85,
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
      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#1C2B4A',
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
            {/* Método CEO */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className="card-dark" style={{ height: '100%' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(196,146,42,0.08)',
                    border: '1px solid rgba(196,146,42,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: '#C4922A',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1C2B4A', marginBottom: '0.4rem' }}
                >
                  Método C.E.O.
                </h3>
                <p style={{ color: '#C4922A', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Criterio · Estrategia · Oportunidad
                </p>
                <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Mentoría de negocio para emprendedores que quieren tomar mejores decisiones,
                  construir estrategias sólidas y capitalizar oportunidades reales.
                </p>
                <Link href="/libros" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.5rem' }}>
                  Conocer el método
                </Link>
              </div>
            </AnimatedSection>

            {/* WellClub */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="card-dark" style={{ height: '100%' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(196,146,42,0.08)',
                    border: '1px solid rgba(196,146,42,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    color: '#C4922A',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3
                  style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1C2B4A', marginBottom: '0.75rem' }}
                >
                  WellClub
                </h3>
                <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Servicios financieros, legales y de seguros para familias e inmigrantes hispanos en Estados Unidos. Explicados en tu idioma, diseñados para tu situación real.
                </p>
                <Link href="/wellclub" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.5rem' }}>
                  Ver todos los servicios
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LIBRO */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '5rem',
              alignItems: 'center',
            }}
          >
            <AnimatedSection direction="right">
              <span className="section-divider-left" style={{ marginBottom: '1.5rem' }} />
              <p
                style={{
                  color: '#C4922A',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '0.75rem',
                }}
              >
                Libro
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#1C2B4A',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                Para, Piensa y Actúa
              </h2>
              <p
                style={{
                  color: '#5C5652',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '1rem',
                }}
              >
                El Método C.E.O. condensado en un libro. Una guía práctica para emprendedores
                que quieren tomar decisiones con criterio, actuar con estrategia y avanzar
                capitalizando las oportunidades correctas.
              </p>
              <p
                style={{
                  color: '#5C5652',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '2rem',
                }}
              >
                <strong style={{ color: '#1C2B4A' }}>C</strong>riterio para decidir ·{' '}
                <strong style={{ color: '#1C2B4A' }}>E</strong>strategia para actuar ·{' '}
                <strong style={{ color: '#1C2B4A' }}>O</strong>portunidad para avanzar
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.amazon.com/dp/B0GXC6RCCC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Comprar en Kindle
                </a>
                <Link href="/libros" className="btn-secondary">
                  Ver detalles
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  maxWidth: '360px',
                  margin: '0 auto',
                  boxShadow: '0 24px 64px rgba(28,43,74,0.15)',
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

      {/* QUOTE — Navy section */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '5rem',
              alignItems: 'center',
            }}
          >
            <AnimatedSection direction="right">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  maxWidth: '440px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                }}
              >
                <Image
                  src="/images/fotos/luigi-foto-1.jpg"
                  alt="Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div style={{ color: '#C4922A', fontSize: '4rem', lineHeight: 0.8, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>
                &ldquo;
              </div>
              <blockquote
                style={{
                  color: '#FAF8F4',
                  fontSize: '1.3rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  fontWeight: 300,
                }}
              >
                El criterio no se improvisa. Se construye con cada decisión, cada error y cada
                victoria. Mi misión es acortar el camino para los que vienen detrás.
              </blockquote>
              <div style={{ borderTop: '1px solid rgba(196,146,42,0.3)', paddingTop: '1.5rem' }}>
                <p style={{ color: '#FAF8F4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Luigi Hernandez</p>
                <p style={{ color: 'rgba(250,248,244,0.55)', fontSize: '0.875rem' }}>
                  Fundador de WellClub · Creador del Método C.E.O.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginTop: '1rem',
                marginBottom: '0.75rem',
              }}
            >
              Hablemos
            </h2>
            <p style={{ color: '#5C5652', fontSize: '1rem' }}>
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
