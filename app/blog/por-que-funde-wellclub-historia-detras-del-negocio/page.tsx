import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Por qué fundé WellClub: la historia detrás del negocio — Luigi Hernandez',
  description:
    'WellClub no nació de un plan de negocios. Nació de una necesidad real, de ver familias inmigrantes sin protección. Luigi Hernandez cuenta la historia honesta detrás de su empresa.',
  openGraph: {
    title: 'Por qué fundé WellClub: la historia detrás del negocio',
    description: 'La historia real detrás de WellClub, la empresa de bienestar de Luigi Hernandez.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="Por qué fundé WellClub: la historia detrás del negocio"
      date="2025-05-01"
      readingTime="6 min"
      category="WellClub"
    >
      <p>
        Hay una versión limpia de la historia de WellClub que podría contarte: "Vi una oportunidad
        en el mercado hispano de seguros en USA, analicé la demanda y construí una empresa".
      </p>
      <p>
        Esa versión es parcialmente verdad. Pero no es la historia real.
      </p>

      <h2>La historia real: la vulnerabilidad del inmigrante</h2>
      <p>
        Cuando llegué a Estados Unidos en 2010, tuve que aprender el sistema de salud americano
        desde cero. Sin guía, sin nadie que me explicara en mi idioma, sin la confianza de saber
        si estaba tomando la decisión correcta para mi familia.
      </p>
      <p>
        Recuerdo la sensación de inseguridad al elegir un plan de salud sin entender bien qué
        cubría y qué no. La angustia de preguntarme qué pasaría si alguien de mi familia se
        enfermaba gravemente. Esa vulnerabilidad es universal entre los inmigrantes, pero pocas
        empresas la abordan con la seriedad que merece.
      </p>

      <h2>El momento que lo cambió todo</h2>
      <p>
        Hubo un momento específico —no lo olvidaré— donde vi a una familia latina en una situación
        crítica de salud sin protección adecuada porque nadie les había explicado sus opciones con
        claridad y honestidad. Ese momento me golpeó de una manera que no puedo describir bien
        con palabras.
      </p>
      <p>
        Pensé: "Yo viví esa vulnerabilidad. Ahora sé cómo el sistema funciona. ¿Qué estoy
        esperando para hacer algo con eso?"
      </p>

      <h2>WellClub: más que seguros</h2>
      <p>
        WellClub no es una empresa de seguros que le vende pólizas a hispanos. Es una empresa de
        asesoría en bienestar integral que, entre otras cosas, trabaja con seguros de salud y vida.
        La diferencia es de propósito.
      </p>
      <p>
        Nuestro enfoque comienza con entender la situación de cada familia: su composición, sus
        ingresos, sus necesidades médicas, sus planes de futuro. Solo después de ese entendimiento
        recomendamos opciones. No al revés.
      </p>

      <h2>Lo que me mantiene motivado</h2>
      <p>
        Cada vez que una familia me dice que por fin entiende su plan de salud, o que puede dormir
        tranquila sabiendo que tiene protección en caso de emergencia, recuerdo por qué fundé esto.
        No fue por el mercado. Fue por esas familias.
      </p>
      <p>
        Y si tú eres uno de esos inmigrantes que navega el sistema de salud americano sin claridad,
        quiero que sepas que WellClub existe exactamente para ti. No para venderte algo. Para
        asegurarse de que tengas la protección que mereces.
      </p>
    </BlogArticleLayout>
  )
}
