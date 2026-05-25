import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Prensa y Medios — Luigi Hernandez',
  description:
    'Sala de prensa de Luigi Hernandez. Recursos para periodistas: bio oficial, fotografías de alta resolución y datos de contacto para medios.',
  openGraph: {
    title: 'Prensa y Medios — Luigi Hernandez',
    description: 'Recursos para periodistas y medios de comunicación.',
    url: 'https://luigihernandez.com/prensa',
  },
}

const bioShort = `Luigi Hernandez (Luis Hernández) es emprendedor venezolano-americano, fundador de WellClub —empresa de seguros de salud y vida para la comunidad hispana en Estados Unidos— y creador del Método C.E.O. (Criterio, Estrategia, Oportunidad). Nacido en Caracas en 1982, se mudó a Estados Unidos en 2010 donde construyó sus empresas desde cero. Es autor del libro "Para, Piensa y Actúa" y speaker disponible para eventos empresariales y comunitarios. Reside en Estados Unidos con su esposa y dos hijas.`

const bioLong = `Luigi Hernandez (Luis Hernández) nació en Caracas, Venezuela, el 23 de enero de 1982. Hijo único de una madre soltera, creció en un entorno que le enseñó la resiliencia como práctica cotidiana. Estudió Administración de Empresas y desarrolló desde temprano una visión sistemática sobre la toma de decisiones en los negocios.

En 2010, junto a su esposa, tomó la decisión de mudarse a Estados Unidos en busca de nuevas oportunidades. Los primeros años fueron de aprendizaje intensivo: dominó el inglés a nivel de negocios, entendió el sistema financiero y de seguros americano, y construyó una red de contactos desde cero.

Fundó WellClub con la convicción de que las familias inmigrantes hispanas merecían acceso a seguros de salud y vida bien explicados, en su idioma y desde su contexto. La empresa se especializa en planes personalizados y acompañamiento integral.

Paralelamente, desarrolló el Método C.E.O. —Criterio para decidir, Estrategia para actuar, Oportunidad para avanzar— como marco de pensamiento para emprendedores. Este método está condensado en su libro "Para, Piensa y Actúa".

Luigi es speaker disponible para eventos corporativos, convenciones empresariales y eventos de la comunidad hispana. Reside en Estados Unidos con su esposa y sus dos hijas.`

export default function PrensaPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '4rem' }}
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
              Prensa y Medios
            </p>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
              }}
            >
              Sala de prensa
            </h1>
            <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px' }}>
              Recursos para periodistas, medios de comunicación y creadores de contenido que
              deseen cubrir a Luigi Hernandez, WellClub o el Método C.E.O.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming soon notice */}
      <section style={{ backgroundColor: '#FAF8F4', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(196,146,42,0.2)',
                borderRadius: '8px',
                padding: '2.5rem',
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(196,146,42,0.1)',
                  border: '1px solid rgba(196,146,42,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  color: '#C4922A',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h2 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                Kit de prensa próximamente
              </h2>
              <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
                Estamos preparando el kit de prensa completo con fotografías de alta resolución,
                logotipos y materiales descargables. Mientras tanto, puedes encontrar la
                información que necesitas más abajo o contactarnos directamente.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Media Kit content */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ marginBottom: '3.5rem' }}>
            <span className="section-divider-left" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginTop: '1rem',
                marginBottom: '0.5rem',
              }}
            >
              Biografía oficial (versión corta)
            </h2>
            <p style={{ color: '#5C5652', fontSize: '0.8rem' }}>Para programas, presentaciones y fichas de speaker</p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div
              className="card-dark"
              style={{ marginBottom: '3rem', position: 'relative' }}
            >
              <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.85, fontStyle: 'italic' }}>
                {bioShort}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15} style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginBottom: '0.5rem',
              }}
            >
              Biografía completa
            </h2>
            <p style={{ color: '#5C5652', fontSize: '0.8rem', marginBottom: '1.5rem' }}>Para artículos y perfiles</p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="card-dark" style={{ marginBottom: '3rem' }}>
              {bioLong.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: i < 4 ? '1rem' : '0' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick facts */}
          <AnimatedSection direction="up" delay={0.25} style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginBottom: '1.5rem',
              }}
            >
              Datos rápidos
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem',
              }}
            >
              {[
                { label: 'Nombre completo', value: 'Luigi Hernandez (Luis Hernández)' },
                { label: 'Fecha de nacimiento', value: '23 de enero de 1982' },
                { label: 'Lugar de nacimiento', value: 'Caracas, Venezuela' },
                { label: 'Nacionalidad', value: 'Venezolano-Americano' },
                { label: 'Empresa 1', value: 'WellClub (seguros de salud y vida)' },
                { label: 'Empresa 2', value: 'Método C.E.O. (mentoría)' },
                { label: 'Libro', value: '"Para, Piensa y Actúa"' },
                { label: 'Idiomas', value: 'Español, Inglés' },
                { label: 'Instagram', value: '@luigihofficial' },
                { label: 'YouTube', value: '@Luigihofficial' },
              ].map((item) => (
                <div key={item.label} className="card-dark" style={{ padding: '1rem 1.25rem' }}>
                  <p style={{ color: '#555', fontSize: '0.75rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.label}
                  </p>
                  <p style={{ color: '#1C2B4A', fontSize: '0.875rem', fontWeight: 600 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact for media */}
          <AnimatedSection direction="up" delay={0.35}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(196,146,42,0.2)',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                Contacto para medios
              </h3>
              <p style={{ color: '#5C5652', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Para entrevistas, apariciones en medios, o solicitar materiales adicionales:
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="mailto:info@luigihofficial.com"
                  className="btn-primary"
                  style={{ fontSize: '0.875rem' }}
                >
                  info@luigihofficial.com
                </a>
                <Link href="/contacto" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
