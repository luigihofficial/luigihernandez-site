import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Mentoría vs Coaching: ¿Cuál necesitas realmente? — Luigi Hernandez',
  description:
    'Coaching y mentoría no son lo mismo. Confundirlos puede costarte tiempo, dinero y dirección. Luigi Hernandez aclara las diferencias y te ayuda a elegir según tu momento actual.',
  openGraph: {
    title: 'Mentoría vs Coaching: ¿Cuál necesitas realmente?',
    description: 'La diferencia entre mentoría y coaching, y cómo saber cuál necesitas según Luigi Hernandez.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="Mentoría vs Coaching: ¿Cuál necesitas realmente?"
      date="2025-04-01"
      readingTime="5 min"
      category="Mentoría"
    >
      <p>
        Cada semana alguien me pregunta: "¿Eres coach o mentor?" Es una pregunta válida porque el mercado
        usa los dos términos de forma intercambiable —lo cual es un error que puede costarle caro al
        que busca apoyo para crecer.
      </p>
      <p>
        No son lo mismo. Y saber la diferencia puede ahorrarte años y recursos.
      </p>

      <h2>¿Qué es el coaching?</h2>
      <p>
        El coaching es un proceso donde un coach —quien no necesariamente ha recorrido el camino que
        tú recorres— te ayuda a identificar tus propias respuestas a través de preguntas poderosas. El
        coach no te dice qué hacer. Te ayuda a que tú mismo lo descubras.
      </p>
      <p>
        Es valioso cuando ya tienes claridad sobre tu dirección y necesitas desbloquear sesgos o
        barreras internas. También cuando quieres desarrollar habilidades específicas como comunicación,
        liderazgo o gestión emocional.
      </p>

      <h2>¿Qué es la mentoría?</h2>
      <p>
        La mentoría es diferente. Un mentor es alguien que ya recorrió el camino que tú quieres recorrer
        y comparte lo que aprendió en ese proceso —los errores, los atajos, las trampas, las victorias.
        Un mentor sí te dice qué haría él en tu situación, basado en experiencia real.
      </p>
      <p>
        Es valioso cuando necesitas criterio externo fundamentado en experiencia práctica, no solo en
        teoría o en herramientas genéricas.
      </p>

      <h2>¿Cuál necesitas tú?</h2>
      <p>
        Depende de tu momento. Aquí hay una guía simple:
      </p>
      <p>
        Si no sabes qué quieres ni hacia dónde vas, probablemente necesitas una combinación de ambas.
        Primero claridad de dirección, luego experiencia de quien ya fue allá.
      </p>
      <p>
        Si tienes claridad de dirección pero bloqueos internos, el coaching puede ser más útil en este
        momento. Un buen coach te ayudará a identificar qué creencias o patrones te están frenando.
      </p>
      <p>
        Si sabes hacia dónde vas pero no sabes cómo llegar —o quieres llegar más rápido evitando
        errores innecesarios— la mentoría es lo que necesitas. Y eso es exactamente lo que ofrezco
        en el Método C.E.O.: criterio estratégico basado en experiencia real, no en teorías de libro.
      </p>

      <h2>El mentor correcto cambia todo</h2>
      <p>
        Mi mentor es Spencer Hoffmann. Y lo que recibí de él no fue solo estrategia —fue perspectiva.
        La perspectiva de alguien que ya había recorrido el camino me ahorró errores que de otra manera
        hubiera tenido que pagar con tiempo y dinero.
      </p>
      <p>
        Eso es lo que quiero ofrecerte como mentor: no el camino fácil, pero sí el camino con más
        claridad y menos tropiezos evitables.
      </p>
    </BlogArticleLayout>
  )
}
