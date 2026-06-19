import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Luigi Hernandez — Entrepreneur, Author & Speaker',
  description:
    'Luigi Hernandez: creator of the C.E.O. Method, founder of WellClub, author and speaker for Hispanic entrepreneurs and leaders in the United States.',
  openGraph: {
    title: 'Luigi Hernandez — Entrepreneur, Author & Speaker',
    description: 'Criterion to decide. Strategy to act. Opportunity to advance.',
    url: 'https://luigihernandez.com/en',
  },
}

export default function HomeEN() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', top: '5%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,146,42,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="right">
              <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.5)', borderRadius: '2px', padding: '0.35rem 1rem', fontSize: '0.75rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Creator of the C.E.O. Method
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 800, color: '#1C2B4A', marginBottom: '1.25rem', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                Turning criterion{' '}
                <span style={{ color: '#C4922A' }}>into results.</span>
              </h1>
              <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '520px' }}>
                Venezuelan-American entrepreneur, founder of WellClub, author and speaker. I help Hispanic families and entrepreneurs build with clarity and purpose.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/en/ceo-method" className="btn-primary">Discover the Method</Link>
                <Link href="/en/contact" className="btn-secondary">Let's Talk</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/5', maxWidth: '420px', margin: '0 auto', boxShadow: '0 40px 100px rgba(28,43,74,0.15)' }}>
                <Image src="/images/fotos/luigi-hires-1.jpg" alt="Luigi Hernandez" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(max-width: 768px) 100vw, 420px" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '16+', label: 'Years of experience' },
              { value: '2', label: 'Operating states' },
              { value: '1', label: 'Published book' },
              { value: '∞', label: 'Stories transformed' },
            ].map((s, i) => (
              <AnimatedSection key={s.label} direction="up" delay={i * 0.1}>
                <div>
                  <p style={{ fontSize: '2.5rem', fontWeight: 800, color: '#C4922A', lineHeight: 1, marginBottom: '0.4rem' }}>{s.value}</p>
                  <p style={{ color: 'rgba(250,248,244,0.6)', fontSize: '0.875rem' }}>{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>How I can help you</h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>Two areas, one purpose: help you build with criterion.</p>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <AnimatedSection direction="up" delay={0.05}>
              <div className="card-dark" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.4)', borderRadius: '2px', padding: '0.25rem 0.75rem', fontSize: '0.7rem', color: '#C4922A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>C.E.O. Method</span>
                <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>Mentorship & Speaking</h3>
                <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem', flex: 1 }}>
                  One-on-one mentoring to apply the method to your business. Keynotes for organizations and events. Book available on Kindle.
                </p>
                <Link href="/en/ceo-method" className="btn-secondary" style={{ fontSize: '0.85rem', textAlign: 'center' }}>Learn More</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <div className="card-dark" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.4)', borderRadius: '2px', padding: '0.25rem 0.75rem', fontSize: '0.7rem', color: '#C4922A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>WellClub</span>
                <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>Financial & Legal Services</h3>
                <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem', flex: 1 }}>
                  Insurance, tax preparation, bookkeeping, notary services, and LLC/corporation formation — in Spanish, for Hispanic families.
                </p>
                <Link href="/en/wellclub" className="btn-secondary" style={{ fontSize: '0.85rem', textAlign: 'center' }}>See Services</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Book */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="right">
              <span className="section-divider-left" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem', marginBottom: '1rem' }}>
                Stop. Think. Act.
              </h2>
              <p style={{ color: '#C4922A', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                The <strong>C</strong>riterion · <strong>E</strong>xecution · <strong>O</strong>pportunity Method
              </p>
              <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                The book that distills years of real entrepreneurship into a practical system. For leaders who want to stop improvising and start building with true criterion.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.amazon.com/dp/B0GXC6RCCC" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy on Kindle</a>
                <Link href="/en/books" className="btn-secondary">Book Details</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/4', maxWidth: '380px', margin: '0 auto', boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,146,42,0.1)' }}>
                <Image src="/images/fotos/libro-cover.jpg" alt="Stop, Think, Act — Luigi Hernandez" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 380px" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '6rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <span style={{ display: 'block', fontSize: '3rem', color: '#C4922A', lineHeight: 1, marginBottom: '1.5rem', opacity: 0.5 }}>"</span>
            <p style={{ color: '#FAF8F4', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 600, lineHeight: 1.65, marginBottom: '2rem', fontStyle: 'italic' }}>
              Criterion is not a talent you're born with. It's a discipline you build — decision by decision, day by day.
            </p>
            <span style={{ color: '#C4922A', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Luigi Hernandez</span>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '6rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem', marginBottom: '1rem' }}>Let's build something together</h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>Whether it's mentorship, a keynote, WellClub services, or simply to connect — I'd love to hear from you.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/en/contact" className="btn-primary">Get in Touch</Link>
              <a href="https://wa.me/17862602547" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
