'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/libros', label: 'Libro' },
  { href: '/conferencias', label: 'Conferencias' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(196,146,42,0.15)' : 'none',
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
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
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
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            LH
          </span>
          <span
            style={{
              color: '#F5F5F5',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.01em',
            }}
          >
            Luigi Hernandez
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#C4922A' : '#9CA3AF',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = '#F5F5F5'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = '#9CA3AF'
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
          className="hamburger-btn"
          aria-label="Abrir menú"
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#F5F5F5',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#F5F5F5',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#F5F5F5',
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: 'rgba(8,8,8,0.97)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0',
          transition: 'max-height 0.3s ease',
          borderTop: menuOpen ? '1px solid #222' : 'none',
        }}
        className="mobile-menu"
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem 1.5rem',
            gap: '0',
          }}
        >
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
                  color: isActive ? '#C4922A' : '#9CA3AF',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid #1a1a1a',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            )
          })}
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
