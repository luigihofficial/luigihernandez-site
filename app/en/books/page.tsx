import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Stop, Think, Act — The C.E.O. Method | Luigi Hernandez',
  description: 'The book by Luigi Hernandez. The C.E.O. Method: Criterion to decide, Strategy to act, Opportunity to advance. A practical guide for entrepreneurs and leaders.',
  openGraph: {
    title: 'Stop, Think, Act — The C.E.O. Method | Luigi Hernandez',
    description: 'Criterion to decide, Strategy to act, Opportunity to advance.',
    url: 'https://luigihernandez.com/en/books',
    images: [{ url: '/images/fotos/libro-cover.jpg', width: 380, height: 507, alt: 'Stop, Think, Act' }],
  },
}

const chapters = [
  { number: '01', title: 'The price of deciding without criterion', description: 'Why most business errors are not strategic — they are criterion errors. The difference that changes everything.' },
  { number: '02', title: 'Building your criterion step by step', description: 'Practical exercises to develop criterion as a muscle. From reviewing past decisions to creating your own framework.' },
  { number: '03', title: 'Strategy: from thinking to action', description: 'How to turn clarity into a concrete action plan. The three questions every strategy must answer.' },
  { number: '04', title: 'Recognizing real opportunities', description: 'The difference between opportunity and distraction. How to train your eye to see what others miss in difficult markets.' },
  { number: '05', title: 'The C.E.O. cycle in practice', description: 'How to integrate criterion, strategy and opportunity into a continuous thinking system that improves with each cycle.' },
  { number: '06', title: 'The entrepreneur as leader', description: 'Leadership without a title. How the C.E.O. Method transforms not only your business but your way of relating to others.' },
]

const learnings = [
  'How to develop strategic criterion to make decisions without regret',
  'The three-step process to design a strategy that withstands reality',
  'The signals that distinguish a real opportunity from a costly distraction',
  'Why leadership is a daily practice, not a position you obtain',
  'How to navigate uncertainty from clarity of purpose',
  'The practical tools used by the most effective entrepreneurs',
]

export default function BooksEN() {
  return (
    <>
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="right">
              <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.4)', borderRadius: '100px', padding: '0.35rem 1rem', fontSize: '0.8rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Book</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C2B4A', marginBottom: '0.75rem', lineHeight: 1.1 }}>
                Stop, Think<br />& Act
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#5C5652', marginBottom: '1rem', letterSpacing: '0.02em' }}>
                The <span style={{ color: '#C4922A', fontWeight: 700 }}>C</span>riterion ·{' '}
                <span style={{ color: '#C4922A', fontWeight: 700 }}>E</span>xecution ·{' '}
                <span style={{ color: '#C4922A', fontWeight: 700 }}>O</span>pportunity Method
              </p>
              <p style={{ color: '#5C5652', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                The book that condenses years of real entrepreneurship into a practical system. For leaders and entrepreneurs who want to stop improvising and start building with criterion.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.amazon.com/dp/B0H56HML2C" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy the Book</a>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/4', maxWidth: '380px', margin: '0 auto', boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,146,42,0.1)' }}>
                <Image src="/images/fotos/libro-cover.jpg" alt="Stop, Think, Act — Luigi Hernandez" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 380px" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F0EAE1', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>The C.E.O. Method</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { letter: 'C', title: 'Criterion to decide', description: 'Criterion is the foundation. It\'s the ability to evaluate reality without deceiving yourself, using experience, values, and quality information. Without criterion, the most brilliant strategy fails.' },
              { letter: 'E', title: 'Execution strategy', description: 'Strategy is not having a plan. It\'s having clarity about where you\'re going and why that specific path. A good strategy answers: Where am I? Where do I want to be? How do I get there?' },
              { letter: 'O', title: 'Opportunity to advance', description: 'Opportunity is not what presents itself. It\'s what you create from your criterion and strategy. The most successful entrepreneurs didn\'t have more luck — they were better positioned to recognize it.' },
            ].map((item, i) => (
              <AnimatedSection key={item.letter} direction="up" delay={i * 0.1}>
                <div className="card-dark" style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(196,146,42,0.1)', border: '2px solid rgba(196,146,42,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#C4922A', fontSize: '1.5rem', fontWeight: 800 }}>{item.letter}</div>
                  <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#FAF8F4', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>Book Contents</h2>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {chapters.map((ch, i) => (
              <AnimatedSection key={ch.number} direction="left" delay={i * 0.07}>
                <div className="card-dark" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '1.25rem', alignItems: 'start' }}>
                  <span style={{ color: '#C4922A', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', paddingTop: '0.1rem' }}>{ch.number}</span>
                  <div>
                    <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{ch.title}</h3>
                    <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.7 }}>{ch.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F0EAE1', padding: '6rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>What You'll Learn</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {learnings.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.07}>
                <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: '6px', border: '1px solid #E8DDD3' }}>
                  <span style={{ color: '#C4922A', flexShrink: 0, marginTop: '0.1rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection direction="up" delay={0.3} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.amazon.com/dp/B0H56HML2C" target="_blank" rel="noopener noreferrer" className="btn-primary">Buy the Book</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
