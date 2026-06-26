'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinksES = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/metodo-ceo', label: 'Método C.E.O.' },
  { href: '/wellclub', label: 'WellClub' },
  { href: '/conferencias', label: 'Conferencias' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

const navLinksEN = [
  { href: '/en', label: 'Home' },
  { href: '/en/about', label: 'About' },
  { href: '/en/ceo-method', label: 'C.E.O. Method' },
  { href: '/en/wellclub', label: 'WellClub' },
  { href: '/en/conferences', label: 'Conferences' },
  { href: '/en/blog', label: 'Blog' },
  { href: '/en/contact', label: 'Contact' },
]

const langMap: Record<string, string> = {
  '/': '/en',
  '/sobre-mi': '/en/about',
  '/metodo-ceo': '/en/ceo-method',
  '/wellclub': '/en/wellclub',
  '/libros': '/en/books',
  '/conferencias': '/en/conferences',
  '/contacto': '/en/contact',
  '/blog': '/en/blog',
  '/en': '/',
  '/en/about': '/sobre-mi',
  '/en/ceo-method': '/metodo-ceo',
  '/en/wellclub': '/wellclub',
  '/en/books': '/libros',
  '/en/conferences': '/conferencias',
  '/en/contact': '/contacto',
  '/en/blog': '/blog',
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isEN = pathname.startsWith('/en')
  const navLinks = isEN ? navLinksEN : navLinksES
  const altLang = langMap[pathname] ?? (isEN ? '/' : '/en')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const LangToggle = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
      <Link
        href={isEN ? altLang : pathname}
        style={{
          fontSize: '0.75rem',
          fontWeight: isEN ? 500 : 700,
          color: isEN ? '#9B8F87' : '#C4922A',
          textDecoration: 'none',
          letterSpacing: '0.08em',
          padding: '0.2rem 0.35rem',
        }}
      >
        ES
      </Link>
      <span style={{ color: '#C8BFB8', fontSize: '0.65rem' }}>|</span>
      <Link
        href={isEN ? pathname : altLang}
        style={{
          fontSize: '0.75rem',
          fontWeight: isEN ? 700 : 500,
          color: isEN ? '#C4922A' : '#9B8F87',
          textDecoration: 'none',
          letterSpacing: '0.08em',
          padding: '0.2rem 0.35rem',
        }}
      >
        EN
      </Link>
    </div>
  )

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: scrolled ? 'rgba(250,248,244,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(232,221,211,0.8)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link
          href={isEN ? '/en' : '/'}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/luigi-hernandez-badge.png"
            alt=""
            style={{ width: '36px', height: '36px', mixBlendMode: 'multiply', flexShrink: 0 }}
          />
          <span style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.02em' }}>
            Luigi Hernandez
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#C4922A' : '#5C5652',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#1C2B4A' }}
                onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#5C5652' }}
              >
                {link.label}
              </Link>
            )
          })}
          <div style={{ width: '1px', height: '16px', backgroundColor: '#E8DDD3' }} />
          <LangToggle />
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          className="hamburger-btn"
          aria-label="Abrir menú"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#1C2B4A', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#1C2B4A', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#1C2B4A', transition: 'transform 0.2s, opacity 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: 'rgba(250,248,244,0.98)',
          backdropFilter: 'blur(16px)',
          overflow: 'hidden',
          maxHeight: menuOpen ? '460px' : '0',
          transition: 'max-height 0.3s ease',
          borderTop: menuOpen ? '1px solid #E8DDD3' : 'none',
        }}
        className="mobile-menu"
      >
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem', gap: '0' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#C4922A' : '#5C5652',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid #F0EAE1',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <div style={{ paddingTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#9B8F87' }}>Idioma:</span>
            <LangToggle />
          </div>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
