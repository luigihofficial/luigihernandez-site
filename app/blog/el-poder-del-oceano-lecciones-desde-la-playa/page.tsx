import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'El poder del océano: lecciones de vida desde la playa — Luigi Hernandez',
  description:
    'Desde niño, el mar fue la primera escuela de Luigi Hernandez. Estas son las lecciones de vida y emprendimiento que aprendió del océano y que aplica en sus negocios hasta hoy.',
  openGraph: {
    title: 'El poder del océano: lecciones de vida desde la playa',
    description: 'Las lecciones que el mar le enseñó a Luigi Hernandez sobre emprendimiento y vida.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="El poder del océano: lecciones de vida desde la playa"
      date="2025-03-08"
      readingTime="4 min"
      category="Filosofía"
    >
      <p>
        Crecí con el mar como fondo. Caracas tiene una relación especial con el océano, y desde niño
        la playa fue mi lugar de sanación, de pensamiento y de recarga. No es casualidad que cuando
        me preguntan qué me inspira, siempre menciono el océano.
      </p>
      <p>
        Con los años me di cuenta de que el mar es uno de mis mejores maestros. Y estas son sus lecciones.
      </p>

      <h2>Las mareas enseñan ciclos</h2>
      <p>
        El océano sube y baja. Siempre. No importa qué tan tranquilo o agitado esté hoy: mañana será
        diferente. Los negocios y la vida tienen la misma lógica. Los momentos de dificultad no son
        permanentes. Tampoco los de éxito. El criterio incluye saber dónde estás en el ciclo y actuar
        en consecuencia.
      </p>

      <h2>Las olas no se pueden controlar, solo navegar</h2>
      <p>
        Cuando era niño, intentaba resistir las olas grandes. Invariablemente me tiraban al piso.
        Cuando aprendí a moverme con ellas, la experiencia cambió completamente. En los negocios pasa
        lo mismo: hay fuerzas que no puedes controlar —el mercado, la economía, las circunstancias.
        El criterio está en aprender a navegar, no en resistir.
      </p>

      <h2>La profundidad no se ve desde la orilla</h2>
      <p>
        Lo que parece superficialmente claro desde la playa tiene capas y corrientes que no se ven
        hasta que te adentras. Las oportunidades de negocio son así. Desde afuera todo parece simple.
        Cuando te metes, descubres la complejidad real. El criterio estratégico es la capacidad de
        evaluar esa profundidad antes de comprometerte.
      </p>

      <h2>El océano siempre regresa</h2>
      <p>
        No importa cuánto se lleve la marea: siempre regresa algo. Esa es quizás la lección más
        importante para un emprendedor. Los recursos, las oportunidades y las personas correctas
        siempre encuentran la forma de regresar cuando has sido consistente, íntegro y persistente.
      </p>
      <p>
        Hoy, dondequiera que esté, cuando necesito claridad mental o recuperar perspectiva, busco
        el agua. No siempre es posible, pero cuando lo es, el océano me recuerda lo que realmente
        importa y lo que es pasajero.
      </p>
    </BlogArticleLayout>
  )
}
