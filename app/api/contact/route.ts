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
<body style="margin:0;padding:0;background-color:#F0EAE1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F0EAE1;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1C2B4A;border-radius:8px 8px 0 0;padding:24px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:40px;height:40px;border-radius:50%;border:2px solid #C4922A;text-align:center;vertical-align:middle;">
                          <span style="color:#C4922A;font-weight:800;font-size:13px;letter-spacing:0.05em;">LH</span>
                        </td>
                        <td style="padding-left:12px;">
                          <span style="color:#FAF8F4;font-size:16px;font-weight:700;">Luigi Hernandez</span>
                          <br>
                          <span style="color:rgba(250,248,244,0.5);font-size:12px;">luigihernandez.com</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold divider -->
          <tr>
            <td style="background-color:#1C2B4A;padding:0 32px;">
              <div style="height:2px;background-color:#C4922A;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#FAF8F4;border-radius:0 0 8px 8px;padding:32px;">

              <!-- Title -->
              <h1 style="margin:0 0 8px 0;color:#1C2B4A;font-size:20px;font-weight:800;line-height:1.3;">
                Nuevo mensaje desde
                <span style="color:#C4922A;">luigihernandez.com</span>
              </h1>
              <p style="margin:0 0 24px 0;color:#5C5652;font-size:13px;">Recibiste una consulta nueva a través de tu sitio web.</p>

              <!-- Type badge -->
              <div style="margin-bottom:24px;">
                <span style="display:inline-block;background-color:rgba(196,146,42,0.1);border:1px solid rgba(196,146,42,0.4);color:#C4922A;font-size:11px;font-weight:700;padding:5px 14px;border-radius:2px;text-transform:uppercase;letter-spacing:0.08em;">
                  ${tipoLabel}
                </span>
              </div>

              <!-- Contact Info Card -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F0EAE1;border:1px solid #E8DDD3;border-radius:6px;margin-bottom:16px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding-bottom:14px;">
                          <p style="margin:0 0 3px 0;color:#9B8F87;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Nombre</p>
                          <p style="margin:0;color:#1C2B4A;font-size:16px;font-weight:700;">${data.nombre}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom:14px;border-top:1px solid #E8DDD3;padding-top:14px;">
                          <p style="margin:0 0 3px 0;color:#9B8F87;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Email</p>
                          <a href="mailto:${data.email}" style="color:#C4922A;font-size:15px;text-decoration:none;font-weight:600;">${data.email}</a>
                        </td>
                      </tr>
                      ${data.whatsapp ? `
                      <tr>
                        <td style="border-top:1px solid #E8DDD3;padding-top:14px;">
                          <p style="margin:0 0 3px 0;color:#9B8F87;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">WhatsApp</p>
                          <a href="https://wa.me/${data.whatsapp.replace(/\D/g, '')}" style="color:#C4922A;font-size:15px;text-decoration:none;font-weight:600;">${data.whatsapp}</a>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Card -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FFFFFF;border:1px solid #E8DDD3;border-radius:6px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 10px 0;color:#9B8F87;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Mensaje</p>
                    <p style="margin:0;color:#5C5652;font-size:15px;line-height:1.75;white-space:pre-wrap;">${data.mensaje}</p>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <p style="margin:0;color:#9B8F87;font-size:12px;text-align:center;border-top:1px solid #E8DDD3;padding-top:20px;">
                Enviado desde <a href="https://luigihernandez.com" style="color:#C4922A;text-decoration:none;">luigihernandez.com</a>
                &nbsp;·&nbsp; Responder a este email contactará directamente a ${data.nombre}
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
      from: 'Luigi Hernandez <hola@luigihernandez.com>',
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
