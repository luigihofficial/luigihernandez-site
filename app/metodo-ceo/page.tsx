import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'El Método C.E.O. — Criterio, Estrategia y Oportunidad | Luigi Hernandez',
  description:
    'El Método C.E.O. de Luigi Hernandez: un sistema de pensamiento para emprendedores y líderes hispanos. Criterio para decidir, Estrategia para actuar, Oportunidad para avanzar.',
  openGraph: {
    title: 'El Método C.E.O. — Luigi Hernandez',
    description: 'Criterio para decidir. Estrategia para actuar. Oportunidad para avanzar.',
    url: 'https://luigihernandez.com/metodo-ceo',
  },
}

const pillars = [
  {
    letter: 'C',
    title: 'Criterio para decidir',
    description:
      'El criterio es la base de todo. Es la capacidad de evaluar la realidad sin engañarte a ti mismo — usando experiencia, valores e información de calidad. La mayoría de los errores de negocio no son de estrategia: son de criterio.',
    points: [
      'Revisar decisiones pasadas sin ego',
      'Crear tu propio marco de evaluación',
      'Distinguir lo urgente de lo importante',
      'Decidir desde claridad, no desde miedo',
    ],
  },
  {
    letter: 'E',
    title: 'Estrategia para actuar',
    description:
      'La estrategia no es tener un plan — es tener claridad sobre a dónde vas y por qué ese camino específico. Una buena estrategia responde tres preguntas: ¿dónde estoy?, ¿dónde quiero estar?, ¿cómo llego?',
    points: [
      'Diseñar el camino con recursos reales',
      'Priorizar sin distraerte con todo',
      'Ejecutar por fases medibles',
      'Ajustar sin abandonar el rumbo',
    ],
  },
  {
    letter: 'O',
    title: 'Oportunidad para avanzar',
    description:
      'La oportunidad no es lo que se presenta — es lo que creas a partir de tu criterio y estrategia. Los emprendedores más exitosos no tuvieron más suerte. Estaban mejor posicionados para reconocerla cuando apareció.',
    points: [
      'Entrenar el ojo para ver lo que otros no ven',
      'Distinguir oportunidad de distracción',
      'Crear condiciones favorables antes de actuar',
      'Avanzar con confianza, no con impulsividad',
    ],
  },
]

const forWho = [
  {
    title: 'El emprendedor que improvisa',
    description: 'Tienes energía y visión, pero cada semana es diferente. El Método C.E.O. te da estructura sin quitarte agilidad.',
  },
  {
    title: 'El dueño de negocio sin brújula',
    description: 'Tu negocio creció, pero sientes que no tienes control real. Aquí aprendes a tomar el timón de verdad.',
  },
  {
    title: 'El líder que quiere decidir mejor',
    description: 'Las decisiones te pesan más cuando hay más en juego. El método te da un sistema, no una fórmula mágica.',
  },
  {
    title: 'El profesional que quiere más',
    description: 'Tienes habilidades pero no has encontrado la forma de convertirlas en autoridad y negocio sostenible.',
  },
]

const formats = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: 'El libro',
    subtitle: 'Para, Piensa y Actúa',
    description: 'La versión completa del método en papel y Kindle. Seis capítulos, ejercicios prácticos, y el sistema completo para aplicarlo desde el día uno.',
    cta: 'Comprar el libro',
    href: 'https://www.amazon.com/dp/B0H56HML2C',
    external: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Mentoría 1 a 1',
    subtitle: 'Sesiones personalizadas',
    description: 'Aplicamos el Método C.E.O. directamente a tu negocio o situación específica. Sesiones de trabajo real, no coaching genérico.',
    cta: 'Agendar sesión',
    href: '/contacto',
    external: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Conferencias',
    subtitle: 'Para equipos y organizaciones',
    description: 'El Método C.E.O. llevado a tu empresa, organización o evento. Contenido práctico que transforma la forma en que tu equipo decide y actúa.',
    cta: 'Ver conferencias',
    href: '/conferencias',
    external: false,
  },
]

