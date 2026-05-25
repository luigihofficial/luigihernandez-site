import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Cómo construir una empresa de bienestar en USA — Luigi Hernandez',
  description:
    'Construir WellClub en Estados Unidos fue un proceso de aprendizaje constante. Luigi Hernandez comparte las lecciones clave de cómo construir una empresa de bienestar en el mercado americano.',
  openGraph: {
    title: 'Cómo construir una empresa de bienestar en USA',
    description: 'Las lecciones de Luigi Hernandez al construir WellClub, empresa de bienestar en Estados Unidos.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="Cómo construir una empresa de bienestar en USA"
      date="2025-04-15"
      readingTime="6 min"
      category="WellClub"
    >
      <p>
        Construir una empresa en Estados Unidos siendo inmigrante tiene capas de complejidad que van
        mucho más allá de abrir una LLC. Hay un sistema legal, fiscal, comercial y cultural que
        aprender. Y si encima de eso tu mercado objetivo son familias inmigrantes —como es el caso
        de WellClub— la complejidad se multiplica.
      </p>
      <p>
        Estas son las lecciones más importantes que aprendí construyendo WellClub.
      </p>

      <h2>Empieza desde un problema real, no desde una idea romántica</h2>
      <p>
        WellClub no nació porque vi una oportunidad de negocio en una hoja de cálculo. Nació porque
        yo mismo viví el problema que resuelve: llegar a USA sin entender el sistema de salud, sin
        saber qué protección necesitaba y sin alguien de confianza que me explicara mis opciones.
      </p>
      <p>
        Las empresas construidas desde un dolor real tienen una ventaja enorme: el fundador entiende
        al cliente porque fue el cliente. Esa empatía genuina no se puede fingir.
      </p>

      <h2>El mercado hispano en USA es enorme y mal servido</h2>
      <p>
        Hay más de 60 millones de hispanohablantes en Estados Unidos. Una proporción significativa
        navega el sistema de salud, los seguros y el bienestar con barreras de idioma, desconfianza
        institucional y falta de información culturalmente relevante.
      </p>
      <p>
        No es un mercado difícil de servir porque sea pequeño. Es difícil de servir porque requiere
        una combinación específica de conocimiento técnico, cultura y confianza que pocas empresas
        tienen. Eso es exactamente la ventaja de WellClub.
      </p>

      <h2>El bienestar requiere confianza, no solo competencia</h2>
      <p>
        En el sector de seguros, la competencia técnica es necesaria pero no suficiente. Las personas
        comparten su información de salud, su situación financiera, sus miedos más profundos. Solo
        lo hacen con alguien en quien confían.
      </p>
      <p>
        Construir esa confianza toma tiempo y exige consistencia. No se construye con marketing; se
        construye con integridad en cada interacción.
      </p>

      <h2>Licencias, regulaciones y estructura legal</h2>
      <p>
        En el mercado de seguros en USA, necesitas licencias específicas por tipo de seguro y por
        estado. Es un proceso que requiere preparación, exámenes y tiempo. El criterio estratégico
        me dijo desde el principio: no atajos aquí. La base legal y regulatoria bien hecha es
        infraestructura que protege todo lo demás.
      </p>
      <p>
        Si estás pensando en construir una empresa de bienestar o servicios financieros en USA,
        lo más importante que puedo decirte es esto: invierte en tu formación regulatoria y legal
        desde el principio. No cuando el problema llegue.
      </p>
    </BlogArticleLayout>
  )
}
