import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Para, Piensa y Actúa — El Método C.E.O. | Luigi Hernandez',
  description:
    'El libro de Luigi Hernandez. El Método C.E.O.: Criterio para decidir, Estrategia para actuar, Oportunidad para avanzar. Una guía práctica para emprendedores y líderes.',
  openGraph: {
    title: 'Para, Piensa y Actúa — El Método C.E.O. | Luigi Hernandez',
    description: 'Criterio para decidir, Estrategia para actuar, Oportunidad para avanzar.',
    url: 'https://luigihernandez.com/libros',
    images: [{ url: '/images/fotos/libro-cover.jpg', width: 800, height: 1067, alt: 'Para, Piensa y Actúa' }],
  },
}

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Para, Piensa y Actúa',
  description: 'El Método C.E.O.: Criterio para decidir, Estrategia para actuar, Oportunidad para avanzar.',
  author: {
    '@type': 'Person',
    name: 'Luigi Hernandez',
    url: 'https://luigihernandez.com',
  },
  publisher: 'Luigi Hernandez',
  inLanguage: 'es',
  genre: 'Business & Entrepreneurship',
  url: 'https://luigihernandez.com/libros',
  image: 'https://luigihernandez.com/images/fotos/libro-cover.jpg',
}

const chapters = [
  {
    number: '01',
    title: 'El precio de decidir sin criterio',
    description: 'Por qué la mayoría de los errores de negocio no son de estrategia sino de criterio. La diferencia que lo cambia todo.',
  },
  {
    number: '02',
    title: 'Construyendo tu criterio paso a paso',
    description: 'Ejercicios prácticos para desarrollar el criterio como músculo. Desde la revisión de decisiones pasadas hasta la creación de tu propio marco.',
  },
  {
    number: '03',
    title: 'Estrategia: del pensamiento a la acción',
    description: 'Cómo convertir la claridad en un plan de acción concreto. Las tres preguntas que toda estrategia debe responder.',
  },
  {
    number: '04',
    title: 'Reconociendo oportunidades reales',
    description: 'La diferencia entre oportunidad y distracción. Cómo entrenar el ojo para ver lo que otros no ven en los mercados difíciles.',
  },
  {
    number: '05',
    title: 'El ciclo C.E.O. en práctica',
    description: 'Cómo integrar criterio, estrategia y oportunidad en un sistema de pensamiento continuo que mejora con cada ciclo.',
  },
  {
    number: '06',
    title: 'El emprendedor como líder',
    description: 'Liderazgo sin título. Cómo el Método C.E.O. transforma no solo tu negocio sino tu manera de relacionarte con los demás.',
  },
]

const learnings = [
  'Cómo desarrollar criterio estratégico para tomar decisiones sin arrepentirte',
  'El proceso de tres pasos para diseñar una estrategia que resista la realidad',
  'Las señales que distinguen una oportunidad real de una distracción costosa',
  'Por qué el liderazgo es una práctica diaria, no un cargo que se obtiene',
  'Cómo navegar la incertidumbre desde la claridad de propósito',
  'Las herramientas prácticas que usan los emprendedores más efectivos',
]

export default function LibrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          backgroundColor: '#080808',
          paddingTop: '120px',
          paddingBottom: '4rem',
        }}
      >
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
              <div style={{ marginBottom: '1rem' }}>
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
                    marginBottom: '1.25rem',
                  }}
                >
                  Libro
                </span>
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  color: '#F5F5F5',
                  marginBottom: '0.75rem',
                  lineHeight: 1.1,
                }}
              >
                Para, Piensa
                <br />y Actúa
              </h1>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: '#9CA3AF',
                  marginBottom: '1rem',
                  letterSpacing: '0.02em',
                }}
              >
                El Método{' '}
                <span style={{ color: '#C4922A', fontWeight: 700 }}>C</span>
                riterio ·{' '}
                <span style={{ color: '#C4922A', fontWeight: 700 }}>E</span>
                strategia ·{' '}
                <span style={{ color: '#C4922A', fontWeight: 700 }}>O</span>
                portunidad
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                El libro que condensa años de emprendimiento real en un sistema practicable.
                Para líderes y emprendedores que quieren dejar de improvisar y empezar a
                construir con criterio.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contacto" className="btn-primary">
                  Quiero el libro
                </Link>
                <Link href="/conferencias" className="btn-secondary">
                  Ver conferencias
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  maxWidth: '380px',
                  margin: '0 auto',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,146,42,0.1)',
                }}
              >
                <Image
                  src="/images/fotos/libro-cover.jpg"
                  alt="Para, Piensa y Actúa — Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Method explanation */}
      <section style={{ backgroundColor: '#111111', padding: '6rem 0' }}>
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
              El Método C.E.O.
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                letter: 'C',
                title: 'Criterio para decidir',
                description:
                  'El criterio es la base. Es la capacidad de evaluar la realidad sin engañarte a ti mismo, usando experiencia, valores e información de calidad. Sin criterio, la estrategia más brillante falla.',
              },
              {
                letter: 'E',
                title: 'Estrategia para actuar',
                description:
                  'La estrategia no es tener un plan. Es tener claridad sobre a dónde vas y por qué ese camino específico. Una buena estrategia responde tres preguntas: ¿dónde estoy?, ¿dónde quiero estar?, ¿cómo llego?',
              },
              {
                letter: 'O',
                title: 'Oportunidad para avanzar',
                description:
                  'La oportunidad no es lo que se presenta. Es lo que creas a partir de tu criterio y estrategia. Los emprendedores más exitosos no tuvieron más suerte. Estaban mejor posicionados para reconocerla.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.letter} direction="up" delay={i * 0.1}>
                <div className="card-dark" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(196,146,42,0.1)',
                      border: '2px solid rgba(196,146,42,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#C4922A',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                    }}
                  >
                    {item.letter}
                  </div>
                  <h3 style={{ color: '#F5F5F5', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section style={{ backgroundColor: '#080808', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
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
              Contenido del libro
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {chapters.map((chapter, i) => (
              <AnimatedSection key={chapter.number} direction="left" delay={i * 0.07}>
                <div
                  className="card-dark"
                  style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '1.25rem', alignItems: 'start' }}
                >
                  <span
                    style={{
                      color: '#C4922A',
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      letterSpacing: '-0.02em',
                      paddingTop: '0.1rem',
                    }}
                  >
                    {chapter.number}
                  </span>
                  <div>
                    <h3 style={{ color: '#F5F5F5', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
                      {chapter.title}
                    </h3>
                    <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7 }}>
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section style={{ backgroundColor: '#111111', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
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
              Qué aprenderás
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {learnings.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.07}>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    padding: '1rem',
                    backgroundColor: '#161616',
                    borderRadius: '6px',
                    border: '1px solid #222',
                  }}
                >
                  <span style={{ color: '#C4922A', flexShrink: 0, marginTop: '0.1rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.3} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contacto" className="btn-primary">
              Quiero este libro
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
