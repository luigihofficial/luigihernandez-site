import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Sobre mí — Luigi Hernandez',
  description:
    'Conoce la historia de Luigi Hernandez: de Caracas, Venezuela a Estados Unidos. Emprendedor, fundador de WellClub y creador del Método C.E.O.',
  openGraph: {
    title: 'Sobre mí — Luigi Hernandez',
    description:
      'De Caracas a Estados Unidos: la historia completa de Luigi Hernandez, emprendedor y fundador.',
    url: 'https://luigihernandez.com/sobre-mi',
  },
}

const timeline = [
  {
    year: '1982',
    title: 'Nacimiento en Caracas',
    description:
      'Nace en Caracas, Venezuela, el 23 de enero. Hijo único de una madre extraordinaria, criado también por su abuela y su tía en un hogar lleno de fortaleza femenina.',
  },
  {
    year: '1990s',
    title: 'El océano como primer maestro',
    description:
      'Desde pequeño, la playa venezolana se convierte en su espacio de reflexión. Aprende de la constancia del mar lo que la escuela no puede enseñar: la paciencia y la ritmo del esfuerzo.',
  },
  {
    year: '2000s',
    title: 'Universidad y formación',
    description:
      'Estudia Administración de Empresas. Comienza a construir el pensamiento sistemático sobre negocios que más adelante evolucionará al Método C.E.O.',
  },
  {
    year: '2007',
    title: 'El amor llega',
    description:
      'Conoce a quien sería su esposa. Una relación que se convertiría en el pilar de todo lo que vendría después.',
  },
  {
    year: '2010',
    title: 'El gran salto: Estados Unidos',
    description:
      'Con su esposa, decide mudarse a Estados Unidos. Un nuevo país, un nuevo idioma en pleno dominio, un nuevo sistema. Los primeros años son de aprendizaje puro, humildad activa y construcción silenciosa.',
  },
  {
    year: '2010-2016',
    title: 'Los años de formación americana',
    description:
      'Navega los desafíos de ser inmigrante emprendedor: entender el sistema de seguros, construir una red de cero, dominar el inglés a nivel de negocios, y criando a sus hijas con su esposa.',
  },
  {
    year: '2016+',
    title: 'Fundación de WellClub',
    description:
      'Funda WellClub, empresa de seguros de salud y vida enfocada en la comunidad hispana. La misión: servir a las familias que el mercado tradicional ignoraba.',
  },
  {
    year: '2020+',
    title: 'El Método C.E.O. toma forma',
    description:
      'Años de experiencia emprendedora se cristalizan en el Método C.E.O.: Criterio para decidir, Estrategia para actuar, Oportunidad para avanzar.',
  },
  {
    year: '2024',
    title: '"Para, Piensa y Actúa"',
    description:
      'Publica su primer libro, condensando el Método C.E.O. en una guía práctica para emprendedores y líderes.',
  },
]

const values = [
  {
    title: 'Criterio sobre velocidad',
    description: 'Prefiero la decisión correcta a la decisión rápida. El criterio es el primer paso del Método C.E.O.',
  },
  {
    title: 'Familia como ancla',
    description: 'Mi esposa y mis dos hijas no son mi motivación. Son mi perspectiva. Me recuerdan por qué importa lo que hago.',
  },
  {
    title: 'Servicio genuino',
    description: 'En WellClub y en mis mentorías, el norte es siempre el bienestar real del cliente, no la comisión del mes.',
  },
  {
    title: 'Aprendizaje permanente',
    description: 'Cada libro, cada conversación, cada fracaso es información. El emprendedor que deja de aprender empieza a retroceder.',
  },
]

