# Guía de Despliegue en Cloudflare

Este proyecto está configurado para desplegarse 100% en el ecosistema de Cloudflare:
- **Frontend**: Cloudflare Pages
- **Backend**: Cloudflare Workers (Hono)
- **Base de Datos**: Cloudflare D1 (SQLite)

## Requisitos Previos

1. Cuenta de Cloudflare
2. Wrangler CLI instalado globalmente: `npm install -g wrangler`
3. Autenticación con Cloudflare: `wrangler login`

## Paso 1: Crear Base de Datos D1

```bash
# Crear la base de datos D1
pnpm run db:create:d1

# Esto generará un database_id. Cópialo y actualiza wrangler.toml
# Reemplaza "placeholder-database-id" con el ID real
```

## Paso 2: Ejecutar Migraciones

```bash
# Aplicar el schema inicial a D1
pnpm run db:migrate:d1
```

## Paso 3: Configurar Variables de Entorno

Configura las siguientes variables en el dashboard de Cloudflare o mediante wrangler:

```bash
# Variables requeridas
wrangler secret put JWT_SECRET
wrangler secret put OAUTH_SERVER_URL
wrangler secret put VITE_APP_ID
wrangler secret put OWNER_OPEN_ID
wrangler secret put OWNER_NAME

# Opcional: otras variables específicas de tu aplicación
```

## Paso 4: Desplegar Backend (Workers)

```bash
# Construir y desplegar el worker
pnpm run deploy
```

Esto ejecutará:
1. `build:worker` - Compila el código del worker con esbuild
2. `wrangler deploy` - Despliega a Cloudflare Workers

## Paso 5: Desplegar Frontend (Pages)

### Opción A: Desde el Dashboard de Cloudflare

1. Ve a **Pages** en el dashboard de Cloudflare
2. Conecta tu repositorio de GitHub
3. Configura el build:
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
4. Agrega variables de entorno necesarias para el frontend
5. Despliega

### Opción B: Desde CLI

```bash
# Construir el frontend
pnpm run build

# Desplegar a Pages
wrangler pages deploy dist --project-name=network-marketing-mastery
```

## Paso 6: Configurar Routing

En el dashboard de Cloudflare Pages:
1. Ve a **Settings** > **Functions**
2. Configura el routing para que `/api/*` apunte a tu Worker

O usa `_routes.json` en tu proyecto:

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/api/*"]
}
```

## Desarrollo Local

### Backend (Worker)

```bash
# Ejecutar worker localmente con wrangler
pnpm run dev:worker
```

### Frontend + Backend (Modo actual)

```bash
# Ejecutar servidor Express tradicional (para desarrollo)
pnpm run dev
```

## Estructura de Archivos para Workers

```
server/
├── worker.ts              # Punto de entrada del Worker
├── routers-worker.ts      # Routers tRPC para Workers
├── db.ts                  # Cliente Drizzle para D1
├── _core/
│   ├── context-worker.ts  # Contexto tRPC para Workers
│   ├── trpc-worker.ts     # Configuración tRPC para Workers
│   ├── auth-worker.ts     # Autenticación JWT con Web Crypto
│   └── cookies-worker.ts  # Manejo de cookies con Web APIs
└── types/
    └── cloudflare.d.ts    # Tipos de Cloudflare Workers

drizzle/
├── schema.ts              # Schema SQLite para D1
└── migrations/
    └── 0001_initial.sql   # Migración inicial
```

## Comandos Útiles

```bash
# Desarrollo
pnpm run dev              # Servidor Express tradicional
pnpm run dev:worker       # Worker local con wrangler

# Build
pnpm run build            # Build frontend + backend tradicional
pnpm run build:worker     # Build worker para Cloudflare

# Despliegue
pnpm run deploy           # Desplegar worker a Cloudflare

# Base de datos
pnpm run db:create:d1     # Crear base de datos D1
pnpm run db:migrate:d1    # Aplicar migraciones a D1

# Testing
pnpm run test             # Ejecutar tests
pnpm run check            # Verificar tipos TypeScript
```

## Notas Importantes

### Compatibilidad con Workers

- ✅ **Hono** reemplaza Express
- ✅ **D1** (SQLite) reemplaza MySQL
- ✅ **Web Crypto API** para JWT
- ✅ **Web APIs estándar** para cookies
- ✅ **Drizzle ORM** compatible con D1

### Limitaciones de Workers

- No se puede usar `fs`, `path`, u otras APIs de Node.js
- Límite de 1MB para el bundle del worker
- Límite de CPU time por request
- D1 tiene límites de queries por segundo

### OAuth en Workers

El endpoint `/api/oauth/callback` necesita ser implementado según tu proveedor OAuth específico. La estructura básica está en `server/worker.ts`.

## Troubleshooting

### Error: "Database not initialized"

Asegúrate de que el binding `DB` esté configurado correctamente en `wrangler.toml` y que la base de datos D1 exista.

### Error: "JWT_SECRET not found"

Configura las variables de entorno necesarias usando `wrangler secret put`.

### Error de CORS

Verifica que el middleware CORS en `worker.ts` esté configurado correctamente para tu dominio de frontend.

## Recursos

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Hono Documentation](https://hono.dev/)
- [Drizzle ORM D1](https://orm.drizzle.team/docs/get-started-sqlite#cloudflare-d1)
