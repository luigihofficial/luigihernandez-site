'use client'

import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/libros', label: 'Libro' },
  { href: '/conferencias', label: 'Conferencias' },
  { href: '/blog', label: 'Blog' },
  { href: '/prensa', label: 'Prensa' },
  { href: '/contacto', label: 'Contacto' },
]

const socials = [
  {
    name: 'Instagram',
    handle: '@luigihofficial',
    href: 'https://www.instagram.com/luigihofficial',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@Luigihofficial',
    href: 'https://www.youtube.com/@Luigihofficial',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@Luigihofficial',
    href: 'https://www.tiktok.com/@Luigihofficial',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.74a4.84 4.84 0 0 1-1-.05z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#080808',
        borderTop: '2px solid #C4922A',
        paddingTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '2px solid #C4922A',
                  color: '#C4922A',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}
              >
                LH
              </span>
              <span style={{ color: '#F5F5F5', fontWeight: 600, fontSize: '1rem' }}>
                Luigi Hernandez
              </span>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Emprendedor venezolano-americano. Fundador de WellClub y creador del Método C.E.O.
              Transformando criterio en resultados.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              style={{
                color: '#C4922A',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              Sitio
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C4922A')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9CA3AF')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h3
              style={{
                color: '#C4922A',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              Redes Sociales
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#9CA3AF',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = '#C4922A'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = '#9CA3AF'
                  }}
                >
                  {s.icon}
                  <span>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                color: '#C4922A',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              Contacto
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="mailto:info@luigihofficial.com"
                style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem' }}
              >
                info@luigihofficial.com
              </a>
              <a
                href="https://wa.me/17862602547"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.875rem' }}
              >
                WhatsApp: +1 786 260 2547
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid #1a1a1a',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ color: '#555', fontSize: '0.8rem' }}>
            &copy; 2026 Luigi Hernandez. Todos los derechos reservados.
          </p>
          <p style={{ color: '#555', fontSize: '0.8rem' }}>
            luigihernandez.com
          </p>
        </div>
      </div>
    </footer>
  )
}
