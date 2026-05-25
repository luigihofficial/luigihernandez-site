import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'WellClub — Seguros, Taxes, Notaría y Más | Luigi Hernandez',
  description:
    'WellClub ofrece seguros de salud y vida, preparación de taxes, bookkeeping, servicios de notaría y creación de LLC y corporaciones para familias hispanas en Estados Unidos.',
  openGraph: {
    title: 'WellClub — Servicios Financieros y Legales para Familias Hispanas',
    description: 'Seguros, taxes, bookkeeping, notaría y formación de empresas. En tu idioma.',
    url: 'https://luigihernandez.com/wellclub',
  },
}

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Seguros',
    description:
      'Planes de seguro adaptados a tu situación como familia o inmigrante en EE.UU. Salud, vida, auto, propiedades, viaje y más — te explicamos cada opción con claridad para que elijas con confianza.',
    details: [
      'Salud individual y familiar',
      'Marketplace (ACA/Obamacare)',
      'Seguros de vida a término y permanentes',
      'Seguros suplementales',
      'Gastos finales',
      'Auto y propiedades',
      'Coberturas internacionales',
      'Seguros de viaje',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Preparación de Taxes',
    description:
      'Declaración de impuestos para individuos, familias y negocios. Maximizamos tus deducciones de forma legal y te mantenemos en cumplimiento con el IRS.',
    details: ['Declaración personal (Form 1040)', 'Taxes para trabajadores independientes', 'Declaración de negocios (LLC, Corp)', 'ITINs y números de identificación fiscal'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Bookkeeping y Contabilidad',
    description:
      'Mantén las finanzas de tu negocio organizadas y al día. Registramos tus transacciones, reconciliamos cuentas y te preparamos para la temporada de taxes sin sorpresas.',
    details: ['Registro mensual de transacciones', 'Reconciliación bancaria', 'Reportes de Profit & Loss', 'Preparación para declaración anual'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Notario Público',
    description:
      'Luigi Hernandez es notario público certificado. Autenticamos documentos legales con validez oficial para trámites personales, laborales e inmigración.',
    details: ['Autenticación de documentos', 'Poderes notariales', 'Cartas de permiso y autorización', 'Documentos para trámites migratorios'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Creación de LLC y Corporaciones',
    description:
      'Formamos tu empresa de manera correcta desde el primer día. LLC, S-Corp, C-Corp — te asesoramos sobre la estructura ideal para tu negocio y tipo de actividad.',
    details: ['Registro de LLC en tu estado', 'Formación de S-Corp y C-Corp', 'EIN (número de identificación del empleador)', 'Operating Agreement y estatutos'],
  },
]

export default function WellClubPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#FAF8F4',
          paddingTop: '120px',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,146,42,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            <AnimatedSection direction="right">
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
                Servicios Profesionales
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  color: '#1C2B4A',
                  marginBottom: '1.25rem',
                  lineHeight: 1.1,
                }}
              >
                Tu bienestar financiero,{' '}
                <span style={{ color: '#C4922A' }}>en tus manos</span>
              </h1>
              <p
                style={{
                  color: '#5C5652',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                  maxWidth: '520px',
                }}
              >
                WellClub nació para servir a familias e inmigrantes hispanos que merecen acceso a servicios financieros y legales de calidad, explicados en su idioma y con atención personalizada.
              </p>
              <Link href="/contacto" className="btn-primary">
                Hablar con Luigi
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
                {/* Horizontal wordmark — visible on cream bg */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '360px',
                    height: '110px',
                  }}
                >
                  <Image
                    src="/images/logos/wellclub-logo.png"
                    alt="WellClub"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    sizes="360px"
                    priority
                  />
                </div>
                {/* Circular badge */}
                <div
                  style={{
                    position: 'relative',
                    width: '140px',
                    height: '140px',
                  }}
                >
                  <Image
                    src="/images/logos/wellclub-circular.png"
                    alt="WellClub"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="140px"
                  />
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '5', label: 'Servicios disponibles' },
              { value: '16+', label: 'Años de experiencia' },
              { value: '2', label: 'Estados de operación' },
              { value: '100%', label: 'En español' },
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

      {/* Services */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#1C2B4A',
                marginTop: '1rem',
              }}
            >
              Nuestros servicios
            </h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
              Todo lo que tu familia o negocio necesita, en un solo lugar.
            </p>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {services.map((service, i) => (
              <AnimatedSection key={service.title} direction="up" delay={i * 0.08}>
                <div
                  className="card-dark"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '2rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(196,146,42,0.07)',
                      border: '1px solid rgba(196,146,42,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C4922A',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                      {service.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {service.details.map((detail) => (
                        <span
                          key={detail}
                          style={{
                            fontSize: '0.78rem',
                            color: '#5C5652',
                            backgroundColor: '#F0EAE1',
                            border: '1px solid #E8DDD3',
                            borderRadius: '2px',
                            padding: '0.25rem 0.65rem',
                          }}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ flexShrink: 0 }}>
                    <Link
                      href="/contacto"
                      className="btn-secondary"
                      style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', whiteSpace: 'nowrap' }}
                    >
                      Consultar
                    </Link>
                  </div>
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
            {/* Logo on cream pill so colors show on navy bg */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FAF8F4',
                borderRadius: '8px',
                padding: '1rem 2rem',
                margin: '0 auto 2rem',
              }}
            >
              <div style={{ position: 'relative', width: '200px', height: '56px' }}>
                <Image
                  src="/images/logos/wellclub-logo.png"
                  alt="WellClub"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="200px"
                />
              </div>
            </div>
            <h2 style={{ color: '#FAF8F4', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>
              ¿Listo para empezar?
            </h2>
            <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Agenda una consulta gratuita y te ayudamos a encontrar el servicio que necesitas. Sin compromiso, en español.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn-primary-light">
                Agendar consulta gratuita
              </Link>
              <a
                href="https://wa.me/17862602547"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-light"
              >
                WhatsApp directo
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
