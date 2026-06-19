import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About — Luigi Hernandez',
  description: 'From Caracas, Venezuela to the United States: the story of Luigi Hernandez, entrepreneur, founder of WellClub and creator of the C.E.O. Method.',
  openGraph: {
    title: 'About Luigi Hernandez',
    description: 'From Caracas to the United States: the complete story of Luigi Hernandez.',
    url: 'https://luigihernandez.com/en/about',
  },
}

const timeline = [
  { year: '1982', title: 'Born in Caracas', description: 'Born on January 23rd in Caracas, Venezuela. Only child of an extraordinary mother, also raised by his grandmother and aunt in a home full of feminine strength.' },
  { year: '1990s', title: 'The ocean as first teacher', description: 'From an early age, the Venezuelan coast becomes his space for reflection. He learns from the constancy of the sea what school cannot teach: patience and the rhythm of effort.' },
  { year: '2000s', title: 'University & formation', description: 'Studies Business Administration. Begins building the systematic thinking about business that would later evolve into the C.E.O. Method.' },
  { year: '2007', title: 'Love arrives', description: 'Meets who would become his wife. A relationship that would become the foundation of everything that followed.' },
  { year: '2010', title: 'The big leap: United States', description: 'With his wife, decides to move to the United States. A new country, a new language to fully master, a new system. The first years are of pure learning, active humility, and quiet building.' },
  { year: '2010–2016', title: 'Building from zero', description: 'Works across different industries while studying the American market from the inside. Discovers that what most Hispanic immigrants lack is not capability — it\'s access to the right information and financial tools.' },
  { year: '2016', title: 'WellClub is born', description: 'Founds WellClub with a clear mission: bring quality financial and legal services to Hispanic families in the United States. Insurance, taxes, notary, LLC formation — all in Spanish.' },
  { year: '2024', title: 'Stop. Think. Act.', description: 'Publishes "Stop, Think, Act — The C.E.O. Method", his first book. A practical guide that condenses years of real entrepreneurship for leaders who want to build with criterion.' },
]

export default function AboutEN() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="right">
              <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.5)', borderRadius: '2px', padding: '0.35rem 1rem', fontSize: '0.75rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>About</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C2B4A', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                From Caracas{' '}<span style={{ color: '#C4922A' }}>to the world.</span>
              </h1>
              <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '520px' }}>
                Venezuelan-American entrepreneur. Founder of WellClub, creator of the C.E.O. Method, author and speaker. Everything I've built started with one decision: to learn how to decide better.
              </p>
              <Link href="/en/contact" className="btn-primary">Talk to Luigi</Link>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/5', maxWidth: '400px', margin: '0 auto', boxShadow: '0 40px 100px rgba(28,43,74,0.12)' }}>
                <Image src="/images/fotos/luigi-hires-1.jpg" alt="Luigi Hernandez" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="(max-width: 768px) 100vw, 400px" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: '#F0EAE1', padding: '7rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>The journey</h2>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} direction="right" delay={i * 0.06}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', paddingBottom: '2.5rem', position: 'relative' }}>
                  <div style={{ textAlign: 'right', paddingTop: '0.15rem' }}>
                    <span style={{ color: '#C4922A', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '0.03em' }}>{item.year}</span>
                  </div>
                  <div style={{ borderLeft: '1px solid #E8DDD3', paddingLeft: '2rem', paddingBottom: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#C4922A', position: 'absolute', left: 'calc(80px + 2rem - 5px)', top: '5px' }} />
                    <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.75 }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-divider" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>What I believe</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Criterion before strategy', body: 'Any strategy built on poor criterion is doomed to fail. Before asking "how," ask "why" and "whether."' },
              { title: 'Service as purpose', body: 'WellClub was not born from business opportunity. It was born from the need to protect families who had no one to protect them.' },
              { title: 'Identity as advantage', body: 'Being Hispanic in the United States is not a limitation — it\'s a differentiator. Our culture, our resilience, our story are competitive advantages.' },
              { title: 'Clarity over speed', body: 'Many entrepreneurs fail not because they go slow, but because they go fast in the wrong direction. Clarity first, then speed.' },
            ].map((v, i) => (
              <AnimatedSection key={v.title} direction="up" delay={i * 0.08}>
                <div className="card-dark">
                  <div style={{ width: '32px', height: '2px', backgroundColor: '#C4922A', marginBottom: '1.25rem' }} />
                  <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>{v.title}</h3>
                  <p style={{ color: '#5C5652', fontSize: '0.875rem', lineHeight: 1.75 }}>{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1C2B4A', padding: '6rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <h2 style={{ color: '#FAF8F4', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>Ready to connect?</h2>
            <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>Whether for mentorship, a keynote, or WellClub services — I'd love to talk.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/en/contact" className="btn-primary-light">Get in Touch</Link>
              <a href="https://wa.me/17862602547" target="_blank" rel="noopener noreferrer" className="btn-secondary-light">WhatsApp</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
