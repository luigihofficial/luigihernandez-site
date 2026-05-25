'use client'

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@luigihofficial.com',
    href: 'mailto:info@luigihofficial.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.846L.057 23.486a.75.75 0 0 0 .914.914l5.64-1.467A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5a10.443 10.443 0 0 1-5.417-1.508l-.387-.229-4.01 1.043 1.066-3.895-.254-.4A10.44 10.44 0 0 1 1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+1 (786) 260-2547',
    href: 'https://wa.me/17862602547?text=Hola%20Luigi%2C%20me%20gustar%C3%ADa%20conectar%20contigo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@luigihofficial',
    href: 'https://www.instagram.com/luigihofficial',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <path d="m10 15 5-3-5-3z"/>
      </svg>
    ),
    label: 'YouTube',
    value: '@Luigihofficial',
    href: 'https://www.youtube.com/@Luigihofficial',
  },
]

export default function ContactMethods() {
  return (
    <div className="flex flex-col gap-4">
      {contactMethods.map((m) => (
        <a
          key={m.label}
          href={m.href}
          target={m.href.startsWith('http') ? '_blank' : undefined}
          rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
          style={{ border: '1px solid rgba(196,146,42,0.15)', backgroundColor: '#111111' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(196,146,42,0.4)'
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(196,146,42,0.05)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(196,146,42,0.15)'
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#111111'
          }}
        >
          <span style={{ color: '#C4922A' }}>{m.icon}</span>
          <div>
            <p className="text-xs" style={{ color: '#6B7280' }}>{m.label}</p>
            <p className="text-sm font-medium" style={{ color: '#F5F5F5' }}>{m.value}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
