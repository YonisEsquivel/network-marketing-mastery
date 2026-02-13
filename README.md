# Network Marketing Mastery

**Plataforma interactiva completa para emprendedores que desean dominar el marketing en red con estrategias probadas, plantillas y herramientas prácticas.**

Este proyecto es una aplicación web full-stack construida con React, TypeScript, Tailwind CSS, tRPC y Drizzle ORM, diseñada específicamente para emprendedores de network marketing que buscan generar ingresos consistentes sin sentirse perdidos o sin apoyo.

---

## Características Principales

### Estructura de Ventas Completa

La plataforma implementa un funnel de ventas optimizado para conversión con tres niveles de precio:

- **Producto Principal ($7 USD)**: Acceso a 4 herramientas fundamentales con seguimiento de progreso interactivo
- **Upsell - Pack Premium ($19.99 USD)**: 6 recursos adicionales avanzados para líderes de equipo
- **Downsell (50% descuento - $9.99 USD)**: Oferta alternativa para maximizar conversión

### 10 Herramientas Interactivas con Seguimiento de Progreso

**4 Herramientas Principales (Producto Base - $7):**

1. **Hoja de Ruta Interactiva** - 15 pasos secuenciales desde cero hasta construir una red rentable
2. **Plantillas para Contactos** - 15 plantillas probadas para diferentes situaciones (contacto frío, seguimiento, cierre)
3. **Checklists de Éxito Semanal** - 35 tareas organizadas en 11 semanas de acción consistente
4. **Principios de Liderazgo** - 18 principios fundamentales para construir y motivar equipos

**6 Recursos Premium (Pack Premium - $19.99):**

5. **Estrategias de Atracción Efectivas** - Sistema completo para atraer prospectos sin perseguir
6. **Taller de Habilidades de Liderazgo** - Ejercicios prácticos para desarrollar liderazgo auténtico
7. **Adaptación a Nuevas Tendencias** - Guía para dominar TikTok, Reels, IA y otras tendencias digitales
8. **Programa de Motivación Colectiva** - Sistema de reconocimiento y actividades para mantener al equipo motivado
9. **Rediseño de Vida y Propósito** - Framework para diseñar la vida que quieres y usar el negocio como herramienta
10. **Calculadora de Certeza** - Herramienta interactiva para calcular números exactos de actividad necesarios

### Sistema de Progreso Persistente

Cada herramienta incluye barras de progreso interactivas con **doble persistencia**:

- **localStorage**: Guardado instantáneo en el navegador del usuario
- **Base de datos**: Sincronización automática con backend vía tRPC para acceso multi-dispositivo

### Diseño Visual Único

Identidad visual diferenciada con paleta **"Comunidad y Conexión"**:

