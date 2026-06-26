import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Conferencias y Keynotes — Luigi Hernandez',
  description:
    'Luigi Hernandez como speaker: keynotes sobre criterio estratégico, emprendimiento inmigrante y bienestar como ventaja competitiva. Disponible para eventos corporativos y empresariales.',
  openGraph: {
    title: 'Conferencias y Keynotes — Luigi Hernandez',
    description: 'Speaker disponible para eventos. Tres keynotes especializadas en emprendimiento, liderazgo y bienestar.',
    url: 'https://luigihernandez.com/conferencias',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿En qué idiomas da conferencias Luigi Hernandez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Luigi Hernandez presenta en español e inglés. Para audiencias bilingües puede hacer presentaciones combinadas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura una conferencia de Luigi Hernandez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los formatos disponibles van desde keynotes de 30 minutos hasta talleres de 3 horas. Se adapta a las necesidades del evento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para qué tipo de audiencias está disponible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eventos corporativos, cámaras de comercio, convenciones de emprendedores, eventos de la comunidad hispana, universidades y programas de liderazgo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se contrata a Luigi Hernandez como speaker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A través del formulario de contacto en luigihernandez.com/contacto o directamente por email a info@luigihofficial.com.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede personalizar el contenido de la conferencia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Luigi adapta el contenido a la industria, el contexto y los objetivos específicos del evento contratante.',
      },
    },
  ],
}

const keynotes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Criterio Estratégico para Emprendedores y Líderes',
    subtitle: 'El recurso más escaso del emprendimiento moderno',
    description:
      'Una conferencia que transforma la manera en que los líderes toman decisiones. Luigi desglosa el Método C.E.O. de manera práctica, con casos reales de su trayectoria emprendedora. Los asistentes salen con un marco concreto para mejorar inmediatamente la calidad de sus decisiones.',
    duration: '45–60 min',
    audience: 'Líderes, emprendedores, equipos directivos',
    deliverables: ['Marco del Método C.E.O.', 'Ejercicio práctico de criterio', 'Recursos post-keynote'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'De Inmigrante a Fundador: Lecciones de Resiliencia',
    subtitle: 'Lo que el camino del inmigrante enseña sobre el emprendimiento',
    description:
      'Una historia personal que se convierte en manual práctico. Luigi comparte su trayectoria de Venezuela a Estados Unidos con honestidad y sin idealizaciones. Ideal para audiencias hispanas, eventos de diversidad e inclusión, y organizaciones que buscan inspirar a sus equipos desde la autenticidad.',
    duration: '30–50 min',
    audience: 'Comunidades hispanas, eventos de diversidad, convenciones empresariales',
    deliverables: ['Narrativa motivacional con sustancia', 'Cinco decisiones transformadoras', 'Sesión de Q&A incluida'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Bienestar como Ventaja Competitiva: El Modelo WellClub',
    subtitle: 'Por qué las empresas que priorizan el bienestar ganan en el largo plazo',
    description:
      'Desde la experiencia de fundar WellClub, Luigi presenta el caso de negocio para el bienestar integral en las organizaciones. Una conferencia que combina datos, experiencia práctica y el marco C.E.O. para mostrar cómo el bienestar de los equipos no es gasto sino inversión estratégica.',
    duration: '45–75 min',
    audience: 'Directivos de RRHH, líderes empresariales, convenciones de seguros y salud',
    deliverables: ['Modelo de bienestar organizacional', 'Checklist de diagnóstico', 'Plan de acción inmediata'],
  },
]

const faqs = [
  {
    q: '¿En qué idiomas presenta Luigi Hernandez?',
    a: 'En español e inglés. Para audiencias bilingües puede hacer presentaciones combinadas.',
  },
  {
    q: '¿Cuánto dura una conferencia?',
    a: 'Los formatos van desde keynotes de 30 minutos hasta talleres de 3 horas. Se adapta a las necesidades del evento.',
  },
  {
    q: '¿Para qué tipo de audiencias está disponible?',
    a: 'Eventos corporativos, cámaras de comercio, convenciones de emprendedores, eventos de la comunidad hispana, universidades y programas de liderazgo.',
  },
  {
    q: '¿Cómo se hace la contratación?',
    a: 'A través del formulario de contacto o directamente por email a info@luigihofficial.com. El proceso es simple y rápido.',
  },
  {
    q: '¿Personaliza el contenido para cada evento?',
    a: 'Siempre. Luigi adapta el contenido a la industria, el contexto y los objetivos específicos de cada evento contratante.',
  },
]

export default function ConferenciasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '4rem' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ maxWidth: '700px' }}>
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
              Speaker disponible
            </span>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
              }}
            >
              Conferencias que
              <br />
              <span style={{ color: '#C4922A' }}>mueven equipos</span>
            </h1>
            <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Luigi Hernandez lleva a tu evento el criterio, la experiencia y la honestidad de
              quien construyó desde cero en un país nuevo. Tres keynotes disponibles, todas
              con sustancia práctica.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* EVENTO DESTACADO — Elevate Experience */}
      <section style={{ backgroundColor: '#FAF8F4', paddingBottom: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <a
              href="https://elevate.lospoderesdelexito.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(28,43,74,0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 30px 80px rgba(28,43,74,0.22)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 20px 60px rgba(28,43,74,0.15)'
              }}
            >
              <Image
                src="/images/eventos/elevate-experience-banner.png"
                alt="Elevate Experience — 5 Autores · 1 Escenario · 11 de julio 2026 · Miami"
                width={1400}
                height={466}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Keynotes */}
      <section style={{ backgroundColor: '#FAF8F4', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {keynotes.map((keynote, i) => (
              <AnimatedSection key={keynote.title} direction="up" delay={i * 0.1}>
                <div className="card-dark">
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: '1.5rem',
                      alignItems: 'start',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(196,146,42,0.1)',
                        border: '1px solid rgba(196,146,42,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C4922A',
                        flexShrink: 0,
                      }}
                    >
                      {keynote.icon}
                    </div>
                    <div>
                      <h2 style={{ color: '#1C2B4A', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                        {keynote.title}
                      </h2>
                      <p style={{ color: '#C4922A', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                        {keynote.subtitle}
                      </p>
                      <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                        {keynote.description}
                      </p>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                          gap: '1rem',
                          borderTop: '1px solid #E8DDD3',
                          paddingTop: '1.25rem',
                        }}
                      >
                        <div>
                          <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                            Duración
                          </p>
                          <p style={{ color: '#1C2B4A', fontSize: '0.875rem', fontWeight: 600 }}>{keynote.duration}</p>
                        </div>
                        <div>
                          <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                            Audiencia ideal
                          </p>
                          <p style={{ color: '#1C2B4A', fontSize: '0.875rem' }}>{keynote.audience}</p>
                        </div>
                        <div>
                          <p style={{ color: '#555', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                            Incluye
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {keynote.deliverables.map((d) => (
                              <li key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#5C5652', fontSize: '0.8rem' }}>
                                <span style={{ color: '#C4922A' }}>✓</span> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.3} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contacto" className="btn-primary">
              Contratar speaker
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '6rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
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
              Preguntas frecuentes
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} direction="up" delay={i * 0.07}>
                <div className="card-dark">
                  <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
