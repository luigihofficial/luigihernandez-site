import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Por qué todo emprendedor necesita un seguro de vida — Luigi Hernandez',
  description:
    'Muchos emprendedores aseguran su negocio pero no su vida. Un error que puede costarle todo a su familia. Luigi Hernandez explica por qué el seguro de vida es una decisión estratégica.',
  openGraph: {
    title: 'Por qué todo emprendedor necesita un seguro de vida',
    description: 'El seguro de vida no es un gasto: es una decisión estratégica que protege lo que más importa.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="Por qué todo emprendedor necesita un seguro de vida"
      date="2025-02-01"
      readingTime="5 min"
      category="WellClub"
    >
      <p>
        He tenido esta conversación decenas de veces. Un emprendedor que tiene su LLC registrada, su marca
        protegida, su equipo contratado —pero cuando le preguntas por su seguro de vida, me mira como si
        le estuviera hablando en otro idioma.
      </p>
      <p>
        "Eso es para cuando sea mayor", dicen. O "todavía soy joven". O simplemente cambian el tema.
      </p>

      <h2>El error más común de los emprendedores</h2>
      <p>
        Los emprendedores somos excelentes asegurando nuestro negocio. Tenemos seguros de responsabilidad,
        de propiedad, de errores y omisiones. Pero olvidamos asegurar el activo más valioso del negocio:
        nosotros mismos.
      </p>
      <p>
        Si algo te pasara mañana —un accidente, una enfermedad grave— ¿qué pasaría con tu familia? ¿Tienen
        los recursos para mantener su calidad de vida? ¿Pueden seguir operando el negocio? ¿O todo lo que
        construiste se desmorona junto con tus ingresos?
      </p>

      <h2>El seguro de vida no es un gasto: es infraestructura</h2>
      <p>
        Desde WellClub, trabajo con una premisa clara: el bienestar no es un lujo, es infraestructura. Y
        el seguro de vida es parte de esa infraestructura. Es la base sobre la que descansa la tranquilidad
        de tu familia y la sostenibilidad de tu empresa.
      </p>
      <p>
        Cuando tienes un seguro de vida bien estructurado, estás tomando una decisión estratégica: "Mi
        familia estará protegida independientemente de lo que me pase a mí". Eso no es miedo; es
        criterio aplicado al bienestar familiar.
      </p>

      <h2>¿Qué tipo de seguro necesita un emprendedor?</h2>
      <p>
        Depende de tu situación personal, familiar y financiera. No hay una respuesta única. Lo que sí
        puedo decirte es que hay opciones para todos los presupuestos y etapas de negocio.
      </p>
      <p>
        En WellClub hacemos exactamente eso: una evaluación personalizada de tu situación para recomendarte
        la protección correcta. No vendemos pólizas genéricas; encontramos la solución que realmente
        protege lo que tú necesitas proteger.
      </p>

      <h2>El momento correcto es ahora</h2>
      <p>
        El mejor momento para contratar un seguro de vida era hace diez años. El segundo mejor momento
        es hoy. No porque algo malo vaya a pasar, sino porque el criterio estratégico te dice que es
        mejor tenerlo y no necesitarlo que necesitarlo y no tenerlo.
      </p>
      <p>
        Si quieres hablar sobre opciones de protección para ti y tu familia, en WellClub estamos listos
        para tener esa conversación contigo, sin presión y con la información que necesitas para decidir
        con criterio.
      </p>
    </BlogArticleLayout>
  )
}