- **Colores principales**: Púrpura (#7C4DFF), Coral (#FF7043), Amarillo (#FFD54F)
- **Fondo**: Crema (#FFF8E1) para calidez y legibilidad
- **Tipografía**: Poppins Bold para títulos, sistema para cuerpo
- **Elementos visuales**: Patrón SVG de red de conexiones, gradientes, sombras con tinte púrpura

---

## Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca de UI con las últimas características
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 4** - Framework de utilidades CSS
- **Wouter** - Router ligero para navegación
- **tRPC Client** - Cliente type-safe para comunicación con backend

### Backend

- **Hono** - Framework web ultrarrápido compatible con Cloudflare Workers
- **tRPC 11** - API type-safe end-to-end sin necesidad de REST
- **Drizzle ORM** - ORM moderno y type-safe para TypeScript
- **JWT con Web Crypto API** - Autenticación sin dependencias de Node.js

### Base de Datos

- **Cloudflare D1** - Base de datos SQLite en el Edge (migrado desde MySQL)
- **Drizzle Kit** - Migraciones y gestión de schema

### Deployment Target

- **Cloudflare Pages** - Hosting del frontend
- **Cloudflare Workers** - Ejecución del backend en el Edge
- **100% Cloudflare Ecosystem** - Sin dependencias de Node.js nativo

---

## Cómo Implementar en Tu Cuenta de Manus

### Requisitos Previos

Antes de comenzar, asegúrate de tener:

1. **Cuenta activa en Manus** - Regístrate en [manus.im](https://manus.im) si aún no tienes cuenta
2. **Acceso a GitHub** - El proyecto se sincroniza automáticamente con GitHub
3. **Conocimientos básicos de web development** - Familiaridad con React, TypeScript y conceptos de backend

### Paso 1: Importar el Proyecto desde GitHub

Manus permite importar proyectos directamente desde repositorios de GitHub:

1. **Conecta tu cuenta de GitHub con Manus**:
   - Ve a tu dashboard de Manus
   - Navega a Settings → Integrations
   - Conecta tu cuenta de GitHub y autoriza el acceso

2. **Importa este repositorio**:
   - En Manus, haz clic en "New Project" o "Import from GitHub"
   - Selecciona el repositorio `YonisEsquivel/network-marketing-mastery`
   - Manus detectará automáticamente que es un proyecto web con base de datos y autenticación

3. **Espera la inicialización**:
   - Manus instalará automáticamente todas las dependencias
   - Configurará las variables de entorno necesarias
   - Iniciará el servidor de desarrollo

### Paso 2: Configurar la Base de Datos

El proyecto usa una base de datos para almacenar el progreso de los usuarios:

1. **Verifica la conexión a la base de datos**:
   - Manus crea automáticamente una instancia de base de datos MySQL/TiDB
   - La variable `DATABASE_URL` ya está configurada

2. **Ejecuta las migraciones**:
   - Abre la terminal integrada en Manus
   - Ejecuta: `pnpm db:push`
   - Esto creará las tablas necesarias (`users` y `user_progress`)

3. **Verifica las tablas**:
   - Ve al panel "Database" en la UI de Manus
   - Deberías ver las tablas `users` y `user_progress` creadas

### Paso 3: Personalizar el Contenido

Para adaptar la plataforma a tu marca o nicho específico:

#### Cambiar Título y Logo

1. **Actualizar título del sitio**:
   - Ve a Settings → General en la UI de Manus
   - Cambia "Network Marketing Mastery" por el nombre de tu producto

2. **Cambiar logo**:
   - Ve a Settings → General
   - Sube tu logo personalizado

#### Modificar Precios

Si deseas cambiar los precios ($7, $19.99, $9.99):

1. **Edita el archivo `client/src/pages/Home.tsx`**:
   - Busca todas las menciones de `$7` y reemplaza por tu precio
   - Actualiza la sección "¿Por Qué Solo $7?"

2. **Edita `client/src/pages/Upsell.tsx`**:
   - Cambia `$19.99` por tu precio de upsell

3. **Edita `client/src/pages/Downsell.tsx`**:
   - Cambia `$9.99` por tu precio de downsell

#### Personalizar Colores y Diseño

El proyecto usa variables CSS para facilitar la personalización:

1. **Edita `client/src/index.css`**:
   - Busca las variables CSS en `:root`
   - Modifica los colores principales:
     - `--primary`: Color púrpura principal
     - `--secondary`: Color coral secundario
     - `--accent`: Color amarillo de acento

2. **Cambia la tipografía**:
   - Edita `client/index.html` para cambiar la fuente de Google Fonts
   - Actualiza `font-family` en `index.css`

### Paso 4: Configurar Autenticación (Opcional)

El proyecto incluye autenticación con Manus OAuth preconfigurada:

1. **Verificar configuración OAuth**:
   - Las variables `OAUTH_SERVER_URL`, `VITE_OAUTH_PORTAL_URL` y `VITE_APP_ID` ya están configuradas
   - No necesitas hacer nada adicional

2. **Personalizar flujo de login** (opcional):
   - Edita `client/src/const.ts` para modificar URLs de redirección
   - Personaliza la página de login en tu diseño

### Paso 5: Integrar Stripe para Pagos (Recomendado)

Para procesar pagos reales, necesitas integrar Stripe:

1. **Agregar feature de Stripe**:
   - En Manus, usa el comando: `webdev_add_feature` con `feature="stripe"`
   - O solicita al agente: "Agrega integración de Stripe"

2. **Configurar productos en Stripe**:
   - Crea 3 productos en tu dashboard de Stripe:
     - Producto Base: $7 USD
     - Pack Premium: $19.99 USD
     - Downsell: $9.99 USD

3. **Conectar Stripe Checkout**:
   - Implementa los botones de compra en `Home.tsx`, `Upsell.tsx` y `Downsell.tsx`
   - Configura webhook para enviar credenciales automáticamente post-compra

4. **Proteger recursos**:
   - Implementa middleware de autenticación para verificar que el usuario pagó
   - Usa `protectedProcedure` en tRPC para endpoints de herramientas

### Paso 6: Probar el Proyecto Localmente

Antes de publicar, prueba todo el flujo:

1. **Verifica el servidor de desarrollo**:
   - El proyecto debería estar corriendo en el panel Preview de Manus
   - Navega por todas las páginas para verificar que funcionan

2. **Prueba el seguimiento de progreso**:
   - Ve a cualquier herramienta (ej: Hoja de Ruta)
   - Marca algunos checkboxes como completados
   - Recarga la página y verifica que el progreso se mantiene

3. **Prueba en diferentes dispositivos**:
   - Usa las herramientas de desarrollador para simular mobile
   - Verifica que el diseño responsive funciona correctamente

### Paso 7: Publicar el Proyecto

Una vez que todo funciona correctamente:

1. **Crear un checkpoint**:
   - Solicita al agente: "Crea un checkpoint"
   - O usa el comando `webdev_save_checkpoint`

2. **Publicar a producción**:
   - Haz clic en el botón "Publish" en la UI de Manus (esquina superior derecha)
   - Manus desplegará automáticamente tu sitio

3. **Configurar dominio personalizado** (opcional):
   - Ve a Settings → Domains
   - Conecta tu dominio personalizado o usa el subdominio de Manus

### Paso 8: Configurar Analytics y Monitoreo

Manus incluye analytics integrado:

1. **Verifica analytics**:
   - Ve al panel "Dashboard" en la UI de Manus
   - Podrás ver visitas (UV/PV) y métricas de uso

2. **Monitorea la base de datos**:
   - Usa el panel "Database" para ver el progreso de usuarios
   - Exporta datos para análisis adicional

---

## Estructura del Proyecto

```
network-marketing-mastery/
├── client/                          # Frontend React
│   ├── public/                      # Archivos estáticos
│   ├── src/
│   │   ├── components/              # Componentes reutilizables
│   │   │   └── ui/                  # Componentes shadcn/ui
│   │   ├── contexts/                # React contexts
│   │   ├── hooks/                   # Custom hooks
│   │   │   └── useProgress.ts       # Hook para tracking de progreso
│   │   ├── lib/
│   │   │   └── trpc.ts              # Cliente tRPC
│   │   ├── pages/                   # Páginas de la aplicación
│   │   │   ├── Home.tsx             # Landing page principal
│   │   │   ├── Upsell.tsx           # Página de upsell ($19.99)
│   │   │   ├── Downsell.tsx         # Página de downsell ($9.99)
│   │   │   ├── ThankYou.tsx         # Página post-compra
│   │   │   ├── HojaDeRuta.tsx       # Herramienta 1: 15 pasos
│   │   │   ├── PlantillasContactos.tsx  # Herramienta 2: 15 plantillas
│   │   │   ├── ChecklistsExito.tsx  # Herramienta 3: 35 tareas
│   │   │   ├── GuiasLiderazgo.tsx   # Herramienta 4: 18 principios
│   │   │   ├── EstrategiasAtraccion.tsx  # Premium 1
│   │   │   ├── TallerLiderazgo.tsx  # Premium 2
│   │   │   ├── AdaptacionTendencias.tsx  # Premium 3
│   │   │   ├── ProgramaMotivacion.tsx    # Premium 4
│   │   │   ├── RedisenoVida.tsx     # Premium 5
│   │   │   └── CalculadoraCerteza.tsx    # Premium 6
│   │   ├── App.tsx                  # Configuración de rutas
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Estilos globales + variables CSS
│   └── index.html                   # HTML base
├── server/                          # Backend
│   ├── _core/                       # Framework core (no modificar)
│   │   ├── auth-worker.ts           # Autenticación JWT para Workers
│   │   ├── cookies-worker.ts        # Manejo de cookies con Web API
│   │   ├── context-worker.ts        # Context para tRPC Workers
│   │   └── trpc-worker.ts           # Configuración tRPC Workers
│   ├── db.ts                        # Helpers de base de datos
│   ├── routers.ts                   # Routers tRPC (Express - legacy)
│   ├── routers-worker.ts            # Routers tRPC (Workers)
│   └── worker.ts                    # Servidor Hono para Cloudflare Workers
├── drizzle/                         # Migraciones de base de datos
│   ├── schema.ts                    # Schema de base de datos
│   └── migrations/                  # Archivos de migración SQL
├── shared/                          # Código compartido
├── storage/                         # Helpers para S3
├── wrangler.toml                    # Configuración Cloudflare Workers
├── package.json                     # Dependencias y scripts
├── tailwind.config.ts               # Configuración Tailwind
├── tsconfig.json                    # Configuración TypeScript
├── DEPLOYMENT.md                    # Guía de despliegue a Cloudflare
├── todo.md                          # Lista de tareas del proyecto
└── README.md                        # Este archivo
```

---

## Scripts Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo (Express + Vite)
pnpm dev

# Iniciar servidor de desarrollo para Workers (Cloudflare)
pnpm dev:worker
```

### Base de Datos

```bash
# Aplicar cambios de schema a la base de datos
pnpm db:push

# Generar migraciones SQL
pnpm db:generate

# Abrir Drizzle Studio (UI para explorar la DB)
pnpm db:studio

# Crear base de datos D1 en Cloudflare
pnpm db:create:d1

# Aplicar migraciones a D1
pnpm db:migrate:d1
```

### Testing

```bash
# Ejecutar tests con Vitest
pnpm test

# Ejecutar tests en modo watch
pnpm test:watch
```

### Build y Deploy

```bash
# Build para producción (Express)
pnpm build

# Build para Cloudflare Workers
pnpm build:worker

# Deploy a Cloudflare (Workers + Pages)
pnpm deploy

# Deploy solo Workers
pnpm deploy:worker

# Deploy solo Pages
pnpm deploy:pages
```

---

## Variables de Entorno

Manus configura automáticamente las siguientes variables de entorno:

### Variables del Sistema (Preconfiguradas)

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | Conexión a base de datos MySQL/TiDB |
| `JWT_SECRET` | Secret para firmar tokens JWT |
| `VITE_APP_ID` | ID de la aplicación Manus |
| `OAUTH_SERVER_URL` | URL del servidor OAuth de Manus |
| `VITE_OAUTH_PORTAL_URL` | URL del portal de login |
| `OWNER_OPEN_ID` | Open ID del propietario |
| `OWNER_NAME` | Nombre del propietario |
| `BUILT_IN_FORGE_API_URL` | URL de APIs integradas de Manus |
| `BUILT_IN_FORGE_API_KEY` | Token para APIs de Manus (server) |
| `VITE_FRONTEND_FORGE_API_KEY` | Token para APIs de Manus (frontend) |
| `VITE_APP_TITLE` | Título de la aplicación |
| `VITE_APP_LOGO` | URL del logo |

### Variables Personalizadas (Opcional)

Si necesitas agregar variables personalizadas:

1. **Usa la UI de Manus**:
   - Ve a Settings → Secrets
   - Agrega tus variables personalizadas

2. **O solicita al agente**:
   - "Agrega una variable de entorno llamada X con valor Y"
   - El agente usará `webdev_request_secrets`

---

## Migración a Cloudflare Workers (Opcional)

El proyecto está preparado para despliegue en Cloudflare Workers para máximo rendimiento:

### ¿Por qué migrar a Cloudflare?

- **Edge Computing**: Tu backend corre en más de 300 ubicaciones globales
- **Latencia ultra-baja**: Respuestas en <50ms desde cualquier parte del mundo
- **Escalabilidad automática**: Sin preocuparte por servidores
- **Costos reducidos**: Pay-per-request, ideal para proyectos en crecimiento

### Pasos para Desplegar en Cloudflare

1. **Crea cuenta en Cloudflare**:
   - Regístrate en [cloudflare.com](https://cloudflare.com)
   - Obtén tu Account ID y API Token

2. **Configura Wrangler**:
   ```bash
   pnpm wrangler login
   ```

3. **Crea base de datos D1**:
   ```bash
   pnpm db:create:d1
   ```

4. **Actualiza `wrangler.toml`**:
   - Reemplaza `database_id` con el ID de tu D1

5. **Ejecuta migraciones**:
   ```bash
   pnpm db:migrate:d1
   ```

6. **Despliega**:
   ```bash
   pnpm deploy
   ```

Para instrucciones detalladas, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## Personalización Avanzada

### Agregar Nuevas Herramientas

Para agregar una nueva herramienta con seguimiento de progreso:

1. **Crea el componente de la página**:
   ```tsx
   // client/src/pages/MiNuevaHerramienta.tsx
   import { useProgress } from '@/hooks/useProgress';
   
   export default function MiNuevaHerramienta() {
     const { completedItems, totalItems, progress, toggleItem } = useProgress(
       'mi-nueva-herramienta',
       ['item1', 'item2', 'item3'] // IDs de items
     );
     
     // Tu UI aquí
   }
   ```

2. **Agrega la ruta en `App.tsx`**:
   ```tsx
   <Route path="/mi-nueva-herramienta" component={MiNuevaHerramienta} />
   ```

3. **Agrega link en la página principal**:
   - Edita `client/src/pages/Home.tsx`
   - Agrega un card en la sección de herramientas

### Modificar el Schema de Base de Datos

Si necesitas agregar nuevas tablas o campos:

1. **Edita `drizzle/schema.ts`**:
   ```typescript
   export const miNuevaTabla = sqliteTable('mi_nueva_tabla', {
     id: integer('id').primaryKey(),
     // ... tus campos
   });
   ```

2. **Genera migración**:
   ```bash
   pnpm db:generate
   ```

3. **Aplica cambios**:
   ```bash
   pnpm db:push
   ```

### Agregar Nuevos Endpoints tRPC

Para agregar funcionalidad backend:

1. **Edita `server/routers-worker.ts`**:
   ```typescript
   export const appRouter = router({
     // ... routers existentes
     miNuevoRouter: publicProcedure
       .input(z.object({ /* ... */ }))
       .query(async ({ input, ctx }) => {
         // Tu lógica aquí
       }),
   });
   ```

2. **Usa en el frontend**:
   ```tsx
   const { data } = trpc.miNuevoRouter.useQuery({ /* ... */ });
   ```

---

## Solución de Problemas Comunes

### El servidor no inicia

**Problema**: Error al ejecutar `pnpm dev`

**Solución**:
1. Verifica que todas las dependencias estén instaladas: `pnpm install`
2. Limpia node_modules: `rm -rf node_modules && pnpm install`
3. Verifica que el puerto 3000 no esté ocupado

### El progreso no se guarda

**Problema**: Los checkboxes no persisten al recargar

**Solución**:
1. Verifica que la base de datos esté corriendo
2. Ejecuta las migraciones: `pnpm db:push`
3. Revisa la consola del navegador para errores de tRPC

### Errores de TypeScript

**Problema**: Errores de tipo en archivos Worker

**Solución**:
- Estos son warnings esperados de compatibilidad Express/Hono
- No afectan la funcionalidad
- Se resolverán al migrar completamente a Workers

### Base de datos no conecta

**Problema**: Error `DATABASE_URL not found`

**Solución**:
1. Verifica que estés en Manus (las variables se inyectan automáticamente)
2. Si estás en local, crea un archivo `.env` con `DATABASE_URL`

---

## Roadmap y Próximas Mejoras

### Implementaciones Pendientes

- [ ] **Sistema de pagos con Stripe**: Checkout completo con webhook para entrega automática
- [ ] **OAuth callback completo**: Implementar lógica de OAuth provider en Workers
- [ ] **Animaciones de scroll**: Fade-in + slide-up con Intersection Observer
- [ ] **SEO optimizado**: Open Graph, Twitter Cards, schema.org markup
- [ ] **Panel de administrador**: Dashboard para ver progreso de usuarios
- [ ] **Sistema de notificaciones**: Emails automáticos de bienvenida y seguimiento
- [ ] **Certificados de completación**: PDF generado al completar todas las herramientas
- [ ] **Comunidad integrada**: Foro o chat para que usuarios se conecten

### Mejoras Sugeridas

- **A/B Testing**: Probar diferentes precios y copy para optimizar conversión
- **Gamificación**: Badges, puntos y leaderboards para aumentar engagement
- **Modo offline**: Service Worker para acceso sin conexión
- **App móvil**: Wrapper con Capacitor para iOS/Android
- **Integraciones**: Zapier, Mailchimp, CRM para automatización de marketing

---

## Contribuir

Si deseas contribuir mejoras a este proyecto:

1. **Fork el repositorio** en GitHub
2. **Crea una rama** para tu feature: `git checkout -b feature/mi-mejora`
3. **Haz commit** de tus cambios: `git commit -m 'Agregar mi mejora'`
4. **Push** a la rama: `git push origin feature/mi-mejora`
5. **Abre un Pull Request** describiendo tus cambios

---

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente para tus propios proyectos.

---

## Soporte y Contacto

### Documentación Adicional

- **Guía de Despliegue**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Lista de Tareas**: [todo.md](./todo.md)
- **Documentación de Manus**: [docs.manus.im](https://docs.manus.im)

### Obtener Ayuda

Si tienes preguntas o necesitas ayuda:

1. **Documentación de Manus**: Consulta la documentación oficial
2. **Soporte de Manus**: Envía tu consulta en [help.manus.im](https://help.manus.im)
3. **Issues de GitHub**: Abre un issue en el repositorio para reportar bugs

---

## Créditos

**Desarrollado por**: Yonis Esquivel con Manus AI  
**Diseño Visual**: Opción 4 "Comunidad y Conexión"  
**Stack Tecnológico**: React 19, TypeScript, Tailwind CSS 4, tRPC 11, Hono, Drizzle ORM, Cloudflare Workers  
**Inspiración**: Basado en las necesidades reales de emprendedores de network marketing que buscan herramientas prácticas y accionables

---

**¿Listo para lanzar tu propia plataforma de Network Marketing Mastery?**

Sigue esta guía paso a paso y tendrás tu sitio funcionando en menos de 30 minutos. Si tienes dudas, no dudes en consultar la documentación o pedir ayuda al equipo de Manus.

**¡Éxito en tu proyecto!** 🚀
