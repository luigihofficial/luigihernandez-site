import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'De Venezuela a Estados Unidos: mi historia de reinvención — Luigi Hernandez',
  description:
    'Dejar Caracas para llegar a Miami no fue una aventura romántica. Fue una decisión cargada de incertidumbre, errores y aprendizajes. Luigi Hernandez cuenta su historia sin filtros.',
  openGraph: {
    title: 'De Venezuela a Estados Unidos: mi historia de reinvención',
    description: 'La historia real y sin filtros de Luigi Hernandez como emprendedor inmigrante venezolano.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="De Venezuela a Estados Unidos: mi historia de reinvención"
      date="2025-02-08"
      readingTime="7 min"
      category="Historia personal"
    >
      <p>
        Hay una versión romantizada de la historia del inmigrante emprendedor. La de quien llegó sin nada,
        trabajó duro y triunfó. Esa versión existe, pero le faltan los capítulos del medio: los de la
        confusión, el orgullo herido, las decisiones equivocadas y los meses donde no sabes si lo que
        estás haciendo tiene sentido.
      </p>
      <p>
        Esta es mi historia sin esos filtros.
      </p>

      <h2>Caracas: el punto de partida</h2>
      <p>
        Nací en Caracas el 23 de enero de 1982. Fui criado por mi mamá, mi abuela y mi tía. Mi papá
        faltó desde muy pequeño, y ese vacío me enseñó algo importante: que la fortaleza no viene de
        tenerlo todo, sino de aprender a construir con lo que tienes.
      </p>
      <p>
        Venezuela me dio identidad, raíces y una conexión profunda con el mar. Desde niño, la playa fue
        mi lugar de recarga. Todavía lo es.
      </p>

      <h2>La decisión de emigrar</h2>
      <p>
        En 2007 conocí a quien hoy es mi esposa. Y en 2010, juntos, tomamos una de las decisiones más
        difíciles de nuestras vidas: dejar Venezuela y mudarnos a Estados Unidos.
      </p>
      <p>
        No fue una decisión tomada a la ligera. Fue el resultado de meses de conversaciones, de evaluar
        opciones, de miedo y de la certeza de que si queríamos construir el futuro que imaginábamos, no
        podíamos quedarnos donde estábamos.
      </p>

      <h2>Los primeros años en USA: la realidad del inmigrante</h2>
      <p>
        Llegar a Estados Unidos con formación universitaria y experiencia no te protege de la sensación
        de empezar desde cero. El idioma, la cultura, el sistema de crédito, las reglas no escritas del
        mercado americano —todo es diferente.
      </p>
      <p>
        Cometí errores de negocios que hoy me parecen obvios. Confié en personas que no lo merecían.
        Invertí en proyectos sin el criterio suficiente para evaluar si eran viables. Viví lo que muchos
        inmigrantes emprendedores viven: la presión de demostrar que valió la pena el sacrificio.
      </p>

      <h2>Los errores que me construyeron</h2>
      <p>
        La diferencia entre los errores que te destruyen y los que te construyen no está en el error
        mismo. Está en si eres capaz de extraer el aprendizaje sin quedarte atrapado en la culpa.
      </p>
      <p>
        Cada error que cometí en esos primeros años fue una lección que guardé. Y esas lecciones son
        exactamente lo que hoy enseño en el Método C.E.O.: cómo evaluar situaciones con criterio,
        cómo tomar decisiones que no repitan los mismos patrones, cómo construir con propósito.
      </p>

      <h2>Hoy: WellClub, el Método C.E.O. y la familia</h2>
      <p>
        Hoy tengo una empresa —WellClub— que ayuda a familias e individuos a proteger su bienestar a
        través de seguros de salud y vida. Tengo un programa de mentorías. Tengo un libro publicado.
        Y tengo lo más importante: una familia hermosa, construida con amor y criterio.
      </p>
      <p>
        ¿Fue fácil? No. ¿Valió la pena? Absolutamente. Y si tu historia tiene algo en común con la mía,
        quiero que sepas esto: el reinventarse no es una señal de fracaso. Es la señal de que sigues
        eligiendo crecer.
      </p>
    </BlogArticleLayout>
  )
}