export default function MetodoCEOPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ maxWidth: '780px' }}>
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
                marginBottom: '1.5rem',
              }}
            >
              El Método
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#C4922A' }}>C</span>riterio.{' '}
              <span style={{ color: '#C4922A' }}>E</span>strategia.{' '}
              <span style={{ color: '#C4922A' }}>O</span>portunidad.
            </h1>
            <p style={{ color: '#5C5652', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '600px' }}>
              No es un framework de 12 pasos. Es un sistema de pensamiento para emprendedores y líderes que quieren dejar de improvisar y construir con criterio real.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.amazon.com/dp/B0H56HML2C"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Comprar el libro
              </a>
              <Link href="/contacto" className="btn-secondary">
                Agendar mentoría
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '16+', label: 'Años aplicando el método' },
              { value: '3', label: 'Pilares fundamentales' },
              { value: '1', label: 'Sistema de pensamiento' },
              { value: '∞', label: 'Ciclos de mejora' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} direction="up" delay={i * 0.1}>
                <div>
                  <p style={{ fontSize: '2.5rem', fontWeight: 800, color: '#C4922A', lineHeight: 1, marginBottom: '0.4rem' }}>{stat.value}</p>
                  <p style={{ color: 'rgba(250,248,244,0.6)', fontSize: '0.875rem' }}>{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>
              Los tres pilares
            </h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>
              Cada pilar se construye sobre el anterior. Sin criterio, la estrategia falla. Sin estrategia, no hay oportunidad real.
            </p>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.letter} direction="up" delay={i * 0.1}>
                <div
                  className="card-dark"
                  style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'start' }}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(196,146,42,0.08)',
                      border: '2px solid rgba(196,146,42,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C4922A',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {pillar.letter}
                  </div>
                  <div>
                    <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.6rem' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                      {pillar.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {pillar.points.map((point) => (
                        <span
                          key={point}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.8rem',
                            color: '#5C5652',
                            backgroundColor: '#F0EAE1',
                            border: '1px solid #E8DDD3',
                            borderRadius: '2px',
                            padding: '0.25rem 0.65rem',
                          }}
                        >
                          <span style={{ color: '#C4922A', fontSize: '0.7rem' }}>◆</span>
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>
              ¿Para quién es?
            </h2>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {forWho.map((item, i) => (
              <AnimatedSection key={item.title} direction="up" delay={i * 0.08}>
                <div className="card-dark" style={{ height: '100%' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '2px',
                      backgroundColor: '#C4922A',
                      marginBottom: '1.25rem',
                    }}
                  />
                  <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.75 }}>
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>
              Cómo aprenderlo
            </h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>
              Elige el formato que mejor se adapta a tu momento y ritmo.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {formats.map((format, i) => (
              <AnimatedSection key={format.title} direction="up" delay={i * 0.1}>
                <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(196,146,42,0.07)',
                      border: '1px solid rgba(196,146,42,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C4922A',
                      marginBottom: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {format.icon}
                  </div>
                  <p style={{ color: '#C4922A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    {format.subtitle}
                  </p>
                  <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                    {format.title}
                  </h3>
                  <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem', flex: 1 }}>
                    {format.description}
                  </p>
                  {format.external ? (
                    <a
                      href={format.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', textAlign: 'center' }}
                    >
                      {format.cta}
                    </a>
                  ) : (
                    <Link
                      href={format.href}
                      className="btn-secondary"
                      style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', textAlign: 'center' }}
                    >
                      {format.cta}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '6rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: '#FAF8F4', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem' }}>
              ¿Listo para aplicar el método?
            </h2>
            <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Empieza con el libro, o habla directamente conmigo si quieres aplicarlo a tu negocio con acompañamiento.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.amazon.com/dp/B0H56HML2C"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-light"
              >
                Comprar el libro
              </a>
              <Link href="/contacto" className="btn-secondary-light">
                Hablar con Luigi
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
