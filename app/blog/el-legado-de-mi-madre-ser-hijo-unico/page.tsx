import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'El legado de mi madre: ser hijo único y aprender a ser fuerte — Luigi Hernandez',
  description:
    'Perder a su padre de pequeño y ser criado por su madre, abuela y tía marcó profundamente a Luigi Hernandez. Esta es la historia del amor y la fortaleza que heredó.',
  openGraph: {
    title: 'El legado de mi madre: ser hijo único y aprender a ser fuerte',
    description: 'Luigi Hernandez habla del legado de su madre y cómo forjó su carácter como hijo único.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="El legado de mi madre: ser hijo único y aprender a ser fuerte"
      date="2025-04-22"
      readingTime="6 min"
      category="Historia personal"
    >
      <p>
        Rara vez escribo sobre esto. No porque me avergüence, sino porque es tan personal que cuesta
        traducirlo a palabras sin que se sienta menos de lo que realmente fue. Pero si hay algo que
        define quién soy —como persona, como emprendedor, como padre— es el legado de mi madre.
      </p>

      <h2>Un hogar de mujeres valientes</h2>
      <p>
        Crecí en un hogar de tres mujeres: mi mamá, mi abuela y mi tía. Mi papá faltó desde pequeño.
        Lo que podría haber sido una historia de carencia fue, en cambio, una historia de abundancia
        de otro tipo: amor sin límites, ejemplo sin palabras y una educación de resiliencia que ninguna
        escuela me habría dado.
      </p>
      <p>
        Mi mamá trabajó incansablemente para que yo no sintiera la ausencia de lo que no teníamos.
        No siempre lo logró ocultar —los niños ven más de lo que los adultos creen— pero sí logró
        algo más importante: que yo nunca sintiera que eso me definía.
      </p>

      <h2>Ser hijo único: la soledad y la fortaleza</h2>
      <p>
        Ser hijo único tiene su propia psicología. No hay hermanos con quienes compartir la presión
        familiar. La atención y las expectativas recaen sobre ti. Pero también aprendes a estar solo
        sin sentirte solo. A generar tus propios recursos internos. A ser tu propio primer compañero.
      </p>
      <p>
        Esa capacidad de encontrar fortaleza en la soledad me ha sido útil en los momentos más
        difíciles del emprendimiento: las madrugadas de incertidumbre, los meses sin claridad, las
        decisiones que nadie más puede tomar por ti.
      </p>

      <h2>Lo que heredé de ella</h2>
      <p>
        Mi mamá me enseñó tres cosas que ningún libro de emprendimiento me habría dado. Primero: que
        el amor no se dice con palabras, se demuestra con acciones consistentes. Segundo: que la
        dignidad no depende de las circunstancias, sino de cómo las enfrentas. Tercero: que pedir
        ayuda no es debilidad cuando el objetivo es cuidar a los que amas.
      </p>
      <p>
        Esas tres lecciones están en el ADN de todo lo que construyo. En WellClub, cuando trabajo
        con familias para proteger su salud y su futuro, estoy honrando lo que ella hizo por mí.
        En el Método C.E.O., cuando enseño a tomar decisiones con criterio en lugar de con miedo,
        estoy transmitiendo lo que ella modeló sin saberlo.
      </p>

      <h2>El legado continúa</h2>
      <p>
        Hoy soy padre de dos niñas. Y en ellas veo la oportunidad de continuar ese legado: no el
        legado de la perfección, sino el de la presencia, la integridad y el amor que no se rinde.
      </p>
      <p>
        Mi mamá construyó mucho con poco. Yo quiero construir mucho con lo mucho que ella me dio.
        Esa es la deuda más bonita que tengo.
      </p>
    </BlogArticleLayout>
  )
}
