import type { Metadata } from 'next'
import BlogArticleLayout from '@/components/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Seguro de salud para familias inmigrantes en USA — Luigi Hernandez',
  description:
    'Navegar el sistema de salud en Estados Unidos es confuso para familias inmigrantes. Luigi Hernandez explica las opciones reales que existen y cómo elegir la correcta para tu familia.',
  openGraph: {
    title: 'Seguro de salud para familias inmigrantes en USA',
    description: 'Guía práctica de Luigi Hernandez sobre seguros de salud en USA para familias inmigrantes.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title="Seguro de salud para familias inmigrantes en USA"
      date="2025-03-15"
      readingTime="6 min"
      category="WellClub"
    >
      <p>
        Cuando llegué a Estados Unidos en 2010, el sistema de salud americano fue uno de mis mayores
        dolores de cabeza. No por falta de opciones, sino por el exceso de ellas. HMO, PPO, deductible,
        copay, out-of-pocket maximum —un vocabulario completamente nuevo en un contexto completamente
        nuevo.
      </p>
      <p>
        Si eso te suena familiar, este artículo es para ti.
      </p>

      <h2>Por qué el sistema de salud en USA confunde a los inmigrantes</h2>
      <p>
        En la mayoría de los países latinoamericanos, el sistema de salud es más o menos comprensible:
        hay un sistema público y uno privado, y tú eliges o combinas según tus posibilidades. En USA,
        el sistema es diferente en su estructura, en su vocabulario y en sus costos.
      </p>
      <p>
        Los errores más comunes que veo en familias inmigrantes son: elegir el plan más barato sin
        entender las restricciones, no usar los beneficios preventivos que ya pagaron, y esperar hasta
        una emergencia para buscar atención —lo más caro que puedes hacer.
      </p>

      <h2>Los tipos de seguro que existen</h2>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Seguros del empleador.</strong> Si trabajas para una
        empresa, probablemente tienes acceso a un plan de salud. Evalúa si es el adecuado para tu
        familia; no siempre lo es.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Marketplace (ACA/Obamacare).</strong> Si eres
        trabajador independiente, emprendedor o tu empleador no ofrece seguro, el Marketplace es
        tu opción principal. Dependiendo de tus ingresos, puedes calificar para subsidios
        significativos.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Medicaid y CHIP.</strong> Para familias con ingresos
        bajos, estas opciones pueden cubrir a los miembros de tu familia, especialmente a los hijos.
      </p>
      <p>
        <strong style={{ color: '#F5F5F5' }}>Planes privados.</strong> Fuera del Marketplace,
        existen opciones privadas que pueden complementar o sustituir las anteriores según tu situación.
      </p>

      <h2>El error más costoso: no tener plan</h2>
      <p>
        En USA, una visita de emergencia sin seguro puede costar miles de dólares. Una hospitalización,
        decenas de miles. El criterio estratégico dice claramente: el costo de no tener seguro es
        siempre mayor que el costo de tenerlo.
      </p>

      <h2>Cómo WellClub puede ayudarte</h2>
      <p>
        En WellClub trabajo directamente con familias inmigrantes para evaluar su situación específica
        y encontrar la opción de salud correcta. No hay una solución universal: cada familia tiene un
        contexto diferente —número de miembros, ingresos, estatus migratorio, necesidades médicas—
        y merece una evaluación personalizada.
      </p>
      <p>
        Si tienes preguntas sobre tu seguro de salud en USA, estaré feliz de tener esa conversación
        contigo sin costo y sin presión.
      </p>
    </BlogArticleLayout>
  )
}
