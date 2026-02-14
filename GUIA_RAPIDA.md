# 🚀 Guía Rápida de Inicio - Network Marketing Mastery

## ✅ Tu Sitio Web Está Funcionando

**URL de acceso**: https://3000-iu2ssk1k84mn3q8eb0xjd-4dea485c.us2.manus.computer

El sitio web está completamente funcional con todas las características implementadas.

---

## 📋 ¿Qué Tienes Ahora?

### ✨ Sitio Web Completo
- **Página principal** con landing page optimizada para conversión
- **10 herramientas interactivas** con seguimiento de progreso
- **Funnel de ventas** completo (Producto base $9.97 → Upsell $19.97 → Downsell $9.97)
- **Diseño visual único** con paleta "Comunidad y Conexión"
- **Responsive design** para móvil, tablet y desktop

### 🛠️ Herramientas Disponibles

**4 Herramientas Principales ($9.97)**:
1. **Hoja de Ruta Interactiva** - 15 pasos con checkboxes
2. **Plantillas para Contactos** - 15 plantillas probadas
3. **Checklists de Éxito Semanal** - 35 tareas organizadas
4. **Guías sobre Liderazgo** - 18 principios fundamentales

**6 Recursos Premium ($19.97)**:
5. **Estrategias de Atracción Efectivas**
6. **Taller de Habilidades de Liderazgo**
7. **Adaptación a Nuevas Tendencias**
8. **Programa de Motivación Colectiva**
9. **Rediseño de Vida y Propósito**
10. **Calculadora de Certeza**

### 💾 Características Técnicas
- ✅ **Base de datos** SQLite local configurada
- ✅ **Seguimiento de progreso** con localStorage + base de datos
- ✅ **Autenticación** OAuth con Manus
- ✅ **API type-safe** con tRPC
- ✅ **Todas las dependencias** instaladas

---

## 🎯 Próximos Pasos Recomendados

### 1. Personalizar el Contenido

#### Cambiar Precios
Si deseas modificar los precios ($9.97, $19.97, $9.97):
- Edita `client/src/pages/Home.tsx` para el precio base
- Edita `client/src/pages/Upsell.tsx` para el upsell
- Edita `client/src/pages/Downsell.tsx` para el downsell

#### Cambiar Colores
Los colores están definidos en `client/src/index.css`:
- **Púrpura**: `#7C4DFF` (color principal)
- **Coral**: `#FF7043` (color secundario)
- **Amarillo**: `#FFD54F` (color de acento)
- **Crema**: `#FFF8E1` (fondo)

#### Cambiar Título y Logo
Edita las variables de entorno en `.env`:
```bash
VITE_APP_TITLE=Tu Título Aquí
VITE_APP_LOGO=https://tu-logo.com/logo.png
```

### 2. Integrar Pagos con Stripe

Para procesar pagos reales:

1. **Crear cuenta en Stripe**: https://stripe.com
2. **Crear 3 productos** en tu dashboard:
   - Producto Base: $9.97 USD
   - Pack Premium: $19.97 USD
   - Downsell: $9.97 USD
3. **Implementar Stripe Checkout** en los botones de compra
4. **Configurar webhook** para entrega automática post-compra

### 3. Desplegar en Cloudflare (Opcional)

Para máximo rendimiento y escalabilidad:

1. **Crear cuenta** en Cloudflare: https://cloudflare.com
2. **Instalar Wrangler**: `npm install -g wrangler`
3. **Login**: `wrangler login`
4. **Crear base de datos D1**: `pnpm db:create:d1`
5. **Actualizar** `wrangler.toml` con el database_id
6. **Migrar**: `pnpm db:migrate:d1`
7. **Desplegar**: `pnpm deploy`

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas.

### 4. Configurar Dominio Personalizado

Opciones:
- **Subdominio de Manus**: Configurar en Settings → Domains
- **Dominio propio**: Conectar tu dominio en Cloudflare Pages

