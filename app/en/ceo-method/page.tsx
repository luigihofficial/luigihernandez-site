import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'The C.E.O. Method — Criterion, Execution, Opportunity | Luigi Hernandez',
  description: 'The C.E.O. Method by Luigi Hernandez: a thinking system for entrepreneurs and leaders. Criterion to decide, Strategy to act, Opportunity to advance.',
  openGraph: {
    title: 'The C.E.O. Method — Luigi Hernandez',
    description: 'Criterion to decide. Strategy to act. Opportunity to advance.',
    url: 'https://luigihernandez.com/en/ceo-method',
  },
}

const pillars = [
  {
    letter: 'C',
    title: 'Criterion to decide',
    description: 'Criterion is the foundation. It\'s the ability to assess reality without deceiving yourself — using experience, values, and quality information. Most business errors are not strategic errors: they are criterion errors.',
    points: ['Review past decisions without ego', 'Build your own evaluation framework', 'Distinguish urgent from important', 'Decide from clarity, not fear'],
  },
  {
    letter: 'E',
    title: 'Strategy to act',
    description: 'Strategy is not having a plan — it\'s having clarity about where you\'re going and why that specific path. A good strategy answers three questions: Where am I? Where do I want to be? How do I get there?',
    points: ['Design the path with real resources', 'Prioritize without chasing everything', 'Execute in measurable phases', 'Adjust without abandoning the course'],
  },
  {
    letter: 'O',
    title: 'Opportunity to advance',
    description: 'Opportunity is not what appears — it\'s what you create from your criterion and strategy. The most successful entrepreneurs didn\'t have more luck. They were better positioned to recognize it when it arrived.',
    points: ['Train your eye to see what others miss', 'Distinguish opportunity from distraction', 'Create favorable conditions before acting', 'Advance with confidence, not impulsivity'],
  },
]

const formats = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>),
    title: 'The Book',
    subtitle: 'Stop, Think, Act',
    description: 'The complete method in paperback and Kindle. Six chapters, practical exercises, and the full system to apply from day one.',
    cta: 'Buy the Book',
    href: 'https://www.amazon.com/dp/B0H56HML2C',
    external: true,
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
    title: '1-on-1 Mentorship',
    subtitle: 'Personalized sessions',
    description: 'We apply the C.E.O. Method directly to your business or specific situation. Real work sessions, not generic coaching.',
    cta: 'Book a Session',
    href: '/en/contact',
    external: false,
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>),
    title: 'Keynotes',
    subtitle: 'For teams & organizations',
    description: 'The C.E.O. Method brought to your company, organization or event. Practical content that transforms how your team decides and acts.',
    cta: 'See Keynotes',
    href: '/en/conferences',
    external: false,
  },
]

export default function CEOMethodEN() {
  return (
    <>
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ maxWidth: '780px' }}>
            <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.5)', borderRadius: '2px', padding: '0.35rem 1rem', fontSize: '0.75rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>The Method</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, color: '#1C2B4A', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#C4922A' }}>C</span>riterion.{' '}
              <span style={{ color: '#C4922A' }}>E</span>xecution.{' '}
              <span style={{ color: '#C4922A' }}>O</span>pportunity.
            </h1>
            <p style={{ color: '#5C5652', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '600px' }}>
              Not a 12-step framework. A thinking system for entrepreneurs and leaders who want to stop improvising and start building with real criterion.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.amazon.com/dp/B0H56HML2C" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy the Book</a>
              <Link href="/en/contact" className="btn-secondary">Book Mentorship</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B4A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[{ value: '16+', label: 'Years applying the method' }, { value: '3', label: 'Core pillars' }, { value: '1', label: 'Thinking system' }, { value: '∞', label: 'Improvement cycles' }].map((s, i) => (
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

      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>The three pillars</h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>Each pillar builds on the previous. Without criterion, strategy fails. Without strategy, there is no real opportunity.</p>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pillars.map((p, i) => (
              <AnimatedSection key={p.letter} direction="up" delay={i * 0.1}>
                <div className="card-dark" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'start' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(196,146,42,0.08)', border: '2px solid rgba(196,146,42,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4922A', fontSize: '1.75rem', fontWeight: 800, flexShrink: 0 }}>{p.letter}</div>
                  <div>
                    <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ color: '#5C5652', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>{p.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {p.points.map((pt) => (
                        <span key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#5C5652', backgroundColor: '#F0EAE1', border: '1px solid #E8DDD3', borderRadius: '2px', padding: '0.25rem 0.65rem' }}>
                          <span style={{ color: '#C4922A', fontSize: '0.7rem' }}>◆</span>{pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>How to learn it</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {formats.map((f, i) => (
              <AnimatedSection key={f.title} direction="up" delay={i * 0.1}>
                <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '2px', backgroundColor: 'rgba(196,146,42,0.07)', border: '1px solid rgba(196,146,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4922A', marginBottom: '1.25rem', flexShrink: 0 }}>{f.icon}</div>
                  <p style={{ color: '#C4922A', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{f.subtitle}</p>
                  <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem', flex: 1 }}>{f.description}</p>
                  {f.external ? (
                    <a href={f.href} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', textAlign: 'center' }}>{f.cta}</a>
                  ) : (
                    <Link href={f.href} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', textAlign: 'center' }}>{f.cta}</Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B4A', padding: '6rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: '#FAF8F4', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem' }}>Ready to apply the method?</h2>
            <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>Start with the book, or talk to me directly if you want to apply it to your business with personal guidance.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.amazon.com/dp/B0H56HML2C" target="_blank" rel="noopener noreferrer" className="btn-primary-light">Buy the Book</a>
              <Link href="/en/contact" className="btn-secondary-light">Talk to Luigi</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
