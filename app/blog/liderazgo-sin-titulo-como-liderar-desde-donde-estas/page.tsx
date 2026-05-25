import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Liderazgo sin título: cómo liderar desde donde estás — Luigi Hernandez',
  description:
    'No necesitas ser CEO para liderar. El verdadero liderazgo comienza con criterio y actitud. Luigi Hernandez comparte cómo desarrollar liderazgo real independientemente de tu posición.',
  openGraph: {
    title: 'Liderazgo sin título: cómo liderar desde donde estás',
    description: 'El verdadero liderazgo no necesita un cargo. Luigi Hernandez explica cómo liderarte primero.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="Liderazgo sin título: cómo liderar desde donde estás"
      date="2025-03-22"
      readingTime="5 min"
      category="Liderazgo"
    >
      <p>
        Una de las creencias más limitantes que veo en emprendedores y profesionales es esta: "Cuando
        llegue a X posición, entonces podré liderar". Como si el liderazgo fuera un permiso que alguien
        te concede en lugar de una capacidad que tú desarrollas.
      </p>
      <p>
        El liderazgo real no empieza con un título. Empieza con una decisión.
      </p>

      <h2>Liderarte a ti mismo primero</h2>
      <p>
        Antes de poder liderar a otros, necesitas liderarte a ti mismo. Esto significa: cumplir los
        compromisos que haces contigo mismo, mantener tus estándares cuando nadie está mirando, y
        tomar decisiones con criterio en lugar de reaccionar con impulso.
      </p>
      <p>
        El auto-liderazgo es el fundamento de todo lo demás. Si no puedes liderarte, no puedes liderar
        a nadie más de forma sostenida. Puedes dar órdenes, pero eso no es liderazgo.
      </p>

      <h2>El liderazgo como servicio</h2>
      <p>
        Crecí viendo a mi mamá liderar nuestra familia siendo madre soltera. No tenía título, no tenía
        autoridad formal. Tenía algo más valioso: la claridad de propósito y la disposición de hacer
        lo que fuera necesario para que las personas que amaba estuvieran bien.
      </p>
      <p>
        Ese modelo de liderazgo —como servicio, no como poder— es el que intento replicar en mis
        empresas y en mis mentorías.
      </p>

      <h2>Tres hábitos del líder sin título</h2>
      <p>
        <strong style={{ color: '#F5F5F5' }}>1. Toma iniciativa sin esperar permiso.</strong> Los
        líderes identifican problemas y proponen soluciones sin que alguien les pida que lo hagan.
        Eso construye credibilidad antes que cualquier cargo.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>2. Desarrolla a los que te rodean.</strong> El liderazgo
        real se multiplica. Si alguien a tu alrededor crece gracias a tu influencia, eso es liderazgo
        real independientemente de tu posición.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>3. Sé consistente, no solo brillante.</strong> El
        carisma puntual no construye liderazgo. La consistencia sí. Hacer lo correcto todos los días,
        sin esperar aplausos, es lo que construye autoridad real.
      </p>
      <p>
        El liderazgo no se otorga. Se gana. Y el primer paso para ganarlo es empezar a ejercerlo desde
        donde estás hoy, con lo que tienes hoy.
      </p>
    </BlogArticleLayout>
  )
}