---

## 🔧 Comandos Útiles

### Desarrollo
```bash
# Iniciar servidor de desarrollo
pnpm dev

# El sitio estará disponible en http://localhost:3000
```

### Base de Datos
```bash
# Ver tablas de la base de datos
sqlite3 local.db ".tables"

# Ver contenido de la tabla users
sqlite3 local.db "SELECT * FROM users;"

# Ver progreso de usuarios
sqlite3 local.db "SELECT * FROM user_progress;"
```

### Build
```bash
# Build para producción
pnpm build

# Build para Cloudflare Workers
pnpm build:worker
```

---

## 📁 Estructura del Proyecto

```
network-marketing-mastery/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/            # Todas las páginas
│   │   ├── components/       # Componentes reutilizables
│   │   ├── hooks/            # useProgress para tracking
│   │   └── index.css         # Estilos y variables CSS
├── server/                    # Backend
│   ├── worker.ts             # Servidor Hono para Workers
│   ├── routers-worker.ts     # API tRPC
│   └── _core/                # Framework core
├── drizzle/                   # Base de datos
│   ├── schema.ts             # Schema SQLite
│   └── migrations/           # Migraciones SQL
├── .env                       # Variables de entorno
├── local.db                   # Base de datos SQLite local
└── README.md                  # Documentación completa
```

---

## 🎨 Diseño Visual

### Paleta de Colores "Comunidad y Conexión"
- **Púrpura** (#7C4DFF): Confianza, comunidad
- **Coral** (#FF7043): Energía, acción
- **Amarillo** (#FFD54F): Optimismo, éxito
- **Crema** (#FFF8E1): Calidez, legibilidad

### Tipografía
- **Títulos**: Poppins Bold
- **Cuerpo**: Sistema (sans-serif)

### Elementos Visuales
- Gradientes púrpura → coral
- Sombras con tinte púrpura
- Border-radius asimétricos
- Patrón SVG de red de conexiones

---

## 📊 Funcionalidad de Progreso

Cada herramienta incluye:
- ✅ **Checkboxes interactivos** para marcar completado
- ✅ **Barra de progreso visual** que se actualiza en tiempo real
- ✅ **Persistencia en localStorage** (guardado instantáneo)
- ✅ **Sincronización con base de datos** (acceso multi-dispositivo)

**Ejemplo**: En la Hoja de Ruta, al marcar un paso como completado:
- Se actualiza la barra de progreso (ej: 1/15 completados)
- Se guarda en localStorage del navegador
- Se sincroniza con la base de datos vía tRPC

---

## 🆘 Solución de Problemas

### El servidor no inicia
```bash
# Verificar que estás en el directorio correcto
cd /home/ubuntu/network-marketing-mastery

# Reinstalar dependencias
pnpm install

# Iniciar servidor
pnpm dev
```

### El progreso no se guarda
1. Verifica que la base de datos existe: `ls -la local.db`
2. Verifica las tablas: `sqlite3 local.db ".tables"`
3. Revisa la consola del navegador para errores

### Errores de TypeScript
Los warnings de compatibilidad Express/Hono son esperados y no afectan la funcionalidad.

---

## 📚 Documentación Adicional

- **README.md**: Documentación completa del proyecto
- **DEPLOYMENT.md**: Guía de despliegue en Cloudflare
- **EXPORT.md**: Guía de exportación a otras cuentas
- **todo.md**: Lista de tareas completadas

---

## 🎉 ¡Listo para Empezar!

Tu sitio web está completamente funcional. Puedes:

1. **Explorarlo** en la URL proporcionada
2. **Personalizarlo** según tus necesidades
3. **Integrarlo** con Stripe para pagos
4. **Desplegarlo** en Cloudflare para producción

**¿Tienes preguntas?** Consulta el README.md o solicita ayuda en https://help.manus.im

---

**Desarrollado con ❤️ usando Manus AI**
