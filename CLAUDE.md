# Luigi Hernandez Personal Site — CLAUDE.md

## Reglas obligatorias de deploy

- **NUNCA** `git push origin main` directo.
- **SIEMPRE** branch + PR. Flujo correcto:
  ```
  git checkout -b feat/X origin/main
  git push -u origin feat/X
  gh pr create --title "feat: X" --body "..."
  # Esperar review → merge → auto-deploy vía Vercel
  ```
- **NUNCA** `vercel --prod` ni `vercel deploy --prod` manual desde CLI.
- Antes de cualquier deploy, verificar env vars: `vercel env pull .env.local`
- El auto-deploy ocurre solo al hacer merge a `main` desde un PR aprobado.

## Stack

- Next.js 16 (App Router) — TypeScript
- Tailwind CSS v4 (@tailwindcss/postcss)
- Framer Motion v12
- Resend (emails de contacto)

## Convenciones de código

- Componentes de cliente: agregar `'use client'` al inicio del archivo.
- Imágenes: usar `next/image` siempre. Los archivos de imagen van en `/public/`.
- Rutas de la app: `app/[ruta]/page.tsx`
- API routes: `app/api/[ruta]/route.ts`
- Componentes compartidos: `components/`

## Variables de entorno

- `RESEND_API_KEY` — clave de Resend para envío de emails desde `/api/contact`
- Nunca commitear `.env.local` ni `.env`

## Estructura del sitio

- `/` — Homepage
- `/sobre-mi` — Biografía completa
- `/libros` — "Para, Piensa y Actúa"
- `/conferencias` — Temas disponibles para keynotes
- `/blog` — Blog con 15 artículos
- `/blog/[slug]` — Artículo individual
- `/prensa` — Sala de prensa (próximamente)
- `/contacto` — Formulario de contacto completo

## Colores

- Background: `#080808`
- Cards: `#111111`
- Accent dorado: `#C4922A`
- Hover dorado: `#F0C040`
- Texto primario: `#F5F5F5`
- Texto secundario: `#9CA3AF`
