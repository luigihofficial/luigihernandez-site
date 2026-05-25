import { NextRequest, NextResponse } from 'next/server'

const tipoLabels: Record<string, string> = {
  mentoria: 'Mentoría C.E.O.',
  wellclub: 'WellClub / Seguros',
  conferencia: 'Conferencia / Keynote',
  colaboracion: 'Colaboración',
  otro: 'Otro',
}

function buildHtmlEmail(data: {
  nombre: string
  email: string
  whatsapp: string
  tipo: string
  mensaje: string
}) {
  const tipoLabel = tipoLabels[data.tipo] || data.tipo

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje — luigihernandez.com</title>
</head>
<body style="margin:0;padding:0;background-color:#080808;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#080808;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:0 0 32px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="border-bottom:2px solid #C4922A;padding-bottom:24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:40px;height:40px;border-radius:50%;border:2px solid #C4922A;text-align:center;vertical-align:middle;">
                          <span style="color:#C4922A;font-weight:800;font-size:14px;">LH</span>
                        </td>
                        <td style="padding-left:12px;">
                          <span style="color:#F5F5F5;font-size:16px;font-weight:600;">Luigi Hernandez</span>
                          <br>
                          <span style="color:#9CA3AF;font-size:12px;">luigihernandez.com</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:0 0 24px 0;">
              <h1 style="margin:0;color:#F5F5F5;font-size:22px;font-weight:800;line-height:1.3;">
                Nuevo mensaje desde
                <span style="color:#C4922A;"> luigihernandez.com</span>
              </h1>
            </td>
          </tr>

          <!-- Type badge -->
          <tr>
            <td style="padding:0 0 24px 0;">
              <span style="display:inline-block;background-color:rgba(196,146,42,0.15);border:1px solid rgba(196,146,42,0.3);color:#C4922A;font-size:12px;font-weight:700;padding:6px 14px;border-radius:100px;text-transform:uppercase;letter-spacing:0.05em;">
                ${tipoLabel}
              </span>
            </td>
          </tr>

          <!-- Contact Info Card -->
          <tr>
            <td style="padding:0 0 20px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#161616;border:1px solid #222;border-radius:8px;">
                <tr>
                  <td style="padding:24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding-bottom:16px;">
                          <p style="margin:0 0 4px 0;color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">Nombre</p>
                          <p style="margin:0;color:#F5F5F5;font-size:16px;font-weight:600;">${data.nombre}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:16px;border-top:1px solid #222;padding-top:16px;">
                          <p style="margin:0 0 4px 0;color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">Email</p>
                          <a href="mailto:${data.email}" style="color:#C4922A;font-size:15px;text-decoration:none;">${data.email}</a>
                        </td>
                      </tr>
                      ${data.whatsapp ? `
                      <tr>
                        <td style="padding-bottom:16px;border-top:1px solid #222;padding-top:16px;">
                          <p style="margin:0 0 4px 0;color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">WhatsApp</p>
                          <a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" style="color:#C4922A;font-size:15px;text-decoration:none;">${data.whatsapp}</a>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Card -->
          <tr>
            <td style="padding:0 0 32px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#161616;border:1px solid #222;border-radius:8px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 12px 0;color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">Mensaje</p>
                    <p style="margin:0;color:#9CA3AF;font-size:15px;line-height:1.7;white-space:pre-wrap;">${data.mensaje}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #1a1a1a;padding-top:24px;">
              <p style="margin:0;color:#555;font-size:12px;text-align:center;">
                Mensaje enviado desde <a href="https://luigihernandez.com" style="color:#C4922A;text-decoration:none;">luigihernandez.com</a>
                · Responder directamente a este email contestará a ${data.nombre}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, whatsapp, tipo, mensaje } = body

    // Validation
    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim() || !tipo) {
      return NextResponse.json(
        { error: 'Por favor completa todos los campos requeridos.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'El correo electrónico no es válido.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Error de configuración del servidor.' },
        { status: 500 }
      )
    }

    const tipoLabel = tipoLabels[tipo] || tipo

    const emailPayload = {
      from: 'Luigi Hernandez <noreply@luigihernandez.com>',
      to: ['info@luigihofficial.com'],
      reply_to: email,
      subject: `[${tipoLabel}] Nuevo mensaje de ${nombre} — luigihernandez.com`,
      html: buildHtmlEmail({ nombre, email, whatsapp: whatsapp || '', tipo, mensaje }),
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Resend API error:', response.status, errorData)
      return NextResponse.json(
        { error: 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}
