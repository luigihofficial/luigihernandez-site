import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Blog — Luigi Hernandez',
  description: 'Articles on entrepreneurship, strategic criterion, financial wellbeing and leadership for Hispanic entrepreneurs in the United States.',
  openGraph: {
    title: 'Blog — Luigi Hernandez',
    description: 'Criterion, strategy and opportunity — in writing.',
    url: 'https://luigihernandez.com/en/blog',
  },
}

export default function BlogEN() {
  return (
    <>
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.5)', borderRadius: '2px', padding: '0.35rem 1rem', fontSize: '0.75rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Blog</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C2B4A', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Criterion, strategy{' '}<span style={{ color: '#C4922A' }}>in writing.</span>
            </h1>
            <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '560px' }}>
              Articles on entrepreneurship, financial wellbeing and leadership for Hispanic entrepreneurs building in the United States.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ backgroundColor: '#FAF8F4', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up">
            <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#F0EAE1', borderRadius: '8px', border: '1px solid #E8DDD3' }}>
              <div style={{ width: '48px', height: '2px', backgroundColor: '#C4922A', margin: '0 auto 1.5rem' }} />
              <h2 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem' }}>Articles coming soon</h2>
              <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                I'm working on bringing new content in English. In the meantime, you can read all current articles in Spanish.
              </p>
              <Link href="/blog" className="btn-secondary">Read in Spanish</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
