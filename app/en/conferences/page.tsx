import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Keynotes & Conferences — Luigi Hernandez',
  description: 'Luigi Hernandez as a speaker: keynotes on strategic criterion, immigrant entrepreneurship and wellbeing as competitive advantage. Available for corporate and business events.',
  openGraph: {
    title: 'Keynotes & Conferences — Luigi Hernandez',
    description: 'Speaker available for events. Three specialized keynotes on entrepreneurship, leadership and wellbeing.',
    url: 'https://luigihernandez.com/en/conferences',
  },
}

const keynotes = [
  {
    number: '01',
    title: 'Stop, Think, Act: The C.E.O. Method',
    audience: 'Entrepreneurs, executives, leadership programs',
    duration: '45–90 min',
    description: 'An immersive talk that introduces the C.E.O. Method as an applicable thinking system. Participants leave with concrete tools to make better decisions and design strategies that work in the real world.',
    outcomes: ['Develop their criterion to decide without fear', 'Design strategies with available resources', 'Identify real opportunities vs. costly distractions'],
  },
  {
    number: '02',
    title: 'The Immigrant Advantage',
    audience: 'Hispanic community, diversity & inclusion events',
    duration: '30–60 min',
    description: 'A talk that reframes the immigrant experience as a competitive advantage. From resilience to adaptability, cultural identity is not a barrier — it\'s a differentiator that few know how to leverage.',
    outcomes: ['Reframe their cultural identity as an asset', 'Identify specific advantages of their experience', 'Build authority in their market without losing authenticity'],
  },
  {
    number: '03',
    title: 'Financial Wellbeing as a Strategic Tool',
    audience: 'Companies, HR departments, community organizations',
    duration: '30–60 min',
    description: 'How the financial decisions of families and employees impact productivity, creativity and long-term decision-making. A talk that connects wellbeing with business performance.',
    outcomes: ['Understand the impact of financial stress on performance', 'Access basic tools for financial planning', 'Build a culture of financial clarity in their organization'],
  },
]

export default function ConferencesEN() {
  return (
    <>
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="right">
              <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.5)', borderRadius: '2px', padding: '0.35rem 1rem', fontSize: '0.75rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Speaker</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C2B4A', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Ideas that{' '}<span style={{ color: '#C4922A' }}>move people.</span>
              </h1>
              <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
                Available for corporate events, chamber of commerce, entrepreneur conventions, Hispanic community events, universities and leadership programs. In Spanish and English.
              </p>
              <Link href="/en/contact" className="btn-primary">Book Luigi as Speaker</Link>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[{ value: '3', label: 'Keynotes' }, { value: '2', label: 'Languages' }, { value: '16+', label: 'Years of experience' }, { value: '∞', label: 'Audiences impacted' }].map((s) => (
                  <div key={s.label} className="card-dark" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 800, color: '#C4922A', lineHeight: 1, marginBottom: '0.35rem' }}>{s.value}</p>
                    <p style={{ color: '#5C5652', fontSize: '0.8rem' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>Keynotes</h2>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {keynotes.map((k, i) => (
              <AnimatedSection key={k.number} direction="up" delay={i * 0.1}>
                <div className="card-dark">
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ color: '#C4922A', fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>{k.number}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.4rem' }}>{k.title}</h3>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', color: '#9B8F87', backgroundColor: '#F0EAE1', border: '1px solid #E8DDD3', borderRadius: '2px', padding: '0.2rem 0.6rem' }}>🎯 {k.audience}</span>
                        <span style={{ fontSize: '0.75rem', color: '#9B8F87', backgroundColor: '#F0EAE1', border: '1px solid #E8DDD3', borderRadius: '2px', padding: '0.2rem 0.6rem' }}>⏱ {k.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>{k.description}</p>
                  <div>
                    <p style={{ color: '#9B8F87', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.6rem' }}>Attendees will:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {k.outcomes.map((o) => (
                        <div key={o} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                          <span style={{ color: '#C4922A', flexShrink: 0, marginTop: '0.15rem' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                          </span>
                          <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.5 }}>{o}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B4A', padding: '6rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <h2 style={{ color: '#FAF8F4', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>Book Luigi for your event</h2>
            <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>Tell me about your event and we'll find the keynote that best fits your audience.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/en/contact" className="btn-primary-light">Request Information</Link>
              <a href="https://wa.me/17862602547" target="_blank" rel="noopener noreferrer" className="btn-secondary-light">WhatsApp</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