export default function SobreMiPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#FAF8F4',
          paddingTop: '120px',
          paddingBottom: '4rem',
        }}
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
              Historia
            </p>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              De Caracas a la primera fila
              <br />
              <span style={{ color: '#C4922A' }}>del emprendimiento</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: '#FAF8F4', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Photo */}
            <AnimatedSection direction="right">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                }}
              >
                <Image
                  src="/images/fotos/luigi-hires-1.jpg"
                  alt="Luigi Hernandez"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Quick facts */}
              <div
                className="card-dark"
                style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                {[
                  { label: 'Origen', value: 'Caracas, Venezuela' },
                  { label: 'Residencia', value: 'Estados Unidos' },
                  { label: 'Empresa 1', value: 'WellClub' },
                  { label: 'Empresa 2', value: 'Método C.E.O.' },
                  { label: 'Idiomas', value: 'Español, Inglés' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#5C5652', fontSize: '0.875rem' }}>{item.label}</span>
                    <span style={{ color: '#1C2B4A', fontSize: '0.875rem', fontWeight: 600 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Story text */}
            <AnimatedSection direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Nací en Caracas en enero de 1982. Hijo único de una madre que fue, al mismo tiempo,
                  todo lo que un padre y una madre pueden ser. Crecí en un hogar de mujeres fuertes —
                  mi madre, mi abuela, mi tía — que me enseñaron que la resiliencia no necesita anuncio.
                  Se ejerce en silencio, todos los días.
                </p>
                <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Desde pequeño, el océano fue mi lugar de pensamiento. La playa venezolana me enseñó
                  algo que ningún salón de clases pudo: la constancia del mar es la metáfora perfecta
                  del trabajo que construye cosas que duran.
                </p>
                <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Estudié Administración de Empresas y empecé a desarrollar el pensamiento sistemático
                  sobre negocios que con los años se convertiría en el Método C.E.O. En 2007 conocí
                  a mi esposa, y tres años después tomamos la decisión más valiente de nuestras vidas:
                  mudarnos a Estados Unidos.
                </p>
                <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Los primeros años en USA fueron de aprendizaje puro. Aprendí el inglés de los negocios,
                  no solo el de supervivencia. Aprendí cómo funciona el sistema de seguros americano.
                  Construí una red de cero. Y en medio de todo eso, con mi esposa, criamos a nuestras
                  dos hijas con los mismos valores que me formaron en Venezuela.
                </p>
                <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Fundé WellClub porque vi familias inmigrantes navegando solas un sistema incomprensible.
                  Creé el Método C.E.O. porque entendí que el criterio es el recurso más escaso en el
                  emprendimiento, y que podía ser enseñado. Escribí &ldquo;Para, Piensa y Actúa&rdquo; porque quería
                  que esas ideas llegaran más lejos de lo que puedo llegar yo personalmente.
                </p>
                <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Spencer Hoffmann es mi mentor y referente, alguien que llegó antes y dejó el camino
                  más transitado. Eso es exactamente lo que yo quiero ser para la próxima generación
                  de emprendedores.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/libros" className="btn-primary">
                    Conocer el Método C.E.O.
                  </Link>
                  <Link href="/contacto" className="btn-secondary">
                    Contactar
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
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
              La línea del tiempo
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} direction="left" delay={i * 0.05}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '1.5rem',
                    paddingBottom: '2rem',
                    borderLeft: i < timeline.length - 1 ? '1px solid #222' : 'none',
                    marginLeft: '80px',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-8px',
                      top: '4px',
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      backgroundColor: '#C4922A',
                      border: '3px solid #111111',
                    }}
                  />
                  <div style={{ marginLeft: '-80px', paddingLeft: '0' }}>
                    <span
                      style={{
                        color: '#C4922A',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        position: 'absolute',
                        left: '-80px',
                        top: '0',
                        width: '60px',
                        textAlign: 'right',
                      }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        color: '#1C2B4A',
                        fontWeight: 700,
                        fontSize: '1rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '6rem 0' }}>
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
              Lo que guía mis decisiones
            </h2>
          </AnimatedSection>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {values.map((v, i) => (
              <AnimatedSection key={v.title} direction="up" delay={i * 0.1}>
                <div className="card-dark">
                  <h3
                    style={{
                      color: '#C4922A',
                      fontWeight: 700,
                      fontSize: '1rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {v.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
