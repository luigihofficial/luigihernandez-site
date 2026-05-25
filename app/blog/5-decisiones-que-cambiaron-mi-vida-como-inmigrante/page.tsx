import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: '5 decisiones que cambiaron mi vida como inmigrante — Luigi Hernandez',
  description:
    'Luigi Hernandez comparte las cinco decisiones que redefinieron su camino como inmigrante emprendedor en USA. Decisiones que no siempre fueron obvias, pero que hicieron toda la diferencia.',
  openGraph: {
    title: '5 decisiones que cambiaron mi vida como inmigrante',
    description: 'Las cinco decisiones clave de Luigi Hernandez como inmigrante emprendedor venezolano en USA.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="5 decisiones que cambiaron mi vida como inmigrante"
      date="2025-02-22"
      readingTime="6 min"
      category="Historia personal"
    >
      <p>
        No todas las decisiones importantes se toman en momentos dramáticos. Algunas cambian tu vida
        sin que te des cuenta de su peso en el momento en que las tomas. Mirando hacia atrás, puedo
        identificar cinco decisiones que, más que cualquier otra cosa, definieron quién soy hoy.
      </p>

      <h2>1. Decidir irme (y no regresar)</h2>
      <p>
        La decisión de salir de Venezuela en 2010 no fue romántica. Fue dolorosa. Dejar a mi familia,
        mis amigos, mi identidad construida durante 28 años. Pero hubo un momento donde entendí que
        quedarme por miedo a lo desconocido era peor que irme con miedo pero con propósito.
      </p>

      <h2>2. Dejar de comparar USA con Venezuela</h2>
      <p>
        Durante mis primeros años en Estados Unidos, comparaba constantemente: "Allá era más fácil esto",
        "allá se hacía de otra manera". Esa comparación me bloqueaba. El día que decidí aceptar el
        contexto donde estaba y aprender sus reglas sin resistencia fue el día que empecé a avanzar
        de verdad.
      </p>

      <h2>3. Pedir ayuda antes de necesitarla con urgencia</h2>
      <p>
        El orgullo del inmigrante —querer demostrar que puedes solo— es uno de los mayores obstáculos
        al crecimiento. Cuando decidí buscar mentores, hacer preguntas y aceptar que no saber algo
        no era debilidad, todo se aceleró. El criterio incluye saber cuándo necesitas ayuda.
      </p>

      <h2>4. Construir WellClub desde mi experiencia real</h2>
      <p>
        Pude haber fundado cualquier tipo de negocio. Elegí el bienestar porque viví en carne propia
        la vulnerabilidad de no tener protección adecuada de salud en un país nuevo. WellClub nació de
        una necesidad real que yo mismo sentí. Esa autenticidad es lo que le da fuerza a todo.
      </p>

      <h2>5. Documentar y compartir mis aprendizajes</h2>
      <p>
        Durante años guardé mis lecciones para mí. Las veía como fracasos a esconder, no como
        conocimiento a compartir. Cuando decidí sistematizar lo que aprendí y transformarlo en el
        Método C.E.O., encontré mi mayor propósito: que otros no tengan que pagar el mismo precio
        que yo pagué por aprender lo que hoy comparto.
      </p>
      <p>
        Cada una de estas decisiones tuvo un costo. Pero también tuvo un retorno. Y ese retorno
        no fue solo económico —fue en claridad, en dirección, en la certeza de estar construyendo
        algo que vale la pena.
      </p>
    </BlogArticleLayout>
  )
}
