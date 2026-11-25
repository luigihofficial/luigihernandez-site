# PROJECT IDENTITY — Sitio oficial de Luigi Hernández

**Versión:** 1.0 · **Fecha:** 2026-11-25 · **Gobernanza:** [KISS v1.0](KISS_PROTOCOL.md) · [SINR v1.0](SINR_PROTOCOL.md)
Este archivo no contiene secretos, contraseñas ni credenciales. `UNKNOWN` marca datos que el Product Owner debe confirmar antes de cualquier acción que dependa de ellos (Framework §12).

## 1. Identidad
| Campo | Valor |
|---|---|
| Nombre del proyecto | Sitio oficial de Luigi Hernández |
| Identificador único | **UNKNOWN (pendiente de asignar por el Product Owner)** |
| Product Owner | Luigi Hernandez (Northern South Ventures) |
| Organización de GitHub | `luigihofficial` |
| Repositorio oficial | `luigihofficial/luigihernandez-site`. Rama base: `main` |
| Finalidad | Sitio web personal y de marca: biografía, libro, conferencias, blog, prensa y contacto. |

## 2. Infraestructura autorizada
| Servicio | Recurso | Uso |
|---|---|---|
| Vercel | Proyecto que sirve `luigihernandez-site.vercel.app` (ID: UNKNOWN) | Hosting Next.js, auto-deploy al merge en `main` |
| Resend | UNKNOWN | Formulario `/api/contact` |

Las credenciales viven solo en las variables de entorno del proveedor y en los secretos de GitHub, nunca en el repositorio ni en el chat.

## 3. Entornos autorizados
| Entorno | Regla |
|---|---|
| Local | `npm run dev` |
| Producción (Vercel) | Solo vía merge de un PR aprobado. Nunca `vercel --prod` manual (`CLAUDE.md`) |

## 4. Dominios autorizados
- `luigihernandez-site.vercel.app`

## 5. Límites operativos
- Sin merge, despliegues, cambios en producción, migraciones, SQL de escritura ni gastos sin autorización explícita del Product Owner, vinculada a este proyecto, entorno y recurso.
- Reglas de deploy de `CLAUDE.md`: nunca push directo a `main`, siempre rama + PR.
- Este repositorio no comparte código, datos, credenciales, backlogs ni autorizaciones con otros proyectos de NSV (SINR §11).
