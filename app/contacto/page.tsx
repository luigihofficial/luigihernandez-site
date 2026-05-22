import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Contacto — Luigi Hernandez',
  description:
    'Escríbele a Luigi Hernandez. Consultas sobre el Método C.E.O., WellClub, conferencias o colaboraciones.',
  openGraph: {
    title: 'Contacto — Luigi Hernandez',
    description: 'Ponerse en contacto con Luigi Hernandez.',
    url: 'https://luigihernandez.com/contacto',
  },
}

export default function ContactoPage() {
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
              Contacto
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
              Hablemos
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '560px' }}>
              Ya sea sobre mentoría, WellClub, una conferencia o simplemente para conectar —
              me alegra escucharte.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: '#080808', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Sidebar */}
            <AnimatedSection direction="right" style={{ order: 2 }}>
              <ContactSidebar />
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="left" style={{ order: 1 }}>
              <div className="card-dark">
                <h2
                  style={{
                    color: '#F5F5F5',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  Envía un mensaje
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
