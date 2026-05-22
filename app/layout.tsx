import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://luigihernandez.com'),
  title: {
    default: 'Luigi Hernandez — Emprendedor | Fundador de WellClub | Método C.E.O.',
    template: '%s | Luigi Hernandez',
  },
  description:
    'Luigi Hernandez es emprendedor venezolano-americano, fundador de WellClub y creador del Método C.E.O. (Criterio, Estrategia, Oportunidad). Autor del libro "Para, Piensa y Actúa". Transformando vidas a través del bienestar y el liderazgo estratégico.',
  keywords: [
    'Luigi Hernandez',
    'Luis Hernández emprendedor',
    'WellClub',
    'Método CEO',
    'Para Piensa y Actúa',
    'emprendedor venezolano',
    'seguros de salud',
    'mentoría negocios',
    'liderazgo estratégico',
    'criterio estratégico',
  ],
  authors: [{ name: 'Luigi Hernandez', url: 'https://luigihernandez.com' }],
  creator: 'Luigi Hernandez',
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: 'https://luigihernandez.com',
    siteName: 'Luigi Hernandez',
    title: 'Luigi Hernandez — Emprendedor | Fundador de WellClub | Método C.E.O.',
    description:
      'Emprendedor venezolano-americano, fundador de WellClub y creador del Método C.E.O. Transforma tu criterio, transforma tu vida.',
    images: [
      {
        url: '/images/fotos/luigi-hires-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Luigi Hernandez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luigi Hernandez — Emprendedor | Fundador de WellClub | Método C.E.O.',
    description:
      'Fundador de WellClub y creador del Método C.E.O. Autor de "Para, Piensa y Actúa".',
    images: ['/images/fotos/luigi-hires-1.jpg'],
    creator: '@luigihofficial',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luigi Hernandez',
  alternateName: 'Luis Hernández',
  birthDate: '1982-01-23',
  nationality: [
    { '@type': 'Country', name: 'Venezuela' },
    { '@type': 'Country', name: 'United States' },
  ],
  jobTitle: 'Emprendedor, Fundador y Autor',
  description:
    'Emprendedor venezolano-americano, fundador de WellClub y creador del Método C.E.O. Autor del libro "Para, Piensa y Actúa".',
  url: 'https://luigihernandez.com',
  sameAs: [
    'https://www.instagram.com/luigihofficial',
    'https://www.youtube.com/@Luigihofficial',
    'https://www.tiktok.com/@Luigihofficial',
    'https://github.com/luigihofficial',
  ],
  knowsAbout: [
    'Emprendimiento',
    'Liderazgo',
    'Bienestar',
    'Seguros de Salud',
    'Mentoría',
    'Criterio Estratégico',
    'Oportunidades de Negocio',
  ],
  knowsLanguage: ['es', 'en'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
