import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'WellClub: qué es el bienestar integral para un emprendedor — Luigi Hernandez',
  description:
    'El bienestar no es un lujo ni una moda. Es infraestructura. Descubre qué significa bienestar integral desde la perspectiva de WellClub y cómo aplicarlo como emprendedor.',
  openGraph: {
    title: 'WellClub: qué es el bienestar integral para un emprendedor',
    description: 'El bienestar integral como ventaja competitiva: la visión de WellClub explicada por Luigi Hernandez.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="WellClub: qué es el bienestar integral para un emprendedor"
      date="2025-02-15"
      readingTime="5 min"
      category="WellClub"
    >
      <p>
        Cuando escuchas "bienestar", probablemente piensas en smoothies de proteína, meditación por la
        mañana y rutinas de ejercicio. Y aunque esos hábitos son válidos, el bienestar integral es algo
        mucho más profundo y estratégico.
      </p>
      <p>
        Desde WellClub, trabajamos con una definición de bienestar que abarca cuatro dimensiones:
        salud física, salud financiera, salud mental y protección familiar. Las cuatro son interdependientes.
        Descuidar una afecta a las otras.
      </p>

      <h2>Por qué el bienestar importa más en el emprendimiento</h2>
      <p>
        Los emprendedores somos especialmente vulnerables al descuido del bienestar. Trabajamos largas
        horas, posponemos el médico porque "no hay tiempo", ignoramos el estrés porque "así es esto" y
        evitamos pensar en protección financiera porque "ese es un problema del futuro".
      </p>
      <p>
        El problema es que el cuerpo y la mente no esperan a que el negocio esté listo. Y cuando colapsan,
        arrastran al negocio con ellos.
      </p>

      <h2>Las cuatro dimensiones del bienestar integral</h2>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Salud física.</strong> No es sobre ser atleta. Es sobre tener
        la energía necesaria para ejecutar con consistencia. Sin salud física, todo lo demás se complica.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Salud financiera.</strong> Incluye seguros de salud, de vida,
        planes de ahorro e inversión. Es la red que te atrapa cuando algo sale mal. Sin ella, un solo evento
        adverso puede desestabilizar años de trabajo.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Salud mental.</strong> La capacidad de tomar decisiones bajo
        presión, de manejar la incertidumbre sin paralizarte, de procesar los errores sin destruirte. Esta
        es quizás la habilidad más subestimada del emprendedor.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Protección familiar.</strong> El bienestar de un emprendedor
        no está completo si su familia está desprotegida. Saber que tu familia está cubierta cambia tu
        nivel de claridad y ecuanimidad en los negocios.
      </p>

      <h2>Cómo WellClub aborda esto</h2>
      <p>
        En WellClub no vendemos seguros como productos genéricos. Hacemos una evaluación real de tu
        situación y diseñamos una estrategia de protección que cubra lo que más necesitas en tu etapa
        actual de vida y negocio.
      </p>
      <p>
        Trabajamos especialmente con familias inmigrantes en Estados Unidos que navegan el sistema de
        salud americano por primera vez. Ese proceso puede ser confuso y costoso si no tienes a alguien
        que te guíe con criterio y honestidad.
      </p>
      <p>
        El bienestar integral no es un destino. Es un sistema que construyes con intención. Y como todo
        sistema que vale la pena, requiere criterio para hacerlo bien.
      </p>
    </BlogArticleLayout>
  )
}
