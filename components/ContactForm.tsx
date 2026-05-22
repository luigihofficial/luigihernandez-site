'use client'

import { useState } from 'react'

type FormState = {
  nombre: string
  email: string
  whatsapp: string
  tipo: string
  mensaje: string
}

const initialForm: FormState = {
  nombre: '',
  email: '',
  whatsapp: '',
  tipo: 'mentoria',
  mensaje: '',
}

const tipoOptions = [
  { value: 'mentoria', label: 'Mentoría C.E.O.' },
  { value: 'wellclub', label: 'WellClub / Seguros' },
  { value: 'conferencia', label: 'Conferencia / Keynote' },
  { value: 'colaboracion', label: 'Colaboración' },
  { value: 'otro', label: 'Otro' },
]

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setError(data.error || 'Ocurrió un error. Intenta de nuevo.')
      } else {
        setSuccess(true)
        setForm(initialForm)
      }
    } catch {
      setError('No se pudo enviar el mensaje. Verifica tu conexión.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    color: '#F5F5F5',
    padding: '0.75rem 1rem',
    borderRadius: '4px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Nombre */}
      <div>
        <label
          htmlFor="nombre"
          style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}
        >
          Nombre completo *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#C4922A')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}
        >
          Correo electrónico *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#C4922A')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label
          htmlFor="whatsapp"
          style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}
        >
          WhatsApp (opcional)
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="+1 786 000 0000"
          value={form.whatsapp}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = '#C4922A')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        />
      </div>

      {/* Tipo */}
      <div>
        <label
          htmlFor="tipo"
          style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}
        >
          Tipo de consulta *
        </label>
        <select
          id="tipo"
          name="tipo"
          required
          value={form.tipo}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={(e) => (e.target.style.borderColor = '#C4922A')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        >
          {tipoOptions.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ backgroundColor: '#1a1a1a' }}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="mensaje"
          style={{ display: 'block', color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}
        >
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntame en qué puedo ayudarte..."
          value={form.mensaje}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={(e) => (e.target.style.borderColor = '#C4922A')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        />
      </div>

      {/* Status messages */}
      {error && (
        <p
          style={{
            color: '#f87171',
            fontSize: '0.875rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(248,113,113,0.1)',
            borderRadius: '4px',
            border: '1px solid rgba(248,113,113,0.2)',
          }}
        >
          {error}
        </p>
      )}
      {success && (
        <p
          style={{
            color: '#4ade80',
            fontSize: '0.875rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(74,222,128,0.1)',
            borderRadius: '4px',
            border: '1px solid rgba(74,222,128,0.2)',
          }}
        >
          Mensaje enviado. Te responderé pronto.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
        style={{ width: '100%', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
