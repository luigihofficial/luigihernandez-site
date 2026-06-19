import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'WellClub — Insurance, Taxes, Notary & More | Luigi Hernandez',
  description: 'WellClub offers health and life insurance, tax preparation, bookkeeping, notary services, and LLC/corporation formation for Hispanic families in the United States.',
  openGraph: {
    title: 'WellClub — Financial & Legal Services for Hispanic Families',
    description: 'Insurance, taxes, bookkeeping, notary and business formation. In your language.',
    url: 'https://luigihernandez.com/en/wellclub',
  },
}

const services = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>),
    title: 'Insurance',
    description: 'Insurance plans tailored to your situation as a family or immigrant in the U.S. Health, life, auto, property, travel and more — we explain each option clearly so you can choose with confidence.',
    details: ['Individual & family health', 'Marketplace (ACA/Obamacare)', 'Term & permanent life insurance', 'Supplemental insurance', 'Final expense', 'Auto & property', 'International coverage', 'Travel insurance'],
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
    title: 'Tax Preparation',
    description: 'Tax filing for individuals, families and businesses. We maximize your deductions legally and keep you compliant with the IRS.',
    details: ['Personal return (Form 1040)', 'Self-employed taxes', 'Business returns (LLC, Corp)', 'ITINs & tax identification numbers'],
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>),
    title: 'Bookkeeping & Accounting',
    description: 'Keep your business finances organized and up to date. We record transactions, reconcile accounts, and prepare you for tax season with no surprises.',
    details: ['Monthly transaction recording', 'Bank reconciliation', 'Profit & Loss reports', 'Annual return preparation'],
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>),
    title: 'Notary Public',
    description: 'Luigi Hernandez is a certified notary public. We authenticate legal documents with official validity for personal, employment and immigration matters.',
    details: ['Document authentication', 'Powers of attorney', 'Permission & authorization letters', 'Immigration documents'],
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>),
    title: 'LLC & Corporation Formation',
    description: 'We form your business correctly from day one. LLC, S-Corp, C-Corp — we advise you on the ideal structure for your business type.',
    details: ['LLC registration in your state', 'S-Corp & C-Corp formation', 'EIN (employer identification number)', 'Operating Agreement & bylaws'],
  },
]

export default function WellClubEN() {
  return (
    <>
      <section style={{ backgroundColor: '#FAF8F4', paddingTop: '120px', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <AnimatedSection direction="right">
              <span style={{ display: 'inline-block', border: '1px solid rgba(196,146,42,0.5)', borderRadius: '2px', padding: '0.35rem 1rem', fontSize: '0.75rem', color: '#C4922A', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Professional Services</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1C2B4A', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Your financial wellbeing,{' '}<span style={{ color: '#C4922A' }}>in your hands.</span>
              </h1>
              <p style={{ color: '#5C5652', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '520px' }}>
                WellClub was born to serve Hispanic families and immigrants who deserve access to quality financial and legal services, explained in their language with personalized attention.
              </p>
              <Link href="/en/contact" className="btn-primary">Talk to Luigi</Link>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '360px', height: '110px' }}>
                  <Image src="/images/logos/wellclub-logo.png" alt="WellClub" fill style={{ objectFit: 'contain', objectPosition: 'center' }} sizes="360px" priority />
                </div>
                <div style={{ position: 'relative', width: '140px', height: '140px' }}>
                  <Image src="/images/logos/wellclub-circular.png" alt="WellClub" fill style={{ objectFit: 'contain' }} sizes="140px" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#1C2B4A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[{ value: '5', label: 'Available services' }, { value: '16+', label: 'Years of experience' }, { value: '2', label: 'Operating states' }, { value: '100%', label: 'In Spanish' }].map((s, i) => (
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
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1C2B4A', marginTop: '1rem' }}>Our Services</h2>
            <p style={{ color: '#5C5652', fontSize: '1rem', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>Everything your family or business needs, in one place.</p>
          </AnimatedSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <AnimatedSection key={s.title} direction="up" delay={i * 0.08}>
                <div className="card-dark" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'start' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '2px', backgroundColor: 'rgba(196,146,42,0.07)', border: '1px solid rgba(196,146,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4922A', flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <h3 style={{ color: '#1C2B4A', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                    <p style={{ color: '#5C5652', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1rem' }}>{s.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {s.details.map((d) => (
                        <span key={d} style={{ fontSize: '0.78rem', color: '#5C5652', backgroundColor: '#F0EAE1', border: '1px solid #E8DDD3', borderRadius: '2px', padding: '0.25rem 0.65rem' }}>{d}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <Link href="/en/contact" className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', whiteSpace: 'nowrap' }}>Inquire</Link>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF8F4', borderRadius: '8px', padding: '1rem 2rem', margin: '0 auto 2rem' }}>
              <div style={{ position: 'relative', width: '200px', height: '56px' }}>
                <Image src="/images/logos/wellclub-logo.png" alt="WellClub" fill style={{ objectFit: 'contain' }} sizes="200px" />
              </div>
            </div>
            <h2 style={{ color: '#FAF8F4', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>Ready to get started?</h2>
            <p style={{ color: 'rgba(250,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>Schedule a free consultation and we'll help you find the service you need. No commitment, in Spanish.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/en/contact" className="btn-primary-light">Schedule Free Consultation</Link>
              <a href="https://wa.me/17862602547" target="_blank" rel="noopener noreferrer" className="btn-secondary-light">Direct WhatsApp</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
